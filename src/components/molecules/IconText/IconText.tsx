import React from "react";
import Icon from "src/components/atoms/Icon/Icon";

import styles from "./IconText.module.css";

interface IconTextProps {
  iconProps: {
    imageSrc: string;
    ariaLabel: string;
  };
  text: string;
}

const IconText: React.FC<IconTextProps> = ({ iconProps, text }) => {
  return (
    <div className={styles.icon_text_container}>
      <Icon src={iconProps.imageSrc} ariaLabel={iconProps.ariaLabel} />
      <h3 className={styles.text_content}>{text}</h3>
    </div>
  );
};

export default IconText;
