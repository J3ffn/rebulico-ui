import React, { useContext } from "react";

import styles from "./User.module.css";
import defaultImage from "src/assets/images/default/UserIcon.svg";
import plusIcon from "src/assets/images/default/plus.svg";
import { AuthContext } from "src/context/auth/auth.context";
import { UserMenu } from "src/components/atoms/userMenu/UserMenu";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Icon from "src/components/atoms/Icon/Icon";
import { useToast } from "src/context/toast/Toast.context";

const User = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [userImage, _] = React.useState(
    //   () => {
    //   fetch("", {}).then();
    // }
    // "https://static.crunchyroll.com/assets/avatar/170x170/1044-jujutsu-kaisen-satoru-gojo.png"
    null
  );
  const isAuthenticated = authContext?.isAuthenticated;
  const toastContext = useToast();
  const showToast = toastContext!.showToast;
  const userMenuItems = [
    {
      label: "Perfil",
      linkTo: "/user/profile",
    },
    {
      label: "Logout",
      onClick: () => {
        authContext?.logout();
        navigate("/");
        showToast("Logout realizado com sucesso!", "success");
      },
    },
  ];

  return (
    isAuthenticated && (
      <div className={styles.userContainer}>
        <Button
          variant="contained"
          color="warning"
          size="medium"
          onClick={() => navigate("/criar/post")}
          sx={{
            display: "flex",
            gap: "5px",
            textTransform: "none",
            borderRadius: "10px",
            boxShadow: "none",
            padding: "3px 20px",
          }}
        >
          <Icon src={plusIcon} ariaLabel="Publicar" />
          <span>Publicar</span>
        </Button>

        <UserMenu
          userImageSrc={userImage || defaultImage}
          items={userMenuItems}
        />
      </div>
    )
  );
};

export default User;
