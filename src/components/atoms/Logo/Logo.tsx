import React from "react";
import styles from "./Logo.module.css";
import siteLogo from "src/assets/images/default/SiteLogo.svg";

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <img src={siteLogo} alt="Logo do site" />
    </div>
  );
};

export default Logo;
