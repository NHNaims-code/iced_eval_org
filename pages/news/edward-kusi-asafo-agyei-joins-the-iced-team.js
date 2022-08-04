import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import BlogDetails from "../../components/blog-details";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";

import EdwardKusiICED from "../../components/news/edward-kusi-asafo-agyei-joins-the-iced-team";

const NewsDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Edward Kusi Asafo-Agyei Joins the ICED Team">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Edward Kusi Asafo-Agyei" crumbTitle="News" />
          <EdwardKusiICED/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default NewsDetails;
