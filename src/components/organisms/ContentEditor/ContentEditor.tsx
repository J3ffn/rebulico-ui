import { Lock, LockOpen, TextFields } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import type { EditorOptions } from "@tiptap/core";
import React from "react";
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
import { useCreateNotice } from "src/hooks/useContext/useCreateNotice";

import documentIcon from "../../../assets/images/createPost/document.svg";

import styles from "./ContentEditor.module.css";
import IconText from "src/components/molecules/IconText/IconText";

function fileListToImageFiles(fileList: FileList): File[] {
  return Array.from(fileList).filter((file) => {
    const mimeType = (file.type || "").toLowerCase();
    return mimeType.startsWith("image/");
  });
}

export default function ContentEditor() {
  const { setNoticeField } = useCreateNotice();

  const extensions = useExtensions({
    placeholder: "Adicione o conteúdo aqui...",
  });

  const rteRef = React.useRef<RichTextEditorRef>(null);
  const [isEditable, setIsEditable] = React.useState(true);
  const [showMenuBar, setShowMenuBar] = React.useState(true);

  const handleNewImageFiles = React.useCallback(
    (files: File[], insertPosition?: number): void => {
      if (!rteRef.current?.editor) {
        return;
      }

      const convertToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file);
        });
      };

      // Processar arquivos e gerar atributos
      Promise.all(
        files.map(async (file) => ({
          src: await convertToBase64(file),
          alt: file.name,
        }))
      ).then((attributesForImageFiles) => {
        console.log("Atributos com base64:", attributesForImageFiles);

        insertImages({
          images: attributesForImageFiles,
          editor: rteRef.current.editor,
          position: insertPosition,
        });
      });
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
    setNoticeField("content", data);
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
            handleDrop,
            handlePaste,
          }}
          renderControls={() => (
            <EditorMenuControls handleNewImageFiles={handleNewImageFiles} />
          )}
          RichTextFieldProps={{
            className: styles.content_editor_container,
            // A variante "outlined" é a padrão (mostrada aqui apenas como
            // exemplo), mas pode ser alterada para "standard" para remover a borda
            // do campo do editor
            variant: "standard",
            RichTextContentProps: {
              className: styles.teste,
            },
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
}
