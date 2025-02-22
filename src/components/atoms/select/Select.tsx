import React from "react";

import styles from "./Select.module.css";

interface OptionProps {
  id: string;
  name: string;
  attributes?: React.OptionHTMLAttributes<any>;
}

interface SelectProps {
  label: string;
  placeholder: string;
  attributes?: React.SelectHTMLAttributes<any>;
  options: OptionProps[];
  onChangeOption: (option: OptionProps) => any;
}

const Select: React.FC<SelectProps> = ({
  label,
  placeholder,
  attributes,
  options,
  onChangeOption,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("HANDLER")
    const selectedOption = options.find(
      (option) => option.name === e.target.value
    );
    if (selectedOption) {
      onChangeOption(selectedOption);
    }
  };

  return (
    <label htmlFor={label} className={styles.label_select_container}>
      {label}
      {attributes?.required && "*"}:
      <select
        id={label}
        {...attributes}
        onChange={handleChange}
        className={styles.select_container}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option
            key={`${index}-${option.name}`}
            {...option.attributes}
            id={option.id}
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
