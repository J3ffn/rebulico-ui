import React from "react";

import styles from "./Label.module.css";

type LabelProps = {
  text: string;
  htmlFor?: string;
  children: React.ReactNode;
  required?: boolean;
};

const Label: React.FC<LabelProps> = ({ text, htmlFor, children, required }) => {
  return (
    <label htmlFor={htmlFor} className={styles.label_container}>
      <div className={styles.label_text_container}>
        {text}
        {required && <span style={{ color: "red", marginLeft: '2px' }}>*</span>}:
      </div>
      {children}
    </label>
  );
};

export default Label;
