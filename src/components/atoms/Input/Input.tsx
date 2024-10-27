import React from "react";
import style from "./Input.module.css";
import InputContext from "src/context/input/Input.context";

type InputProps = {
  label: string;
  attributes: React.InputHTMLAttributes<HTMLInputElement>;
};

const Input: React.FC<InputProps> = (props) => {
  const { value, setValue } = InputContext<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value: string = event.target.value;
    setValue(value);
  }

  return (
    <label htmlFor={props.attributes.name}>
      {props.label}
      <input
        {...props.attributes}
        id={props.attributes.name}
        value={value}
        className={style.input}
        onChange={handleChange}
      />
    </label>
  );
};

export default Input;
