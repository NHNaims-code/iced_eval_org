import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";

import SmallScaleIrrigationAndInsurance from "../../components/news/pairing-small-scale-irrigation-and-index-insurance-to-manage-risk-and-expand-access-to-credit-in-northern-ghana";
import AgroWeatherAndMarket from "../../components/news/impact-of-agro-weather-and-market-information-on-productivity-and-resilience-in-farming-communities-in-kenya";

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
