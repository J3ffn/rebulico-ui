import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/notice/noticesGlobal.css";

import styles from "./NoticePage.module.css";
import ContentBound from "src/components/molecules/ContentBound/ContentBound";
import { getNotice } from "src/shared/api";
import { NoticeModel } from "src/shared/models/Notice.model";
import AuthorPost from "src/components/molecules/AuthorPost/AuthorPost";

const NoticePage = () => {
  const param = useParams();
  const [notice, setNotice] = React.useState<NoticeModel>();

  React.useEffect(() => {
    const fetchNotice = async () => {
      const idNotice = param.id;
      if (!idNotice) return;

      const data = await getNotice(idNotice);
      setNotice(data);
    };

    fetchNotice();
  }, []);

  return (
    <div className={styles.notice_page_container}>
      <ContentBound>
        {!notice ? (
          <h2>Carregando notícia...</h2>
        ) : (
          <div className={styles.notice_page_content_container}>
            {/* <AuthorPost
              name={notice.author.name}
              imageSrc={notice.author.profile_image}
            /> */}
            <h1>{notice.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: notice.content }} />
            <div className={styles.notice_page_author_container}>
              <span style={{ color: "#727272", fontSize: "14px" }}>
                Produzido por:
              </span>
              <AuthorPost
                imageSrc={notice.author.profile_image}
                name={notice.author.name}
              />
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
