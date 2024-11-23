import React from "react";
import styles from "./TagNotice.module.css";

interface TagPostProps {
  tagText?: string;
  read_time?: number;
  hours_ago?: number;
  tagColorDefault?: boolean
}

const TagPost: React.FC<TagPostProps> = ({ tagText, read_time, hours_ago, tagColorDefault = true }) => {
  return (
    <div className={styles.tagPost_container + " tag_container"}>
      <span className={styles.tagText} style={{color: tagColorDefault ? "#931981" : "unset"}}>{tagText}</span>
      <span className={styles.dividor_tag}>
        {tagText && (read_time || hours_ago) && "|"}
      </span>
      {read_time && (
        <span className={styles.read_time}>{read_time} min de leitura</span>
      )}
      {hours_ago && (
        <span className={styles.read_time}>{hours_ago} horas atrás</span>
      )}
    </div>
  );
};

export default TagPost;
