import React from "react";
import Layout from "../../../components/layout";
import HeaderOne from "../../../components/header/header-one";
import StickyHeader from "../../../components/header/sticky-header";
import PageHeader from "../../../components/page-header";
import Footer from "../../../components/footer";
import MenuContextProvider from "../../../context/menu-context";
import SearchContextProvider from "../../../context/search-context";

import SmallScaleIrrigationAndInsurance from "../../../components/news/pairing-small-scale-irrigation-and-index-insurance-to-manage-risk-and-expand-access-to-credit-in-northern-ghana";

const NewsDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Pairing Small-scale Irrigation and Index Insurance to Manage Risk and Expand Access to Credit in Northern Ghana">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Pairing Small-scale Irrigation and Index Insurance" crumbTitle="News" />
          <SmallScaleIrrigationAndInsurance/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default NewsDetails;
