import React from "react";
import style from "./Input.module.css";

type InputProps = {
  attributes: React.InputHTMLAttributes<HTMLInputElement>;
  width?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ attributes, width }, ref) => {
  return (
    <label
      htmlFor={attributes.name}
      className={style.input_container}
      style={{ width: width, gap: "5px", ...attributes.style }}
    >
      {attributes.name}
      <input ref={ref} {...attributes} id={attributes.name} className={style.input} />
    </label>
  );
});

export default Input;
