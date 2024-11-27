import React from "react";
import styles from "./TagNotice.module.css";

interface TagPostProps {
  tag: {
    text: string;
    color: string;
  };
  categorie: string;
  haveTextBackground?: boolean;
  stylesPersonalized?: React.CSSProperties
}

const TagPost: React.FC<TagPostProps> = ({
  tag,
  categorie,
  haveTextBackground,
  stylesPersonalized
}) => {
  const stylesIfWithBackground: React.CSSProperties = haveTextBackground
    ? {
        background: haveTextBackground ? "#000" : "none",
        padding: haveTextBackground ? "5px" : "none",
        borderRadius: haveTextBackground ? "5px" : "none",
      }
    : {};

  return (
    <div className={styles.tagPost_container + " tag_container"} style={stylesPersonalized}>
      <span
        className={styles.tagText}
        style={{
          color: tag?.color ? tag.color : "unset",
          textTransform: "uppercase",
          ...stylesIfWithBackground,
        }}
      >
        {tag?.text}
      </span>
      <span className={styles.dividor_tag}>{tag && categorie && "|"}</span>
      {categorie && <span className={styles.categorie}>{categorie}</span>}
    </div>
  );
};

export default TagPost;
