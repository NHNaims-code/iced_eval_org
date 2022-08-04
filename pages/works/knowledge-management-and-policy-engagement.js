import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";
import KnowledgeManagementandPolicyEngagement from "../../components/works/knowledge-management-and-policy-engagement";


const OurWork = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Knowledge Management and Policy Engagement">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Knowledge Management and Policy Engagement" crumbTitle="Work" />
          <KnowledgeManagementandPolicyEngagement/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default OurWork;
