import React from "react";
import { Container } from "react-bootstrap";

import BlogCard from "./blog-card";

import PUB_DATA from "../../data/publication-data";

const PublicationPage = () => {
  return (
    <section className="news-page pt-120 pb-120 gradient-background-3">
      <Container>
        <div className="news-3-col">
          {PUB_DATA.map(
            (
              { image, title, date, text, link, commentCount, author },
              index
            ) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                date={date}
                text={text}
                link={link}
                commentCount={commentCount}
                author={author}
              />
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default PublicationPage;
