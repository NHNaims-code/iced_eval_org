import React from "react";
import { Container } from "react-bootstrap";

import PostPaginations from "../post-paginations";
import BlogCard from "../blog/blog-card";

import ACTION_CONFERENCE_DATA from "../../data/evidence-to-action-conference";

const ActionConferencesCards = () => {
  return (
    <section className="news-page pt-120 pb-120 ">
      <Container>
        <div className="news-3-col">
          {ACTION_CONFERENCE_DATA.map(
            (
              { image, title, link},
              index
            ) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                link={link}
              />
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default ActionConferencesCards;
