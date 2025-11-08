import React from "react";

import styles from "./Home.module.css";
import { PrincipalsNoticesContext } from "src/context/principalsNotices/PrincipalsNotices.context";
import HomeContent from "src/components/organisms/HomeContent/HomeContent";
import loaderImg from "../../assets/images/loading/motion-blur-loader.svg";

const HomePage = () => {
  const context = React.useContext(PrincipalsNoticesContext);

  return (
    <div id="home" className={styles.home_container}>
      {context?.loading ? (
        <div className={styles.load_notice}>
          <img className={styles.loader_img} src={loaderImg} alt="Carregando" />
        </div>
      ) : (
        <HomeContent />
      )}
    </div>
  );
};

export default HomePage;
