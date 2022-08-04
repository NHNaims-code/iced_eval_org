import React from "react";
import { Container } from "react-bootstrap";
import TeamCardNew from "./team-card-new";
import PostPaginations from "../post-paginations";

import { TEAM_DATA } from "../../data/team-data";
import { filterTeamMember } from "../../data/team-data";

const TeamPageNew = ({ team }) => {
  let teamData = TEAM_DATA;
  let heading;

  if (team == "board") {
    teamData = filterTeamMember("board");
    heading = "Board Members";
  }
  if (team == "management") {
    teamData = filterTeamMember("management");
    heading = "Management Team";
  }
  if (team == "staff") {
    teamData = filterTeamMember("staff");
    heading = "Officers and Staff";
  }
  if (team == "partners") {
    teamData = filterTeamMember("partners");
    heading = "Associates and Consultants";
  }

  return (
    <section className="event-page pt-120 pb-120">
      <Container>
        <h2>{heading}</h2>
        <div className="event-grid">
          {teamData.map((event, index) => (
            <TeamCardNew data={event} key={`event-card-key-${index}`} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamPageNew;
