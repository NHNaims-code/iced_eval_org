import React from "react";
import Layout from "../../../components/layout";
import HeaderOne from "../../../components/header/header-one";
import StickyHeader from "../../../components/header/sticky-header";
import PageHeader from "../../../components/page-header";
import Footer from "../../../components/footer";
import MenuContextProvider from "../../../context/menu-context";
import SearchContextProvider from "../../../context/search-context";
import AgroWeatherAndMarket from "../../../components/news/impact-of-agro-weather-and-market-information-on-productivity-and-resilience-in-farming-communities-in-kenya";

const NewsDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Impact of Agro-Weather and Market Information on Productivity and Resilience in Farming Communities in Kenya">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Impact of Agro-Weather and Market Information" crumbTitle="News" />
          <AgroWeatherAndMarket/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default NewsDetails;
