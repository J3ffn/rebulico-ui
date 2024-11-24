// src/components/molecules/NavigationMenu/NavigationMenu.tsx
import React from "react";
import styles from "./NavigationMenu.module.css";

interface NavigationMenuProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  isOpen,
  children,
}) => {
  return (
    <nav className={`${styles.navigation_menu} ${isOpen ? styles.open : ""}`} style={{display: isOpen ? "unset" : "none"}}>
      <ul className={styles.list_container}>{children}</ul>
    </nav>
  );
};

export default NavigationMenu;
