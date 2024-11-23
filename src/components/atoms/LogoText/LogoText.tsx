import React from "react";
import { Link } from "react-router-dom";
import styles from "./LogoText.module.css";
import siteLogoText from "src/assets/images/default/SiteLogoText.png";

const LogoText: React.FC<{ iamgeSx?: React.CSSProperties }> = ({ iamgeSx }) => {
  return (
    <Link to="/" className={styles.logoText}>
      <img src={siteLogoText} alt="Logo do site" style={iamgeSx} />
    </Link>
  );
};

export default LogoText;
