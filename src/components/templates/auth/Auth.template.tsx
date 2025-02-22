import React from "react";
import LogoText from "src/components/atoms/LogoText";
import Header from "src/components/organisms/Header/Header";
import ContentBound from "src/components/molecules/ContentBound/ContentBound";
import styles from "./AuthTemplate.module.css";

interface PageTemplateProps {
  mainContent: React.ReactNode;
}

const AuthTemplate: React.FC<PageTemplateProps> = ({ mainContent }) => {
  return (
    <div className={styles.page_template_container}>
      <Header
        colorVariable={"--color-neutral-light"}
        content={[, /* <Menu /> */ <LogoText /> /* <Finder /> */]}
        personStyles={{
          backgroundColor: "var(--color-neutral-light)",
          justifyContent: "center",
        }}
      />
      <div id="main_content" className={styles.page_template_main_content}>
        <ContentBound>{mainContent}</ContentBound>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AuthTemplate;
