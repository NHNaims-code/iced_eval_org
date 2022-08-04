import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImage from "../../assets/images/homepage/values.webp";

const ICEDValues1 = () => {
  const [counter, setCounter] = useState({
    startCounter: false,
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="about-counter pt-110 pb-120 ">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="block-title">
              <h3>Our Values</h3>
            </div>
            <p className="about-counter__text">
              ICED has developed a unique niche and value proposition to ensure
              its effectiveness as a member of the global community of
              professionals monitoring and Evaluation practitioners.
            </p>
          </Col>
          <Row>
            <Col lg={6}>
              <ul className="list-unstyled ul-list-one">
                <h4>ICED highly aspires </h4>
                <li>
                  Professional excellence on the the cutting edge of evaluation
                </li>
                <li>Professional and personal integrity</li>
                <li>Relationships and joint contributions</li>
                <li>
                  All relevant voices, especially of those most vulnerable
                </li>
                <li>
                  The diversity of values, cultures and contexts around the
                  world
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <ul className="list-unstyled ul-list-one">
                <h4>ICED is </h4>
                <li>Responsive, agile and catalytic </li>
                <li>Independent from undue influence</li>
                <li>Accountable to multiple stakeholders</li>
                <li>Passionate and committed</li>
                <li>
                  Inspired by our vision of the world, and the role that
                  evaluation can play.
                </li>
              </ul>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default ICEDValues1;
