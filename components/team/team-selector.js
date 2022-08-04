import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import TeamPageNew from "./team-page-new";

const TeamSelector = () => {
  const [team, setTeam] = useState("board");
  const [active, setActive] = useState({
    board:true,
    management:false,
    staff:false,
    partners:false,
  });

  return (
    <div className="gradient-background-2">
      <Container>
        <ButtonGroup 
          aria-label="Basic example"
          className="d-none d-sm-none d-lg-flex team-btn-group pt-80"
        >
          <Button
            className="team-btn-select"
            onClick={() => {
              setTeam("board");
            }}
          >
            Board Members
          </Button>
          <Button
            className="team-btn-select"
            onClick={() => {
              setTeam("management");
            }}
          >
            Management Team
          </Button>
          <Button
            className="team-btn-select"
            onClick={() => {
              setTeam("staff");
            }}
          >
            Officers and Staff
          </Button>
          <Button
            className="team-btn-select"
            onClick={() => {
              setTeam("partners");
            }}
          >
            Associates and Consultants
          </Button>
        </ButtonGroup>

        <ButtonGroup vertical
          aria-label="Basic example"
          className=" d-flex d-lg-none mx-auto pt-80"
        >
          <Button
            className="team-btn-select"
            onClick={() => {
              setTeam("board");
            }}
          >
            Board Members
          </Button>
          <Button
            className="team-btn-select"
            onClick={() => {
              setTeam("management");
            }}
          >
            Management Team
          </Button>
          <Button
            className="team-btn-select"
            onClick={() => {
              setTeam("staff");
            }}
          >
            Officers and Staff
          </Button>
          <Button
            className="team-btn-select"
            onClick={() => {
              setTeam("partners");
            }}
          >
            Associates and Consultants
          </Button>
        </ButtonGroup>
      </Container>
      <TeamPageNew team={team} />
    </div>
  );
};

export default TeamSelector;
