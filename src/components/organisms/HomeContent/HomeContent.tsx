import React from "react";
import styles from "./HomeContent.module.css";
import HighlightNews from "src/components/molecules/HighlightNews/HighlightNews";
import LatestNews from "src/components/molecules/LatestNews/LatestNews";
import { PrincipalsNoticesContext } from "src/context/principalsNotices/PrincipalsNotices.context";

const HomeContent = () => {
  const context = React.useContext(PrincipalsNoticesContext);

  return (
    <div className={styles.home_content_container}>
      <section className={styles.principals_news_section}>
        <HighlightNews content={context?.principalsNotices.highlight} />
        <LatestNews content={context?.principalsNotices.latest_news} />
      </section>
    </div>
  );
};

export default HomeContent;
