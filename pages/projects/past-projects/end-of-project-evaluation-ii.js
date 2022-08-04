import React from "react";
import Layout from "../../../components/layout";
import HeaderOne from "../../../components/header/header-one";
import StickyHeader from "../../../components/header/sticky-header";
import PageHeader from "../../../components/page-header";
import Footer from "../../../components/footer";
import MenuContextProvider from "../../../context/menu-context";
import SearchContextProvider from "../../../context/search-context";
import EndOfProjectEvaluationPart2 from "../../../components/projects/past/end-of-project-evaluation-ii";

const PastProject = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="End of Project Evaluation - II">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="End of Project Evaluation - II" crumbTitle="Project" />
          <EndOfProjectEvaluationPart2/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PastProject;
