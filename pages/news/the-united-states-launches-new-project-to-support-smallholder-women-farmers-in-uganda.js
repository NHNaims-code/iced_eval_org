import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";
import USASmallHolderWomenFarmer from "../../components/news/the-united-states-launches-new-project-to-support-smallholder-women-farmers-in-uganda";

const NewsDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="The United States Launches New Project to Support Smallholder Women Farmers in Uganda">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="USA Project Smallholder Women Farmer" crumbTitle="News" />
          <USASmallHolderWomenFarmer/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default NewsDetails;
