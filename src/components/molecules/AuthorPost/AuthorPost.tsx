import React from "react";
import styles from "./AuthorPost.module.css";

import defaultImage from "../../../assets/images/default/Person.png";

interface AuthorPostProps {
  imageSrc: string;
  name: string;
  imageSx?: React.CSSProperties;
}

const AuthorPost: React.FC<AuthorPostProps> = ({
  imageSrc = defaultImage,
  name,
  imageSx,
}) => {
  return (
    <div className={styles.author_post_container}>
      <div className={styles.author_image_container}>
        <img
          src={imageSrc}
          alt={name}
          style={{
            boxShadow: "0px 3px 4px 00px rgba(0, 0, 0, 50%)",
            ...imageSx,
          }}
        />
      </div>
      <div className={styles.author_informations}>
        <p className={styles.author_name}>{name}</p>
        <p className={styles.author_contribuition}>Autor</p>
      </div>
    </div>
  );
};

export default AuthorPost;
