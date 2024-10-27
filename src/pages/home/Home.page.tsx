import React from "react";

import styles from "./Home.module.css";
import { PrincipalsNoticesContext } from "src/context/principalsNotices/PrincipalsNotices.context";
import ContentBound from "src/components/molecules/ContentBound/ContentBound";
import HomeContent from "src/components/organisms/HomeContent/HomeContent";

const HomePage = () => {
  const context = React.useContext(PrincipalsNoticesContext);

  return (
    <div id="home" className={styles.home_container}>
      <ContentBound>
        {context?.loading ? (
          <h2>Loading...</h2>
        ) : (
          <HomeContent />
        )}
      </ContentBound>
    </div>
  );
};

export default HomePage;