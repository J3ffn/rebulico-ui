import React from "react";
import styles from "./User.module.css";
import defaultImage from "src/assets/images/default/UserIcon.svg";

const User = () => {
  const [userImage, _] = React.useState(
    //   () => {
    //   fetch("", {}).then();
    // }
    // "https://static.crunchyroll.com/assets/avatar/170x170/1044-jujutsu-kaisen-satoru-gojo.png"
    null
  );

  return (
    <div className={styles.userIcon}>
      <img
        className={styles.userImage}
        src={userImage ? userImage : defaultImage}
        alt=""
      />
    </div>
  );
};

export default User;
