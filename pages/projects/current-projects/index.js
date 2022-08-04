import React from "react";
import Layout from "../../../components/layout";
import HeaderOne from "../../../components/header/header-one";
import StickyHeader from "../../../components/header/sticky-header";
import PageHeader from "../../../components/page-header";
import Footer from "../../../components/footer";
import MenuContextProvider from "../../../context/menu-context";
import SearchContextProvider from "../../../context/search-context";
import AllCurrentProjects from "../../../components/projects/all-current-projects";


const OurProjects = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Current Projects">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Current Projects" crumbTitle="Projects" />
          <AllCurrentProjects/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default OurProjects;
