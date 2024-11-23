import React from "react";
import Header from "src/components/organisms/Header/Header";
import styles from "./Page.module.css";
import Logo from "src/components/atoms/Logo";
import NavLinks from "src/components/molecules/NavLinks/NavLinks";
import User from "src/components/molecules/User/User";
import LogoText from "src/components/atoms/LogoText";
import { PrincipalsNoticesStorage } from "src/context/principalsNotices/PrincipalsNotices.context";

import Footer from "src/components/organisms/Footer/Footer";
import { Divider } from "@mui/material";

interface PageTemplateProps {
  mainContent: React.ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ mainContent }) => {
  return (
    <div className={styles.page_template_container}>
      <PrincipalsNoticesStorage>
        <Header
          colorVariable={"--color-neutral-dark"}
          content={[<Logo />, <NavLinks />, <User />]}
        />
        <Header
          colorVariable={"--color-neutral-light"}
          content={[
            /* <Menu /> */ 
            <Logo />,
            <LogoText iamgeSx={{ width: "166px", height: "45px" }} />,
            <Divider
              sx={{ width: "3px", height: "20px", margin: "0  10px" }}
              orientation="vertical"
              flexItem
            />,
            <h3>Projeto de extensão PROBEX UFPB</h3> /* <Finder /> */,
          ]}
          personStyles={{
            backgroundColor: "var(--color-neutral-light)",
            justifyContent: "center",
          }}
        />
        <div id="main_content" className={styles.page_template_main_content}>
          {mainContent}
        </div>
      </PrincipalsNoticesStorage>
      <Footer />
    </div>
  );
};

export default PageTemplate;
