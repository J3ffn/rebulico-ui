import PostInformationDefine from "src/components/molecules/PostInformationDefine/PostInformationDefine";
import ContentEditor from "../ContentEditor/ContentEditor";
import { useCreateNotice } from "src/hooks/useContext/useCreateNotice";
import React from "react";
import { Button } from "@mui/material";

const CreatePostContent = () => {
  const { onSubmit } = useCreateNotice();

  const submitForm = React.useCallback((event: React.FormEvent) => {
    event.preventDefault();
    onSubmit();
  }, []);

  return (
    <div>
      <form onSubmit={submitForm}>
        <Button type="submit" >Concluir e publicar</Button>
        <PostInformationDefine />
        <ContentEditor />
      </form>
    </div>
  );
};

export default CreatePostContent;
