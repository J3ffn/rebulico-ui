import React from "react";
import style from "./Input.module.css";

type InputProps = {
  id: string;
  type?: string;
  value?: any;
  placeholder?: string;
  stylesPersonalized?: React.CSSProperties;
  disabled?: boolean;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      placeholder,
      value,
      stylesPersonalized,
      type = "text",
      disabled = false,
      props,
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        id={id}
        value={value}
        className={style.input}
        placeholder={placeholder}
        style={stylesPersonalized}
        type={type}
        disabled={disabled}
        {...props}
      />
    );
  }
);

export default Input;
