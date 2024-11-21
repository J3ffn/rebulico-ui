import React from "react";
import style from "./Input.module.css";

type InputProps = {
  id: string;
  type?: string;
  placeholder?: string;
  stylesPersonalized?: React.CSSProperties;
  disabled?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { id, placeholder, stylesPersonalized, type = "text", disabled = false },
    ref
  ) => {
    return (
      <input
        ref={ref}
        id={id}
        className={style.input}
        placeholder={placeholder}
        style={stylesPersonalized}
        type={type}
        disabled={disabled}
      />
    );
  }
);

export default Input;
