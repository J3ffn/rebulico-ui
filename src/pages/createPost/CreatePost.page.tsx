import React from "react";
import ContentBound from "src/components/molecules/ContentBound/ContentBound";

import styles from "./CreatePost.module.css";
import ContentEditor from "src/components/organisms/ContentEditor/ContentEditor";
import { CreateNoticeStorage } from "src/context/createNotice/CreateNotice.context";
import PostInformationDefine from "src/components/molecules/PostInformationDefine/PostInformationDefine";

const CreatePostPage: React.FC = () => {
  return (
    <div className={styles.create_post_container}>
      <ContentBound>
        <CreateNoticeStorage>
          <h1 className={styles.page_title}>Criação de post:</h1>
          <ContentBound
          // personalPadding="40px 90px 0px 90px"
          >
            <PostInformationDefine />
            <ContentEditor />
          </ContentBound>
        </CreateNoticeStorage>
      </ContentBound>
    </div>
  );
};

export default CreatePostPage;
