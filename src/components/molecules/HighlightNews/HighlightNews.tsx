import React from "react";

import styles from "./HighlightNews.module.css";
import TagPost from "src/components/atoms/Tag/TagNotice";
import AuthorPost from "../AuthorPost/AuthorPost";
import { Link } from "react-router-dom";
import { NewsItem } from "src/shared/models/PrincipalsNotices.model";

interface HighlightNewsProps {
  content: NewsItem;
}

const HighlightNews: React.FC<HighlightNewsProps> = ({ content }) => {
  return (
    <Link
      to={`/noticia/${content.id}`}
      className={styles.HighlightNews_container}
    >
      <h1>{content.title}</h1>
      <TagPost tag={content.tag} categorie={content.categorie} />
      <AuthorPost name={content.author.name} />
      <img src={content.media.url} alt={content.media.alt} />
    </Link>
  );
};

export default HighlightNews;
