import React from "react";
import { Container } from "react-bootstrap";
import BlogCard from "../blog/blog-card";

const ProjectCard = ({projects}) => {

  return (
    <section className="news-page pt-120 pb-120 ">
      <Container>
        <div className="news-3-col">
          {projects.map(
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

export default ProjectCard;
