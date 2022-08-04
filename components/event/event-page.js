import React from "react";
import { Container } from "react-bootstrap";
import EventCard from "./event-card";
import PostPaginations from "../post-paginations";

import {TEAM_DATA} from "../../data/team-data";


const EventPage = () => {
  return (
    <section className="event-page pt-120 pb-120">
      <Container>
        <div className="event-grid">
          {TEAM_DATA.map((event, index) => (
            <EventCard data={event} key={`event-card-key-${index}`} />
          ))}
        </div>
        <PostPaginations />
      </Container>
    </section>
  );
};

export default EventPage;
