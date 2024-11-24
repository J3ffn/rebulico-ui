import React from "react";
import styles from "./Header.module.css";
import ContentBound from "src/components/molecules/ContentBound/ContentBound";

interface HeaderProps {
  colorVariable: String;
  content: React.ReactNode[];
  personStyles?: React.CSSProperties;
}

const Header: React.FC<HeaderProps> = ({
  colorVariable,
  content,
  personStyles = {},
}) => {
  return (
    <header
      id="header"
      className={styles.header}
      style={{ backgroundColor: `var(${colorVariable})` }}
      // style={{ backgroundColor: `#fff` }}
    >
      <ContentBound>
        <div className={styles.headerContent} style={personStyles}>
          {content.map((node, index) => (
            <div key={`header-${index}`}>{node}</div>
          ))}
        </div>
      </ContentBound>
    </header>
  );
};

export default Header;
