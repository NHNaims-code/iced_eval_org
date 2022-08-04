import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import blogDetailsImage from "../../assets/images/blog/blog-d-1-1.jpg";
import BlogSidebar from "../blog-details/blog-sidebar";
import ActionConferencesCards from "./action-conference-cards";

const EvidenceToActionConference = () => {
  return (
    <section className="blog-details pb-40 gradient-background-1">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <ActionConferencesCards/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EvidenceToActionConference;
