import React from "react";
import { Link } from "react-router-dom";
import { StorieItem } from "src/shared/models/PrincipalsNotices.model";

import styles from "./Stories.module.css";

import { Img } from "react-image";

import arrowRight from "../../../assets/images/default/ArrowRight.svg";

interface StoriesProps {
  content: StorieItem[];
}

const Stories: React.FC<StoriesProps> = ({ content }) => {
  return (
    <div className={styles.stories_container}>
      <div className={styles.stories_informations}>
        <h1>Rebuliço Stories</h1>
        <Link to="" style={{ color: "#F6A917" }}>
          <span>Ver mais</span> <img src={arrowRight} height={"12px"} />
        </Link>
      </div>

      <div className={styles.stories_items_container}>
        {content.map((item, index) => (
          <div
            key={`stories-${index}`}
            className={styles.stories_item}
          >
            <div className={styles.stories_item_image}>
              <Img
                src={item.imageSrc}
                loader={<span>Carregando imagem...</span>}
                unloader={<span>Erro ao carregar a imagem</span>}
              />
            </div>
            <div className={styles.gradient_overlay}></div>
            <div className={styles.stories_item_informations}>
              <h2>{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
