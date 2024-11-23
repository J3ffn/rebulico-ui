import React from "react";
import { NewsItem } from "src/shared/models/PrincipalsNotices.model";

import styles from "./RecentUpdates.module.css";
import { Link } from "react-router-dom";
import TagPost from "src/components/atoms/Tag/TagNotice";
import { Img } from "react-image";

interface RecentUpdatesProps {
  content: NewsItem[];
}

const RecentUpdates: React.FC<RecentUpdatesProps> = ({ content }) => {
  function getDiffHours(date: Date): number {
    // Retorno temporário
    return Math.floor(Math.random() * 15) + 1;
  }

  return (
    <div className={styles.recent_updates_container}>
      {content.map((item, index) => (
        <Link
          to={`/noticia/${item.id}`}
          key={`recent_updates-${index}`}
          className={styles.recent_updates_item}
        >
          <div className={styles.recent_updates_item_image_container}>
            <Img
              className={styles.recent_updates_item_image}
              src={item.media.url}
              alt={item.media.alt}
              loader={<span>Carregando imagem...</span>}
              unloader={<span>Erro ao carregar a imagem</span>}
            />
          </div>
          <div className={styles.recent_updates_item_informations}>
            <TagPost tagColorDefault={false} tagText={item.tag} hours_ago={getDiffHours(item.published_at)}/>
            <h2>{item.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecentUpdates;
