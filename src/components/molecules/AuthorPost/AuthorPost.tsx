import React from "react";
import styles from "./AuthorPost.module.css";

interface AuthorPostProps {
  name: string;
}

const AuthorPost: React.FC<AuthorPostProps> = ({ name }) => {
  return (
    <div className={styles.author_post_container}>
      <div className={styles.author_informations}>
        <span style={{ color: "#727272", fontSize: "16px" }}>por:</span>
        <p className={styles.author_name}>{name}</p>
      </div>
    </div>
  );
};

export default AuthorPost;
