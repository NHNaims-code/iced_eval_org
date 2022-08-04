import React from "react";
import { Container } from "react-bootstrap";

import NewsletterCard from "./newsletter-card";


const SingleNewsletter = ({newsletterData}) => {
  return (
    <section className="event-page pt-120 pb-120">
      <Container>
        <div className="event-grid">
          {newsletterData.map((event, index) => (
            <NewsletterCard data={event} key={`event-card-key-${index}`} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SingleNewsletter;
