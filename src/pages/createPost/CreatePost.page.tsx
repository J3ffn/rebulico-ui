import React, { useRef, useState } from "react";
import ContentBound from "src/components/molecules/ContentBound/ContentBound";

import styles from "./CreatePost.module.css";
import ContentEditor from "src/components/organisms/ContentEditor/ContentEditor";
import { CreateNoticeStorage } from "src/context/createNotice/CreateNotice.context";
import PostInformationDefine, {
  PostInformationForm,
} from "src/components/molecules/PostInformationDefine/PostInformationDefine";
import { useToast } from "src/context/toast/Toast.context";
import Icon from "src/components/atoms/Icon/Icon";
import checkmarkOutline from "src/assets/images/default/checkmark-outline.svg";

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

const CreatePostPage = () => {
  const [postInfo, setPostInfo] = useState<PostInformationForm | undefined>(
    undefined
  );
  const [postContent, setPostContent] = useState<{
    content: string;
    images: File[];
  }>({ content: "", images: [] });
  const postInfoRef = useRef<any>(null);
  const contentEditorRef = useRef<any>(null);
  const toastContext = useToast();
  const showToast = toastContext!.showToast;

  const handleContentChange = ({
    content,
    images,
  }: {
    content: string;
    images: File[];
  }) => {
    setPostContent({ content, images });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isPostInfoValid = await postInfoRef.current?.validate();
    const isContentValid = await contentEditorRef.current?.validate();

    if (!isPostInfoValid || !isContentValid) {
      showToast("Por favor, preencha todos os campos obrigatórios.", "error");
      return;
    }

    console.log("Informações do post:", postInfo);
    console.log("Conteúdo do post:", postContent.content);
    console.log("Imagens do conteúdo:", postContent.images);

    const imageAttributes = extractImageOrderAndAttributes(postContent.content);
    console.log(
      "Ordem e atributos das imagens extraídas do HTML:",
      imageAttributes
    );
  };

  return (
    <div className={styles.create_post_container}>
      <ContentBound>
        <CreateNoticeStorage>
          <div className={styles.page_header}>
            <h1 className={styles.page_title}>Criação de post:</h1>
            <button className={styles.submit_button} onClick={handleSubmit}>
              Concluir e publicar
              <Icon src={checkmarkOutline} ariaLabel="checked"></Icon>
            </button>
          </div>
          <ContentBound personalPadding="40px 90px 0px 90px">
            <PostInformationDefine
              ref={postInfoRef}
              onChange={setPostInfo}
              initialData={postInfo}
            />
            <ContentEditor
              ref={contentEditorRef}
              onChange={handleContentChange}
              initialContent={postContent}
            />
          </ContentBound>
        </CreateNoticeStorage>
      </ContentBound>
    </div>
  );
};

export default CreatePostPage;
