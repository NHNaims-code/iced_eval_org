import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "./project-card";
import ALL_PROJECTS_DATA from "../../data/projects-data";

const AllCurrentProjects = () => {

  const projects = ALL_PROJECTS_DATA.filter((project) => project.tag === "current");
  
  
  return (
    <section className="blog-details pb-40 gradient-background-1">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <ProjectCard projects={projects}/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllCurrentProjects;