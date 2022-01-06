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
import CommunitySection from "containers/Crypto/CommunitySection";
import CategoriesSection from "containers/Crypto/Categories";
import JobsSection from "containers/Crypto/Jobs";
import SlideSections from "containers/Crypto/CryptoSlides";
import BetaSections from "containers/Crypto/BetaSection";
import Footer from "containers/Crypto/Footer";
import ContactSections from "containers/Crypto/Contact";
import TrainingSection from "containers/Crypto/TrainingSection";
import PartnersSection from "containers/Crypto/Partners";

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
          <div style={{ marginBottom: "120px" }}>
            <ContactSections key="contactSectionUpper" />
          </div>
          <BannerSlider />
          <div style={{ marginTop: "-100px" }}>
            <PartnersSection />
          </div>
          <CommunitySection />
          <TrainingSection />
          <div style={{ marginTop: "-100px" }}>
            <CategoriesSection />
          </div>
          <JobsSection />
          <SlideSections />
          <BetaSections />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Crypto;
