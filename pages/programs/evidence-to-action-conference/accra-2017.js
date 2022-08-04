import React from "react";
import Layout from "../../../components/layout";
import HeaderOne from "../../../components/header/header-one";
import StickyHeader from "../../../components/header/sticky-header";
import PageHeader from "../../../components/page-header";
import BlogDetails from "../../../components/blog-details";
import Footer from "../../../components/footer";
import MenuContextProvider from "../../../context/menu-context";
import SearchContextProvider from "../../../context/search-context";
import Accra2017 from "../../../components/evidence-to-action-conference/accra-july-2017";


const NewsDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Evidence To Action Conference - Accra 2017">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Evidence To Action Conference - Accra 2017" crumbTitle="Programs" />
          <Accra2017/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default NewsDetails;
