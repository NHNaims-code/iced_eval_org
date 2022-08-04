import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import BlogDetails from "../../components/blog-details";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";
import USAIDFunded from "../../components/news/new-usaid-funded-initiative-jumpstarts-africa-based-research-leadership";

const NewsDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="New USAID-funded Initiative Jumpstarts Africa-based Research Leadership">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="USAID-Funded Initiative" crumbTitle="News" />
          <USAIDFunded/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default NewsDetails;
