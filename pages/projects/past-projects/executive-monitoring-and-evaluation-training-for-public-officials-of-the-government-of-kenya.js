import React from "react";
import Layout from "../../../components/layout";
import HeaderOne from "../../../components/header/header-one";
import StickyHeader from "../../../components/header/sticky-header";
import PageHeader from "../../../components/page-header";
import Footer from "../../../components/footer";
import MenuContextProvider from "../../../context/menu-context";
import SearchContextProvider from "../../../context/search-context";
import MonitoringAndEvaluationTechnicalSupport from "../../../components/projects/past/monitoring-and-evaluation-technical-support";
import EndofProjectEvaluaionForMozambiqueLocal from "../../../components/projects/past/end-of-project-evaluation-for-the-mozambique-local";
import ExecutiveMonitoringAndEvaluationTrainingForKenya from "../../../components/projects/past/executive-monitoring-and-evaluation-training-for-public-officials-of-the-government-of-kenya";

const PastProject = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Executive Monitoring and Evaluation training for public officials of the Government of Kenya">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Executive Monitoring and Evaluation training for public officials of the Government of Kenya" crumbTitle="Project" />
          <ExecutiveMonitoringAndEvaluationTrainingForKenya/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PastProject;
