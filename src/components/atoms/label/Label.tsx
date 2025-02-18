import React from "react";

import styles from "./Label.module.css";

type LabelProps = {
  text: string;
  htmlFor?: string;
  children: React.ReactNode;
  required?: boolean;
  sxLabel?: React.CSSProperties;
};

const Label: React.FC<LabelProps> = ({
  text,
  htmlFor,
  children,
  required,
  sxLabel,
}) => {
  return (
    <label htmlFor={htmlFor} className={styles.label_container} style={sxLabel}>
      <div className={styles.label_text_container}>
        {text}
        {required && <span style={{ color: "red", marginLeft: "2px" }}>*</span>}
        {text && ":"}
      </div>
      {children}
    </label>
  );
};

export default Label;
