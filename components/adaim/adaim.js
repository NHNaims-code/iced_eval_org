import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import objectiveImage from "../../assets/images/adaim/objective.webp";
import indiaAfricaImage from "../../assets/images/adaim/india-africa.webp";
import AdaimFocusArea from "./adaim-focus-area";
import AdaimPartners from "./adaim-partners";
import farmerImage from "../../assets/images/adaim/indian-farmer-1610471656527.png";
import PageShare from "../page-share";

const ADAIM = () => {
  return (
    <section className="cause-details blog-details  pt-120 pb-40 gradient-background-1">
      <Container>
        <Row>
          <Col md={12}>
            <div className="cause-card">
              <div className="cause-card__inner">
                <div className="cause-card__image">
                  <img
                    src={farmerImage}
                    alt="Farmer Image"
                    width={770}
                    height={440}
                  />
                </div>
                <div className="cause-card__content">
                  <div className="cause-card__top"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <div className="cause-details__content">
              <h3>
                Agile Data Approaches and Innovations for Monitoring (ADAIM)
              </h3>
              <p>
                The Agile Data Approaches and Innovations for Monitoring project
                envisions to be the North Star for monitoring, learning, and
                evaluating in Foundations’s AgDev programs in India and Africa.
                Frequent, effective, and low-cost data snapshots provide the
                basis for immediate action during the life of the project rather
                than waiting for a midterm or final evaluation.
              </p>
              <p>
                We envision for AgDev a future where MLE, based on consistent,
                standardized data, is undertaken regularly for understanding
                individual projects, and also for understanding a portfolio of
                projects as a whole. Comparability is possible and facilitates
                the ability for AgDev to compare and draw out learning from
                similar initiatives. By using common, universal metrics –
                whether it is climate adaptation, gender inclusion, or income
                generation – the data works across categories and geographies.
                It points to interesting differences, similarities, strengths,
                and opportunities to improve.
              </p>
              <p>
                Timeline :
                <ul>
                  <li>2022-2026</li>
                </ul>
                Target Benfeciaries :
                <ul>
                  <li>Small-scale farmers and producers</li>
                </ul>
              </p>

              <h4 className="mt-5">ADAIM Objective</h4>

              <div className="buttons-homepage">
                <div style={{width:"50%"}}>
                  <img
                    src={objectiveImage}
                    width="80%"
                    className="d-block mx-auto"
                  />
                  <cite className="mt-5">
                    To establish functional, scalable, agile data gathering and
                    monitoring systems that deliver timely, credible, and
                    actionable data to inform evidence-based decision making for
                    Bill and Melinda Gates Foundation's agricultural development
                    sustainability investments
                  </cite>
                </div>
                <div style={{width:"50%"}}>
                  <img
                    src={indiaAfricaImage}
                    width="80%"
                    className="d-block mx-auto"
                  />
                  <cite className="mt-5">India and Africa</cite>
                </div>
              </div>
            </div>

            <div className="result"></div>
          </Col>
          <Col md={12} lg={4}>
            <AdaimPartners />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <AdaimFocusArea />
      </Container>
      <Container>
        <PageShare category={""}/>
      </Container>
    </section>
  );
};

export default ADAIM;
