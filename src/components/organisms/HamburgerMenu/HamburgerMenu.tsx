import React, { useState } from "react";
import HamburgerButton from "../../atoms/HamburgerButton/HamburgerButton";
import NavigationMenu from "../../molecules/NavigationMenu/NavigationMenu";

import styles from "./HamburgerMenu.module.css";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ position: "relative" }} ref={menuRef}>
      <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
      <NavigationMenu isOpen={isOpen}>
        <li>
          <a style={{ color: "#FF0085" }}>Rebuliço</a>
          <ul className={styles.menu_subCategory}>
            <li>
              <a>Projeto</a>
            </li>
            <li>
              <a>Quem somos</a>
            </li>
            <li>
              <a>Manifesto</a>
            </li>
          </ul>
        </li>
        <li>
          <a style={{ color: "#FF8000" }}>(Grandes) reportagens</a>
          <ul className={styles.menu_subCategory}>
            <li>
              <a>UFPB pelo avesso</a>
            </li>
            <li>
              <a>Se essa rua fosse minha</a>
            </li>
          </ul>
        </li>
        <li>
          <a style={{ color: "#931981" }}>Culturas midiáticas</a>
          <ul className={styles.menu_subCategory}>
            <li>
              <a>Resenhas críticas</a>
            </li>
          </ul>
        </li>
        <li>
          <a style={{ color: "#FF0004" }}>Rebuliço Stories</a>
        </li>
        <li>
          <a style={{ color: "#009211" }}>Pesquisa</a>
        </li>
        <li>
          <a style={{ color: "#76FAFF" }}>Publicação</a>
        </li>
        <li>
          <a style={{ color: "#FF6200" }}>Entrevistas</a>
        </li>
      </NavigationMenu>
    </div>
  );
};

export default HamburgerMenu;
