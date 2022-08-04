import React from "react";
import Layout from "../../../components/layout";
import HeaderOne from "../../../components/header/header-one";
import StickyHeader from "../../../components/header/sticky-header";
import PageHeader from "../../../components/page-header";
import BlogDetails from "../../../components/blog-details";
import Footer from "../../../components/footer";
import MenuContextProvider from "../../../context/menu-context";
import SearchContextProvider from "../../../context/search-context";

import ReducingPovertyGhana from "../../../components/news/reducing-poverty-among-women-by-strengthening-the-shea-value-chain-in-northern-ghana";

const NewsDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Reducing Poverty among Women by Strengthening the Shea Value Chain in Northern Ghana">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Reducing Poverty among Women in Northern Ghana" crumbTitle="News" />
          <ReducingPovertyGhana/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default NewsDetails;
