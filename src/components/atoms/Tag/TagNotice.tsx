import React from "react";
import styles from "./TagNotice.module.css"

interface TagPostProps {
  tagText?: string;
  read_time?: number;
}

const TagPost: React.FC<TagPostProps> = ({ tagText = undefined, read_time = undefined }) => {
  return (
    <div className={styles.tagPost_container}>
      <span className={styles.tagText}>{tagText}</span>
      <span className={styles.dividor_tag}>{tagText && read_time && "|"}</span>
      <span className={styles.read_time}>{read_time} min de leitura</span>
    </div>
  );
};

export default TagPost;
