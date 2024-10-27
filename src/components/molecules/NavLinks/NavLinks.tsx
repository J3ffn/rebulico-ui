import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./NavLinks.module.css"

const NavLinks: React.FC = () => {
  return (
    <nav className={styles.nav_links_container}>
      <Link to="/">
        <p>Página inicial</p>
      </Link>
      <Link to="/categorias">
        <p>Categorias</p>
      </Link>
      <Link to="/sobre-nós">
        <p>Sobre nós</p>
      </Link>
    </nav>
  );
};

export default NavLinks;