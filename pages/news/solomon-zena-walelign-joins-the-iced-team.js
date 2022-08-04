import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import BlogDetails from "../../components/blog-details";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";
import BlogSidebar from "../../components/blog-details/blog-sidebar";

import SolomonZenaICED from "../../components/news/solomon-zena-joins-iced";

const NewsDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Solomon Zena Walelign Joins the ICED Team">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Solomon Zena Walelign" crumbTitle="News" />
          <SolomonZenaICED/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default NewsDetails;
