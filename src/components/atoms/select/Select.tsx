import React from "react";

import styles from "./Select.module.css";

interface SelectProps {
  label: string;
  render: () => React.JSX.Element;
  placeholder: string;
  attributes?: React.SelectHTMLAttributes<any>;
  options: {
    name: string;
    value: string;
    attributes?: React.OptionHTMLAttributes<any>;
  }[];
  register?: ReturnType<any>;
}

const Select: React.FC<SelectProps> = ({
  render,
  label,
  placeholder,
  attributes,
  options,
  register,
}) => {
  return (
    <label htmlFor={label} className={styles.label_select_container}>
      {render()}
      <select
        id={label}
        {...(register ? register : {})}
        {...attributes}
        className={styles.select_container}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option
            key={`${index}-${option.value}`}
            {...option.attributes}
            value={option.value}
          >
            {option.name || option.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
