import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import siteLogo from "src/assets/defaultImages/SiteLogo.svg";

const Logo: React.FC = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img src={siteLogo} alt="Logo do site" />
    </Link>
  );
};

export default Logo;
