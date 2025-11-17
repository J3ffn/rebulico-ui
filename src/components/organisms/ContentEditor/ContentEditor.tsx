import { Lock, LockOpen, TextFields } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import type { EditorOptions } from "@tiptap/core";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import {
  LinkBubbleMenu,
  MenuButton,
  RichTextEditor,
  TableBubbleMenu,
  insertImages,
  type RichTextEditorRef,
} from "mui-tiptap";
import EditorMenuControls from "src/components/molecules/EditorMenuControls/EditorMenuControls";
import useExtensions from "src/hooks/extensions/useExtensions";
// import { useCreateNotice } from "src/hooks/useContext/useCreateNotice";

import documentIcon from "../../../assets/images/createPost/document.svg";

import styles from "./ContentEditor.module.css";
import IconText from "src/components/molecules/IconText/IconText";
import { useForm } from "react-hook-form";

interface ContentEditorProps {
  onChange: ({ content, images }: { content: string; images: File[] }) => void;
  initialContent?: { content: string };
  imgSrcMap?: (imageUrls: Array<{ src: string }>) => void;
}

function fileListToImageFiles(fileList: FileList): File[] {
  return Array.from(fileList).filter((file) => {
    const mimeType = (file.type || "").toLowerCase();
    return mimeType.startsWith("image/");
  });
}

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const extractImageOrderAndAttributes = (html: string) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  const images = Array.from(div.querySelectorAll("img"));
  return images.map((img) => ({
    src: img.src,
    alt: img.alt,
    width: img.width,
    height: img.height,
  }));
};

