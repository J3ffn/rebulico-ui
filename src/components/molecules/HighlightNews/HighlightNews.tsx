import React from "react";
import HighlightNewsModel from "src/shared/models/HighlightNews.model";

import styles from "./HighlightNews.module.css";
import TagPost from "src/components/atoms/Tag/TagNotice";
import AuthorPost from "../AuthorPost/AuthorPost";
import { Link } from "react-router-dom";

interface HighlightNewsProps {
  content: HighlightNewsModel;
}

const HighlightNews: React.FC<HighlightNewsProps> = ({ content }) => {
  return (
    <Link to={`/noticia/${content.id}`} className={styles.HighlightNews_container}>
      <AuthorPost
        imageSrc={content.author.imageSrc}
        name={content.author.name}
      />
      <h1>{content.title}</h1>
      <TagPost tagText={content.tag} read_time={content.read_time} />
      <img src={content.media.url} alt={content.media.alt} />
    </Link>
  );
};

export default HighlightNews;
