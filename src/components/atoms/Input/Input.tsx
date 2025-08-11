import React from "react";
import style from "./Input.module.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  stylesPersonalized?: React.CSSProperties;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { stylesPersonalized, ...rest },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={style.input}
        style={stylesPersonalized}
        {...rest}
      />
    );
  }
);

export default Input;