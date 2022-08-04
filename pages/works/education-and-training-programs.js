import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import BlogDetails from "../../components/blog-details";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";
import EducationAndTrainingProgram from "../../components/works/education-and-training-programs";


const OurWork = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Education and Training Programs">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Education and Training Programs" crumbTitle="Work" />
          <EducationAndTrainingProgram/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default OurWork;
