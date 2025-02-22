import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/notice/noticesGlobal.css";

import styles from "./NoticePage.module.css";
import ContentBound from "src/components/molecules/ContentBound/ContentBound";
import { findNotice } from "src/shared/api";
import { NoticeModel } from "src/shared/models/Notice.model";
import AuthorPost from "src/components/molecules/AuthorPost/AuthorPost";

const NoticePage = () => {
  const param = useParams();
  const [notice, setNotice] = React.useState<NoticeModel>();

  const fetchNotice = React.useCallback(async () => {
    const idNotice = param.id;
    if (!idNotice) return;

    const data: any = await findNotice(idNotice);
    setNotice(data);
  }, []);

  React.useEffect(() => {
    fetchNotice();
  }, []);

  return (
    <div className={styles.notice_page_container}>
      <ContentBound>
        {!notice ? (
          <h2 style={{ height: "1000px" }}>Carregando notícia...</h2>
        ) : (
          <div className={styles.notice_page_content_container}>
            {/* <AuthorPost
              name={notice.author.name}
              imageSrc={notice.author.profile_image}
            /> */}
            <h1>{notice.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: notice.content }} />
            <div className={styles.notice_page_author_container}>
              <AuthorPost name={notice.author.name} isNoticePage={true} />
            </div>
          </div>
          // <div className={styles.notice_page_body_container}>
          //   <div className={styles.notice_page_content_container}>
          //     {/* <AuthorPost
          //     name={notice.author.name}
          //     imageSrc={notice.author.profile_image}
          //   /> */}
          //     <h1>{notice.title}</h1>
          //     <div dangerouslySetInnerHTML={{ __html: notice.content }} />
          //   </div>
          //   <div className={styles.notice_page_notice_recomendation_container}>
          //     <h1>RECOMENDATION</h1>
          //   </div>
          // </div>
        )}
      </ContentBound>
    </div>
  );
};

export default NoticePage;
