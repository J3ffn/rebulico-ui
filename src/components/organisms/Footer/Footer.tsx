import styles from "./Footer.module.css";

import CCTAImage from "../../../assets/images/default/footer/logo_ccta.png";
import dejorImage from "../../../assets/images/default/footer/logo_dejor.png";
import UFPBImage from "../../../assets/images/default/footer/Brasão_UFPB.svg";
import DECONImage from "../../../assets/images/default/footer/logo_decom.png";
import PROEXImage from "../../../assets/images/default/footer/logo_PROEX.png";
import instagramImage from "../../../assets/images/default/footer/Instagram_icon.svg";
import EmailImage from "../../../assets/images/default/footer/Email_icon.svg";
import siteLogo from "../../../assets/images/default/SiteLogo.svg";
import ContentBound from "src/components/molecules/ContentBound/ContentBound";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <ContentBound>
        <div className={styles.footer_container_main}>
          <div className={styles.footer_images_container}>
            <div className={styles.footer_start_container}>
              <div className={styles.footer_start_content}>
                <img src={UFPBImage} alt="" width={"60px"} />
                <span>UFPB</span>
              </div>
            </div>

            <div className={styles.footer_center_information_container}>
              <img src={siteLogo} alt="" width={"60px"} />
              <div className={styles.footer_social_midia}>
                <Link
                  to="https://www.instagram.com/rebulicoufpb/"
                  target="_blank"
                >
                  <img src={instagramImage} alt="" width={"50px"} />
                </Link>
                <Link type="email" to="mailto:rebulicou@gmail.com">
                  <img src={EmailImage} alt="" width={"50px"} />
                </Link>
              </div>
            </div>
            <div className={styles.footer_border_icons_container}>
              <img src={CCTAImage} alt="" />
              <img src={dejorImage} alt="" />
              <img src={DECONImage} alt="" />
              <img src={PROEXImage} alt="" />
            </div>
          </div>
          <div className={styles.footer_end_information}>
            <span className={styles.footer_directs}>
              © Todos os direitos reservados
            </span>
          </div>
        </div>
      </ContentBound>
    </div>
  );
};

export default Footer;
