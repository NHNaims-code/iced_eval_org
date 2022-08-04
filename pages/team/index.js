import React, {useState} from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";
import TeamPageNew from "../../components/team/team-page-new";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import TeamSelector from "../../components/team/team-selector";


const Events = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Our Team - International Center for Evaluation and Development">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Our Team" crumbTitle="Our Team" />
          <TeamSelector />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default Events;
