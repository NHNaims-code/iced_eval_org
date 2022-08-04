import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import BlogDetails from "../../components/blog-details";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";
import GloriaAdobeaICED from "../../components/news/iced-is-excited-to-welcome-dr-gloria-adobea-odei-obeng-amoako-to-the-team-gloria-joined-iced-in-january-2022-as-phd-fellow";

const NewsDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="ICED is excited to welcome Dr. Gloria Adobea Odei Obeng-Amoako to the team! Gloria Joined ICED in January 2022 as PHD FELLOW.">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Dr. Gloria Adobea Odei Obeng-Amoako" crumbTitle="News" />
          <GloriaAdobeaICED/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default NewsDetails;
