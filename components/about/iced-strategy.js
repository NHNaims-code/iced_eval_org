import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import welcomeImage from "../../assets/images/homepage/iced-strategy.webp";

const ICEDStrategy = () => {
  return (
    <section className="about-two pt-120 pb-120 gradient-background-2">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="about-two__image">
              <img src={welcomeImage} alt="" width={586} />
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-two__content">
              <div className="block-title">
                <h3>ICED Strategy</h3>
              </div>
              <p className="mb-40 pr-8">
                We advancing research and innovation in Monitoring and
                Evaluation by highlighting, triggering, and catalyzing thought
                and practice leadership in Africa by:
                <ul>
                  <li>
                    Identifying, forecasting, tracking trends and critical
                    issues in Monitoring and Evaluation for development
                  </li>
                  <li>
                    Bring people together across the disciplinary, cultural,
                    sector, ideological, and other boundaries to trigger and
                    catalyze innovation for Africa
                  </li>
                  <li>
                    Conduct theory and field-based research, meta-analysis, meta
                    Monitoring, Evaluation, and synthesis to fill knowledge gaps
                    in Africa
                  </li>
                  <li>
                    Ensure effective engagement with influential and important
                    stakeholders.
                  </li>
                </ul>
                We work with interested policy decision-makers, managers,
                Monitoring, and Evaluation funders, and commissioners to test
                Monitoring and Evaluation innovations in the field, including in
                cross-cultural contexts and paradigms
              </p>
              <Link href="/pdfs/ICED-Brochure-2021-1.pdf">
                <a className="thm-btn dynamic-radius">Learn More</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ICEDStrategy;
