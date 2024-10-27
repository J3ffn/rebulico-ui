import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  attributes: React.ButtonHTMLAttributes<HTMLButtonElement>;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ attributes, children }) => {
  return (
    <button className={styles.btn} {...attributes}>
      {children}
    </button>
  );
};

export default Button;
