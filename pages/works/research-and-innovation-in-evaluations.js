import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";
import ResearchAndInnovationInEvaluation from "../../components/works/research-and-innovation-in-evaluations";


const OurWork = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Research and Innovation in Evaluations">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Research and Innovation in Evaluations" crumbTitle="Work" />
          <ResearchAndInnovationInEvaluation/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default OurWork;
