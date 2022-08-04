import React from "react";
import Layout from "../../../components/layout";
import HeaderOne from "../../../components/header/header-one";
import StickyHeader from "../../../components/header/sticky-header";
import PageHeader from "../../../components/page-header";
import Footer from "../../../components/footer";
import MenuContextProvider from "../../../context/menu-context";
import SearchContextProvider from "../../../context/search-context";
import EndofProjectEvaluaionForMozambiqueLocal from "../../../components/projects/past/end-of-project-evaluation-for-the-mozambique-local";

const PastProject = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="End of Project Evaluation for the Mozambique Local and Regional Procurement (LRP) Project">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="End of Project Evaluation for the Mozambique Local and Regional Procurement (LRP) Project" crumbTitle="Project" />
          <EndofProjectEvaluaionForMozambiqueLocal/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PastProject;
