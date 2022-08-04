import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import BlogDetails from "../../components/blog-details";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";
import MonitoringAndEvaluationAndAdaptiveManagement from "../../components/works/monitoring-and-evaluation-and-adaptive-management ";


const OurWork = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Monitoring and Evaluation and Adaptive Management ">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Monitoring and Evaluation and Adaptive Management " crumbTitle="Work" />
          <MonitoringAndEvaluationAndAdaptiveManagement/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default OurWork;
