import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import BlogDetails from "../../components/blog-details";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";
import DigitalCommunicationtoReinforceNutrition from "../../components/news/digital-communication-to-reinforce-nutrition-and-household-resilience-in-northern-ghana";

const NewsDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Digital Communication to Reinforce Nutrition and Household Resilience in Northern Ghana">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Digital Communication to Reinforce Nutrition" crumbTitle="News" />
          <DigitalCommunicationtoReinforceNutrition/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default NewsDetails;
