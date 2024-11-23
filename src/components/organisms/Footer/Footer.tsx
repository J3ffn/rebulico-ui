import React from "react";

import styles from "./Footer.module.css";

import CCTAImage from "../../../assets/images/default/footer/logo_ccta.png";
import dejorImage from "../../../assets/images/default/footer/logo_dejor.png";
import UFPBImage from "../../../assets/images/default/footer/Brasão_UFPB.png";
import DECONImage from "../../../assets/images/default/footer/logo_decom.png";
import PROEXImage from "../../../assets/images/default/footer/logo_PROEX.png";
import ContentBound from "src/components/molecules/ContentBound/ContentBound";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <ContentBound>
        <div className={styles.footer_container_main}>
          <div className={styles.footer_images_container}>
            <div className={styles.footer_border_icons_container}>
              <img src={CCTAImage} alt="" />
              <img src={dejorImage} alt="" />
            </div>
            <div className={styles.footer_images_ufpb_container}>
              <img src={UFPBImage} alt="" />
              <span>UFPB</span>
            </div>
            <div className={styles.footer_border_icons_container}>
              <img src={DECONImage} alt="" />
              <img src={PROEXImage} alt="" />
            </div>
          </div>
          <span>© Todos os direitos reservados</span>
        </div>
      </ContentBound>
    </div>
  );
};

export default Footer;
