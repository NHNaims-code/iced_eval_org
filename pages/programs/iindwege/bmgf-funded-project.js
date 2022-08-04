import React from "react";
import Layout from "../../../components/layout";
import HeaderOne from "../../../components/header/header-one";
import StickyHeader from "../../../components/header/sticky-header";
import PageHeader from "../../../components/page-header";
import BlogDetails from "../../../components/blog-details";
import Footer from "../../../components/footer";
import MenuContextProvider from "../../../context/menu-context";
import SearchContextProvider from "../../../context/search-context";
import BMGFFundedProject from "../../../components/iindwege/bmgf-funded-project";

const OurProject = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout
          pageTitle="Infrastructure’s Impact on Nutritious Diet and Women’s Economic Empowerment (BMGF Funded Project)"
        >
          <HeaderOne />
          <StickyHeader />
          <PageHeader
            title="Infrastructure’s Impact on Nutritious Diet and Women’s Economic Empowerment (BMGF Funded Project)"
            crumbTitle="Programs"
          />
          <BMGFFundedProject />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default OurProject;
