import React, { useContext, useEffect, useRef, useState } from "react";
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
import { createPost } from "src/shared/api";
import { getTags } from "src/shared/api/endpoints/tags/Tags.endpoints";
import { Category, Tag } from "src/shared/models/Notice.model";
import { AuthContext } from "src/context/auth/auth.context";
import { slugify } from "mui-tiptap";
import { getCategories } from "src/shared/api/endpoints/categories/Categories.endpoint";

const CreatePostPage = () => {
  const authContext = useContext(AuthContext);
  const userInfo = authContext?.authInfo?.userInfo;
  const [postInfo, setPostInfo] = useState<PostInformationForm | undefined>(undefined);
  const [postContent, setPostContent] = useState<{
    content: string;
    imageUrls: File[];
  }>({ content: "", imageUrls: [] });
  const [tags, setTags] = useState<Tag[]>([]);
  const [tag, setTag] = useState<Tag | undefined>(undefined);
  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState<Category | undefined>(undefined);
  const postInfoRef = useRef<any>(null);
  const contentEditorRef = useRef<any>(null);
  const toastContext = useToast();
  const showToast = toastContext!.showToast;
  const [isLoading, setIsLoading] = useState(false);

  const fetchTags = async () => {
    try {
      const response = await getTags();
      setTags(response);
    } catch (error) {
      console.error("Error fetching tags:", error);
      showToast("Ocorreu um erro ao buscar as tags.", "error");
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response);
    } catch (error) {
      console.error(error);
      showToast("Ocorreu um erro ao buscar as categorias.", "error");
    }
  };

  useEffect(() => {
    fetchTags();
    fetchCategories();
  }, []);

  const handleContentChange = ({ content, images }: { content: string; images: File[] }) => {
    setPostContent({ content, imageUrls: images });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isPostInfoValid = await postInfoRef.current?.validate();
    const isContentValid = await contentEditorRef.current?.validate();

    if (!isPostInfoValid || !isContentValid || postInfo?.principalImage === null) {
      showToast("Por favor, preencha todos os campos obrigatórios.", "error");
      return;
    }

    try {
      setIsLoading(true);

      // const collaborators = postInfo?.collaborators?.split(",")?.map((collaborator) => ({ name: collaborator.trim() })) || [];
      const payload = {
        title: postInfo!.title,
        tag: {
          ...tag,
          slug: slugify(tag!.name),
        },
        categorie: category,
        author: {
          id: userInfo?._id,
          name: userInfo?.username,
        },
        content: postContent.content,
        collaborator: [],
        published_at: new Date().toISOString(),
      };

      const formData = new FormData();

      formData.append("data", JSON.stringify(payload));
      formData.append("banner", postInfo!.principalImage!);
      postContent.imageUrls.forEach((image) => {
        formData.append("images", image, image.name);
      });

      await createPost(formData);

      showToast("Post criado com sucesso", "success");
      if (postInfoRef?.current && contentEditorRef?.current) {
        postInfoRef.current.resetForm();
        contentEditorRef.current.resetForm();
      }
    } catch (error) {
      console.error("Erro ao criar o post:", error);
      showToast("Erro ao criar o post", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.create_post_container}>
      <ContentBound>
        <CreateNoticeStorage>
          <div className={styles.page_header}>
            <h1 className={styles.page_title}>Criação de post:</h1>
            <button className={styles.submit_button} onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? "Publicando..." : "Concluir e publicar"}
              <Icon src={checkmarkOutline} ariaLabel="checked"></Icon>
            </button>
          </div>
          <PostInformationDefine
            ref={postInfoRef}
            onChange={setPostInfo}
            initialData={postInfo}
            tags={tags}
            setTag={setTag}
            categories={categories}
            setCategory={setCategory}
          />
          <div style={{ marginTop: "1.5rem" }}>
            <ContentEditor ref={contentEditorRef} onChange={handleContentChange} initialContent={postContent} />
          </div>
        </CreateNoticeStorage>
      </ContentBound>
    </div>
  );
};

export default CreatePostPage;
