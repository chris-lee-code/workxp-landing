import React, { Fragment } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { cryptoTheme } from "common/theme/crypto";
import ResetCSS from "common/assets/css/style";
import { GlobalStyle, ContentWrapper } from "containers/Crypto/crypto.style";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/Crypto/Navbar";
import Banner from "containers/Crypto/BannerSection";
import BannerSlider from "containers/Crypto/BannerSlider";
import Footer from "containers/Crypto/Footer";
import ContactSections from "containers/Crypto/Contact";

const Crypto = () => {
  return (
    <ThemeProvider theme={cryptoTheme}>
      <Fragment>
        <Head>
          <title>WorkXP</title>
          <meta name="Description" content="WorkXP" />
          <meta name="theme-color" content="#009DFF" />

          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Heebo:300,400,500,700"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <div style={{ marginBottom: "80px" }}>
            <ContactSections key="contactSectionUpper" />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginBottom: "50px",
            }}
          >
            <BannerSlider />
          </div>
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Crypto;
