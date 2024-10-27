import React from "react";
import styles from "./ContentBound.module.css";

interface ContentBoundTemplateProps {
  children: React.ReactNode;
}

const ContentBound: React.FC<ContentBoundTemplateProps> = ({ children }) => {
  return <div id="limit-leyout" className={styles.leyout_template_container}>{children}</div>;
};

export default ContentBound;
