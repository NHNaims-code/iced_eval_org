import React from "react";
import Layout from "../../../components/layout";
import HeaderOne from "../../../components/header/header-one";
import StickyHeader from "../../../components/header/sticky-header";
import PageHeader from "../../../components/page-header";
import Footer from "../../../components/footer";
import MenuContextProvider from "../../../context/menu-context";
import SearchContextProvider from "../../../context/search-context";
import Evita from "../../../components/projects/current/evita";
import MonitoringAndEvaluationTechnicalSupport from "../../../components/projects/past/monitoring-and-evaluation-technical-support";
import PartnerLevelofEffortSurvey from "../../../components/projects/past/partner-level-of-effort-survey";

const PastProject = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Partner Level of Effort Survey">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Partner Level of Effort Survey" crumbTitle="Project" />
          <PartnerLevelofEffortSurvey/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PastProject;
