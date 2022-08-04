import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import BlogDetails from "../../components/blog-details";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";
import CapacityStrengtheningAndProfessionalDevelopment from "../../components/works/capacity-strengthening-and-professional-development";


const CapacityBuilding = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Capacity Strengthening and Professional Development">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Capacity Strengthening and Professional Development" crumbTitle="Work" />
          <CapacityStrengtheningAndProfessionalDevelopment/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default CapacityBuilding;
