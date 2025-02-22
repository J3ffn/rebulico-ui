import React from "react";
import Header from "src/components/organisms/Header/Header";
import styles from "./Page.module.css";
import Logo from "src/components/atoms/Logo";
import User from "src/components/molecules/User/User";
import LogoText from "src/components/atoms/LogoText";
import { PrincipalsNoticesStorage } from "src/context/principalsNotices/PrincipalsNotices.context";

import Footer from "src/components/organisms/Footer/Footer";
import { Divider } from "@mui/material";
import HamburgerMenu from "src/components/organisms/HamburgerMenu/HamburgerMenu";
import { Link } from "react-router-dom";

interface PageTemplateProps {
  mainContent: React.ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ mainContent }) => {
  return (
      <div className={styles.page_template_container}>
        <PrincipalsNoticesStorage>
          <Header
            colorVariable={"--color-primary"}
            content={[<HamburgerMenu />, <User />]}
          />
          <Header
            colorVariable={"--color-neutral-light"}
            content={[
              /* <Menu /> */
              <div className={styles.secound_header_center_content}>
                <Link to={"/"} style={{ display: "flex", gap: "15px" }}>
                  <Logo />
                  <LogoText iamgeSx={{ width: "166px", height: "45px" }} />
                </Link>
                <div style={{ display: "flex" }}>
                  <Divider
                    sx={{
                      height: "30px",
                      marginRight: "10px",
                      borderWidth: 1.5,
                      placeSelf: "center",
                    }}
                    className={styles.secound_header_divider}
                    orientation="vertical"
                    flexItem
                  />
                  <h3>
                    Projeto de pesquisa, ensino e extensão <br />
                    <span style={{ display: "flex", placeContent: "center" }}>
                      Probex UFPB
                    </span>
                  </h3>
                </div>
              </div>,
              /* <Finder /> */
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
