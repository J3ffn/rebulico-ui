import React from "react";

import styles from "./Select.module.css";
import { Category, Tag } from "src/shared/models/Notice.model";

interface SelectProps {
  label: string;
  render: () => React.JSX.Element;
  placeholder: string;
  attributes?: React.SelectHTMLAttributes<any>;
  options: {
    tag?: Tag;
    category?: Category;
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
            key={`${index}-${option?.tag?._id}`}
            {...option.attributes}
            value={String(option?.tag?._id) || String(option?.category?._id)}
          >
            {option?.tag?.name || option?.category?.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
