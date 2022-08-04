import React from "react";
import Layout from "../../../components/layout";
import HeaderOne from "../../../components/header/header-one";
import StickyHeader from "../../../components/header/sticky-header";
import PageHeader from "../../../components/page-header";
import Footer from "../../../components/footer";
import MenuContextProvider from "../../../context/menu-context";
import SearchContextProvider from "../../../context/search-context";
import Evita from "../../../components/projects/current/evita";

const EvitaProject = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="EVITA">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Evaluating Recommended Reforms for Inclusive Transformation in Agriculture" crumbTitle="Project" />
          <Evita/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default EvitaProject;
