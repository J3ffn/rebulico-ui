// src/components/atoms/HamburgerButton/HamburgerButton.tsx
import React from "react";
import styles from "./HamburgerButton.module.css";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <button
      className={`${styles.hamburgerButton} ${isOpen ? styles.open : ""}`}
      onClick={onClick}
      aria-label="Toggle Menu"
    >
      <span />
      <span />
      <span />
    </button>
  );
};

export default HamburgerButton;
