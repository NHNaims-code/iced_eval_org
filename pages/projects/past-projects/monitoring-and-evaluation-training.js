import React from "react";
import Layout from "../../../components/layout";
import HeaderOne from "../../../components/header/header-one";
import StickyHeader from "../../../components/header/sticky-header";
import PageHeader from "../../../components/page-header";
import Footer from "../../../components/footer";
import MenuContextProvider from "../../../context/menu-context";
import SearchContextProvider from "../../../context/search-context";
import MonitoringAndEvaluationTraining from "../../../components/projects/past/monitoring-and-evaluation-training";

const PastProject = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Monitoring and Evaluation Training">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Monitoring and Evaluation Training" crumbTitle="Project" />
          <MonitoringAndEvaluationTraining/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PastProject;
