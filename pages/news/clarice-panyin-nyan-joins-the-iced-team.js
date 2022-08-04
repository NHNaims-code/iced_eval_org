import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";
import ClaricePanyinICED from "../../components/news/clarice-panyin-nyan-joins-the-iced-team";

const NewsDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Clarice Panyin Nyan Joins the ICED Team">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Clarice Panyin Nyan" crumbTitle="News" />
          <ClaricePanyinICED/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default NewsDetails;
