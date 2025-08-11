import { useState } from "react";
import styles from "./UserMenu.module.css";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";

interface UserMenuItem {
  label: string;
  linkTo?: string;
  onClick?: () => void;
}

interface UserMenuProps {
  userImageSrc: string;
  items: UserMenuItem[];
}

export const UserMenu: React.FC<UserMenuProps> = ({ userImageSrc, items }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateTo = (linkTo: string) => {
    if (linkTo) {
      navigate(linkTo);
      handleClose();
    }
  };

  return (
    <div className={styles.userMenuContainer}>
      <img
        className={styles.userImage}
        src={userImageSrc}
        alt="Foto de perfil."
        onClick={handleOpen}
      />

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ marginTop: "5px" }}
      >
        {items.map((item, index) => {
          return (
            <MenuItem
              key={index}
              onClick={
                item.linkTo
                  ? () => navigateTo(item.linkTo || "")
                  : () => {
                      item.onClick && item.onClick();
                      handleClose();
                    }
              }
            >
              {item.label}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};
