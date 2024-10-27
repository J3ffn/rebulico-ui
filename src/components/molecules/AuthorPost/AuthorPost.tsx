import React from "react";
import styles from "./AuthorPost.module.css";

interface AuthorPostProps {
  imageSrc: string;
  name: string;
}

const AuthorPost: React.FC<AuthorPostProps> = ({ imageSrc, name }) => {
  return (
    <div className={styles.author_post_container}>
      <div className={styles.author_image_container}>
        <img src={imageSrc} alt={name} />
      </div>
      <div className={styles.author_informations}>
        <p className={styles.author_name}>{name}</p>
        <p className={styles.author_contribuition}>Author</p>
      </div>
    </div>
  );
};

export default AuthorPost;
