import React from "react";
import styles from "./HomeContent.module.css";
import HighlightNews from "src/components/molecules/HighlightNews/HighlightNews";
import LatestNews from "src/components/molecules/LatestNews/LatestNews";
import { PrincipalsNoticesContext } from "src/context/principalsNotices/PrincipalsNotices.context";
import RecentUpdates from "src/components/molecules/RecentUpdates/RecentUpdates";
import ContentBound from "src/components/molecules/ContentBound/ContentBound";
import LatestPosts from "src/components/molecules/LatestPosts/LatestPosts";
import Stories from "src/components/molecules/Stories/Stories";

const HomeContent = () => {
  const context = React.useContext(PrincipalsNoticesContext);

  return (
    <div className={styles.home_content_container}>
      {context?.principalsNotices && (
        <main>
          <ContentBound>
            <section className={styles.principals_news_section}>
              <HighlightNews content={context.principalsNotices.highlight} />
              <LatestNews content={context.principalsNotices.latest_news} />
            </section>
          </ContentBound>
          <section className={styles.recent_updates_section}>
            <ContentBound
              classNamePersonalized={styles.recent_updates_container}
            >
              <RecentUpdates
                content={context.principalsNotices.recent_updates}
              />
            </ContentBound>
          </section>
          <section className={styles.latest_posts_section}>
            <ContentBound classNamePersonalized={styles.latest_posts_container}>
              <LatestPosts content={context.principalsNotices.latest_posts} />
              <Stories content={context.principalsNotices.stories} />
            </ContentBound>
          </section>
        </main>
      )}
    </div>
  );
};

export default HomeContent;
