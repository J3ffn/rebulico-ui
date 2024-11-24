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
            <TagPost
              tag={item.tag}
              categorie={item.categorie}
              haveTextBackground={true}
            />
            <h2>{item.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecentUpdates;
