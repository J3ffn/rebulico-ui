import React from "react";

import styles from "./Select.module.css";

interface SelectProps {
  label: string;
  placeholder: string;
  attributes?: React.SelectHTMLAttributes<any>;
  options: {
    name: string;
    attributes?: React.OptionHTMLAttributes<any>;
  }[];
  register?: ReturnType<any>;
}

const Select: React.FC<SelectProps> = ({
  label,
  placeholder,
  attributes,
  options,
  register,
}) => {
  return (
    <label htmlFor={label} className={styles.label_select_container}>
      {label}
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
            key={`${index}-${option.name}`}
            {...option.attributes}
            value={option.name}
          >
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
