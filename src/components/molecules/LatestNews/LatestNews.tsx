import React from "react";
import { LatestNewsModel } from "src/shared/models/LatestNewsModel.model";

import styles from "./LatestNews.module.css";

interface LatestNewsProps {
  content: LatestNewsModel[];
}

const LatestNews: React.FC<LatestNewsProps> = ({ content }) => {
  return (
    <div className={styles.latestNews_container}>
      {content.map((item, index) => (
        <div key={`latestNews-${index}`} className={styles.latestNews_item}>
          <div className={styles.latestNews_item_informations}>
            <h2>{item.title}</h2>
            <h3>{item.initialText}</h3>
            <span>{item.tag} | {item.read_time}</span>
          </div>
          <div className={styles.latestNews_item_image}>
            <img src={item.media.url} alt={item.media.alt} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestNews;
