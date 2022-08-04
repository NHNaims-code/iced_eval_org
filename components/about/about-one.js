import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about1 from "../../assets/images/shapes/about-bag-1-1.png";
import about2 from "../../assets/images/resources/about-1-1.jpg";
import about3 from "../../assets/images/resources/about-1-2.jpg";
import heart from "../../assets/images/shapes/heart-2-1.png";

const AboutOne = () => {
  return (
    <section className="about-one pt-120 pb-40">
      <Container>
        <Row>
          <div className="about-one__award">
            <img src={about1} alt="" />
          </div>
          <Col lg={6}>
            <img src={about2} alt="" className="img-fluid" />
          </Col>
          <Col lg={6}>
            <img src={about3} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="team-about__top mt-60">
          <Row>
            <Col md={12} lg={2}>
              <div className="block-title">
                <p>
                  ICED Values
                </p>
                <h3>Advancing Research and Innovation</h3>
              </div>
            </Col>
            <Col md={12} lg={5}>
              <p className="team-about__top-text">
              We advancing research and innovation in Monitoring and Evaluation by highlighting, triggering, and catalyzing thought and practice leadership in Africa by :
              <ul>
                <li>identifying, forecasting, tracking trends and critical issues in Monitoring and Evaluation for development</li>
                <li>bring people together across the disciplinary, cultural, sector, ideological, and other boundaries to trigger and catalyze innovation for Africa</li>
                <li>conduct theory and field-based research, meta-analysis, meta Monitoring, Evaluation, and synthesis to fill knowledge gaps in Africa</li>
                <li>ensure effective engagement with influential and important stakeholders.</li>
              </ul>
              </p>
            </Col>
            <Col md={12} lg={5}>
              <p className="team-about__top-text">
              We work with interested policy decision-makers, managers, Monitoring, and Evaluation funders, and commissioners to test Monitoring and Evaluation innovations in the field, including in cross-cultural  contexts and paradigms
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutOne;
