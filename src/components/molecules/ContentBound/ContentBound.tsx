import React from "react";
import styles from "./ContentBound.module.css";

interface ContentBoundTemplateProps {
  children: React.ReactNode;
  personalPadding?: string;
  classNamePersonalized?: string;
}

const ContentBound: React.FC<ContentBoundTemplateProps> = ({
  children,
  personalPadding,
  classNamePersonalized,
}) => {
  return (
    <div
      id="content-bound"
      className={`${styles.leyout_template_container} ${classNamePersonalized}`}
      style={{ padding: personalPadding }}
    >
      {children}
    </div>
  );
};

export default ContentBound;
