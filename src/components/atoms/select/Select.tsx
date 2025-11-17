import React from "react";

import styles from "./Select.module.css";
import { Tag } from "src/shared/models/Notice.model";

interface SelectProps {
  label: string;
  placeholder: string;
  attributes?: React.SelectHTMLAttributes<any>;
  options: {
    tag: Tag;
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
            key={`${index}-${option.tag._id}`}
            {...option.attributes}
            value={String(option.tag._id)}
          >
            {option.tag.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
