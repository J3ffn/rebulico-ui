import React, { useState } from "react";
import HamburgerButton from "../../atoms/HamburgerButton/HamburgerButton";
import NavigationMenu from "../../molecules/NavigationMenu/NavigationMenu";

import styles from "./HamburgerMenu.module.css";
import { Link } from "react-router-dom";

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
              <Link to={"/"}>Projeto</Link>
            </li>
            <li>
              <Link to={"/quem-somos"}>Quem somos</Link>
            </li>
            <li>
              <Link to={"/"}>Manifesto</Link>
            </li>
          </ul>
        </li>
        <li>
          <a style={{ color: "#FF8000" }}>(Grandes) reportagens</a>
          <ul className={styles.menu_subCategory}>
            <li>
              <Link to={"/categoria/ufpb-pelo-avesso"}>UFPB pelo avesso</Link>
            </li>
            <li>
              <Link to={"/categoria/se-essa-rua-fosse-minha"}>Se essa rua fosse minha</Link>
            </li>
          </ul>
        </li>
        <li>
          <a style={{ color: "#931981" }}>Culturas midiáticas</a>
          <ul className={styles.menu_subCategory}>
            <li>
              <Link to={"/categoria/resenhas-criticas"}>Resenhas críticas</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={"/"} style={{ color: "#FF0004" }}>
            Rebuliço Stories
          </Link>
        </li>
        <li>
          <Link to={"/"} style={{ color: "#009211" }}>
            Pesquisa
          </Link>
        </li>
        <li>
          <Link to={"/"} style={{ color: "#76FAFF" }}>
            Publicação
          </Link>
        </li>
        <li>
          <Link to={"/"} style={{ color: "#FF6200" }}>
            Entrevistas
          </Link>
        </li>
      </NavigationMenu>
    </div>
  );
};

export default HamburgerMenu;
