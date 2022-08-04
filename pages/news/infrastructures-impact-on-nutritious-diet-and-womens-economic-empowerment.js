import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import BlogDetails from "../../components/blog-details";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";
import InfrastructureImpactonDietandWomen from "../../components/news/infrastructures-impact-on-nutritious-diet-and-womens-economic-empowerment";

const NewsDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Infrastructure’s Impact on Nutritious Diet and Women’s Economic Empowerment">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Infrastructure’s Impact on Nutritious Diet and Women’s Economic Empowerment" crumbTitle="News" />
          <InfrastructureImpactonDietandWomen/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default NewsDetails;
