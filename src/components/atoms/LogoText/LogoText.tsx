import React from "react";
import styles from "./LogoText.module.css";
import siteLogoText from "src/assets/images/default/SiteLogoText.png";

const LogoText: React.FC<{ iamgeSx?: React.CSSProperties }> = ({ iamgeSx }) => {
  return (
    <div className={styles.logoText}>
      <img src={siteLogoText} alt="Logo do site" style={iamgeSx} />
    </div>
  );
};

export default LogoText;
