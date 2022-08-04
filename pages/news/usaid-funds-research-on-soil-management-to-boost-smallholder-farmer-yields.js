import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";
import USAIDSoilManagement from "../../components/news/usaid-funds-research-on-soil-management-to-boost-smallholder-farmer-yields";

const NewsDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="USAID Funds Research on Soil Management to Boost Smallholder Farmer Yields">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="USAID Funds Research on Soil Management" crumbTitle="News" />
          <USAIDSoilManagement/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default NewsDetails;
