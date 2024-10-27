import React from "react";
import HighlightNewsModel from "src/shared/models/HighlightNews.model";

import styles from "./HighlightNews.module.css";

interface HighlightNewsProps {
  content: HighlightNewsModel;
}

const HighlightNews: React.FC<HighlightNewsProps> = ({ content }) => {
  return (
    <div className={styles.HighlightNews_container}>
      <p>{content.author.name}</p>
      <h1>{content.title}</h1>
      <span>{content.tag} | {content.read_time}</span>
      <img src={content.media.url} alt={content.media.alt} />
    </div>
  );
};

export default HighlightNews;
