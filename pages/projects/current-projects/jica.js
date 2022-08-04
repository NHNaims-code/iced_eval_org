import React from "react";
import Layout from "../../../components/layout";
import HeaderOne from "../../../components/header/header-one";
import StickyHeader from "../../../components/header/sticky-header";
import PageHeader from "../../../components/page-header";
import Footer from "../../../components/footer";
import MenuContextProvider from "../../../context/menu-context";
import SearchContextProvider from "../../../context/search-context";
import Jica from "../../../components/projects/current/jica";

const JicaProject = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="JICA">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Thematic Evaluation of the Noguchi Memorial Institute for Medical Research in Ghana" crumbTitle="Project" />
          <Jica/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default JicaProject;
