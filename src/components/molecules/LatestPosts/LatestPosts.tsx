import React from "react";

import styles from "./LatestPosts.module.css";
import TagPost from "src/components/atoms/Tag/TagNotice";
import { Link } from "react-router-dom";

import { Img } from "react-image";
import { NewsItem } from "src/shared/models/PrincipalsNotices.model";

import arrowRight from "../../../assets/images/default/ArrowRight.svg";
import AuthorPost from "../AuthorPost/AuthorPost";

interface LatestPostsProps {
  content: NewsItem[];
}

const LatestPosts: React.FC<LatestPostsProps> = ({ content }) => {
  return (
    <div className={styles.latest_posts_container}>
      <div className={styles.latest_posts_informations}>
        <h1>Últimas postagens</h1>
        <Link to="categoria/ultimas-postagens" style={{ color: "#F6A917" }}>
          <span>Ver mais</span> <img src={arrowRight} height={"12px"} />
        </Link>
      </div>

      <div className={styles.latest_posts_items_container}>
        {content.map((item, index) => (
          <Link
            to={`/noticia/${item.id}`}
            key={`latest_posts-${index}`}
            className={styles.latest_posts_item}
          >
            <div className={styles.latest_posts_item_image}>
              <Img
                src={item.media.url}
                alt={item.media.alt}
                loader={<span>Carregando imagem...</span>}
                unloader={<span>Erro ao carregar a imagem</span>}
              />
            </div>
            <AuthorPost
              name={item.author.name}
              imageSrc={item.author.imageSrc}
              imageSx={{
                boxShadow: 'none',
                border: '1px solid #9e9e9e',
                height: '28px',
                width: '28px'
              }}
            />
            <div className={styles.latest_posts_item_informations}>
              <h2>{item.title}</h2>
              <h3>{item.initialText}</h3>
              <TagPost tagText={item.tag} read_time={item.read_time} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
