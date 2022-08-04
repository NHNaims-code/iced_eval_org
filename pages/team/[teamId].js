import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import Footer from "../../components/footer";
import MenuContextProvider from "../../context/menu-context";
import SearchContextProvider from "../../context/search-context";
import { getTeamDetailsById } from "../../data/team-data";
import TeamDetail from "../../components/team/team-detail";

const TeamDetails = () => {

  const router = useRouter();
  const teamId = router.query.teamId;
  const teamMember = getTeamDetailsById(teamId);

  if (!teamMember) {
    return (
        <p className="text-center mt-5">Loading...!</p>
    );
  }
  
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle={teamMember.name}>
          <HeaderOne />
          <StickyHeader />
          <PageHeader title={teamMember.name} crumbTitle="Team Member" />
          <TeamDetail teamMember = {teamMember}/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default TeamDetails;
