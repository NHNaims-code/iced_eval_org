import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import BlogDetails from "../../components/blog-details";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";
import AfricanResearch from "../../components/news/african-research-gets-a-boost-from-a-five-year-grant";

const NewsDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="African Research gets a Boost from a five-year grant">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="African Research gets a Boost" crumbTitle="News" />
          <AfricanResearch/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default NewsDetails;
