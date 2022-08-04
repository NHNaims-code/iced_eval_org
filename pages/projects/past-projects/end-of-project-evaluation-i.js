import React from "react";
import Layout from "../../../components/layout";
import HeaderOne from "../../../components/header/header-one";
import StickyHeader from "../../../components/header/sticky-header";
import PageHeader from "../../../components/page-header";
import Footer from "../../../components/footer";
import MenuContextProvider from "../../../context/menu-context";
import SearchContextProvider from "../../../context/search-context";
import EndOfProjectEvaluationPart1 from "../../../components/projects/past/end-of-project-evaluation-i";

const PastProject = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="End of Project Evaluation - I">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="End of Project Evaluation - I" crumbTitle="Project" />
          <EndOfProjectEvaluationPart1/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PastProject;
