import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import detailsImage from "../../assets/images/events/event-details-1-1.jpg";

const TeamDetail = (props) => {
  const { teamMember } = props;  

  return (
    <div className="gradient-background-2">
      <section className="event-details pt-120">
        <Container>
          <Row>
            <Col md={12} lg={8}>
              <h3>{teamMember.name}</h3>
              <pre>{teamMember.details}</pre>
            </Col>
            <Col md={12} lg={4}>
              <img src={teamMember.image} alt="" className="img-fluid" width={571} height={512} />
            </Col>
          </Row>
        </Container>
      </section>
      <div className="event-infos pt-20 pb-90">
        <Container>
          <Row>
          <Col md={12} lg={4} className="mb-30">
              <div className="event-infos__single background-primary">
                <h2>Social Profile</h2>
                <div className="event-infos__social">
                  <a href={teamMember.facebookLink ? teamMember.facebookLink : "#"}>
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href={teamMember.linkedInLink ? teamMember.linkedInLink : "#"}>
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href={teamMember.twitterLink ? teamMember.twitterLink : "#"}>
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TeamDetail;
