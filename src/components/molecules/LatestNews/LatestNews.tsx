import React from "react";

import styles from "./LatestNews.module.css";
import TagPost from "src/components/atoms/Tag/TagNotice";
import { Link } from "react-router-dom";

import { Img } from "react-image";
import { NewsItem } from "src/shared/models/PrincipalsNotices.model";

interface LatestNewsProps {
  content: NewsItem[];
}

const LatestNews: React.FC<LatestNewsProps> = ({ content }) => {
  return (
    <div className={styles.latestNews_container}>
      {content.map((item, index) => (
        <Link
          to={`/noticia/${item.id}`}
          key={`latestNews-${index}`}
          className={styles.latestNews_item}
        >
          <div className={styles.latestNews_item_informations}>
            <h2>{item.title}</h2>
            <h3>{item.initialText}</h3>
            <TagPost tagText={item.tag} read_time={item.read_time} />
          </div>
          <div className={styles.latestNews_item_image}>
            <Img
              src={item.media.url}
              alt={item.media.alt}
              loader={<span>Carregando imagem...</span>}
              unloader={<span>Erro ao carregar a imagem</span>}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LatestNews;
