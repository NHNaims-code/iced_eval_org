import React from "react";
import Layout from "../../../components/layout";
import HeaderOne from "../../../components/header/header-one";
import StickyHeader from "../../../components/header/sticky-header";
import PageHeader from "../../../components/page-header";
import CauseContent from "../../../components/causes/cause-content";
import Footer from "../../../components/footer";
import MenuContextProvider from "../../../context/menu-context";
import SearchContextProvider from "../../../context/search-context";
import AllInICED from "../../../components/all-in/all-in";
import ADAIM from "../../../components/adaim/adaim";

const CauseDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="ADAIM - International Center for Evaluation and Development">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Agile Data Approaches and Innovations for Monitoring (ADAIM)" crumbTitle="ADAIM" />
          <ADAIM/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default CauseDetails;
