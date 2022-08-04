import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import BlogDetails from "../../components/blog-details";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";
import ExecutiveLeadershipProgramme from "../../components/executive-leadership-program-in-monitoring-and-evaluation-for-public-institutions-and-agencies/executive-leadership-program-in-monitoring-and-evaluation-for-public-institutions-and-agencies";

const NewsDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Executive Leadership Program in Monitoring and Evaluation for Public Institutions and Agencies">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Executive Leadership Program in Monitoring and Evaluation for Public Institutions and Agencies" crumbTitle="Programs" />
          <ExecutiveLeadershipProgramme/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default NewsDetails;