const ContentEditor = forwardRef((props: ContentEditorProps, ref) => {
  const {
    register,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<{ content: string }>({
    defaultValues: props.initialContent || {
      content: "",
    },
  });
  register("content", {
    required: "O conteúdo é obrigatório.",
    minLength: {
      value: 20,
      message: "O conteúdo deve ter pelo menos 20 caracteres.",
    },
    validate: (value) =>
      value.replace(/<[^>]+>/g, "").trim().length > 0 ||
      "O conteúdo não pode ser vazio.",
  });

  // const { setNoticeField } = useCreateNotice();

  useImperativeHandle(
    ref,
    () => ({
      validate: () => trigger("content"),
    }),
    [trigger]
  );

  const extensions = useExtensions({
    placeholder: "Adicione o conteúdo aqui...",
  });

  const rteRef = React.useRef<RichTextEditorRef>(null);
  const [isEditable, setIsEditable] = React.useState(true);
  const [showMenuBar, setShowMenuBar] = React.useState(true);
  const imagesRef = useRef<{ file: File; url: string }[]>([]);

  const handleNewImageFiles = React.useCallback(
    (files: File[], insertPosition?: number): void => {
      if (!rteRef.current?.editor) return;

      const newImageObjs = files.map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));

      imagesRef.current = [...imagesRef.current, ...newImageObjs];

      const attributesForImageFiles = newImageObjs.map((obj) => ({
        src: obj.url,
        alt: obj.file.name,
      }));

      insertImages({
        images: attributesForImageFiles,
        editor: rteRef.current.editor,
        position: insertPosition,
      });

      const html = rteRef.current.editor.getHTML();
      changeContent(html);
    },
    []
  );

  // Permite soltar imagens no editor
  const handleDrop: NonNullable<EditorOptions["editorProps"]["handleDrop"]> =
    React.useCallback(
      (view, event, _slice, _moved) => {
        if (!(event instanceof DragEvent) || !event.dataTransfer) {
          return false;
        }

        const imageFiles = fileListToImageFiles(event.dataTransfer.files);
        if (imageFiles.length > 0) {
          const insertPosition = view.posAtCoords({
            left: event.clientX,
            top: event.clientY,
          })?.pos;

          handleNewImageFiles(imageFiles, insertPosition);

          // Retorna true para tratar o evento como tratado. Chamamos preventDefault
          // nós mesmos por precaução.
          event.preventDefault();
          return true;
        }

        return false;
      },
      [handleNewImageFiles]
    );

  // Permite colar imagens
  const handlePaste: NonNullable<EditorOptions["editorProps"]["handlePaste"]> =
    React.useCallback(
      (_view, event, _slice) => {
        if (!event.clipboardData) {
          return false;
        }

        const pastedImageFiles = fileListToImageFiles(
          event.clipboardData.files
        );
        if (pastedImageFiles.length > 0) {
          handleNewImageFiles(pastedImageFiles);
          return true;
        }

        // Retornamos false aqui para permitir que o manipulador de colar padrão seja executado.
        return false;
      },
      [handleNewImageFiles]
    );

  function changeContent(data: string) {
    const imageAttrs = extractImageOrderAndAttributes(data);
    const htmlImageSrc = imageAttrs.map((attr: any) => attr.src);

    imagesRef.current = imagesRef.current.filter((obj) =>
      htmlImageSrc.includes(obj.url)
    );

    let cleanedContent = data;

    imagesRef.current.forEach((imageObj) => {
      const blobUrl = imageObj.url;
      const originalName = imageObj.file.name;

      const regex = new RegExp(escapeRegExp(blobUrl), 'g');
      cleanedContent = cleanedContent.replace(regex, originalName);
    });

    props.onChange({
      content: cleanedContent,
      images: imagesRef.current.map((obj) => obj.file),
    });

    setValue("content", data, { shouldValidate: true });
  }

  return (
    <>
      <IconText
        iconProps={{
          imageSrc: documentIcon,
          ariaLabel: "Icone do conteúdo da postagem",
        }}
        text="Conteúdo da postagem:"
      />
      {errors.content && (
        <span
          style={{
            position: "relative",
            bottom: "5px",
            color: "red",
            fontSize: "12px",
          }}
        >
          {errors.content.message}
        </span>
      )}

      <Box
        sx={{
          "& .ProseMirror": {
            "& h1, & h2, & h3, & h4, & h5, & h6": {
              scrollMarginTop: showMenuBar ? 50 : 0,
            },
          },
        }}
      >
        <RichTextEditor
          ref={rteRef}
          extensions={extensions}
          onUpdate={(e) => changeContent(e.editor?.getHTML() ?? "")}
          editable={isEditable}
          editorProps={{
            handleDrop: handleDrop,
            handlePaste: handlePaste,
          }}
          renderControls={() => <EditorMenuControls onUploadImages={handleNewImageFiles} />}
          RichTextFieldProps={{
            className: styles.content_editor_container,
            // A variante "outlined" é a padrão (mostrada aqui apenas como
            // exemplo), mas pode ser alterada para "standard" para remover a borda
            // do campo do editor
            variant: "standard",
            MenuBarProps: {
              hide: !showMenuBar,
            },
            footer: (
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  borderTopStyle: "solid",
                  borderTopWidth: 1,
                  borderTopColor: (theme) => theme.palette.divider,
                  py: 1,
                  px: 1.5,
                }}
              >
                <MenuButton
                  value="formatting"
                  tooltipLabel={
                    showMenuBar ? "Ocultar formatação" : "Mostrar formatação"
                  }
                  size="small"
                  onClick={() =>
                    setShowMenuBar((currentState) => !currentState)
                  }
                  selected={showMenuBar}
                  IconComponent={TextFields}
                />

                <MenuButton
                  value="formatting"
                  tooltipLabel={
                    isEditable
                      ? "Impedir edições (usar modo somente leitura)"
                      : "Permitir edições"
                  }
                  size="small"
                  onClick={() => setIsEditable((currentState) => !currentState)}
                  selected={!isEditable}
                  IconComponent={isEditable ? Lock : LockOpen}
                />
              </Stack>
            ),
          }}
        >
          {() => (
            <>
              <LinkBubbleMenu />
              <TableBubbleMenu />
            </>
          )}
        </RichTextEditor>
      </Box>
    </>
  );
});

export default ContentEditor;
