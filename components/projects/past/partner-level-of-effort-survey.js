import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import partnerLevelImage from "../../../assets/images/projects/partner level of effort survey/banner.webp";
import PageShare from "../../page-share";

const PartnerLevelofEffortSurvey = () => {
  return (
    <section className="blog-details pt-120 pb-40 gradient-background-1">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <div>
              <div className="blog-card__image">
                <img src={partnerLevelImage} alt="" />
                <div className="blog-card__date">21 May</div>
              </div>
              <h3>Partners Level of Effort Survey</h3>
              <p>
              The level of effort Survey was meant to; (1) ensure that the USADF grantees have the resources that they need to meet achieve their outputs and goals 2) understand how partners across different countries and portfolios are investing their time, and 3) To improve both USADF training for you and process efficiencies
              </p>

              <h4>Objectives : </h4>
              <p>
              ICED conducted a level of effort survey on behalf of USADF to its grantees in 21 African countries. The survey was conducted to understand better the level of effort that the teams are putting into the various tasks, so that USADF can (1) ensure you have the resources you need to meet goals and outputs, (2) understand how partners across different countries and portfolios are investing their time, and (3) improve both USADF training for you.
              </p>

              <h4>Role of ICED : </h4>
              <p>
              ICED executed the entire survey that is from tools design, data collection, data analysis and reporting. A final report was written, and findings presented to USADF management.
              </p>

              <h4>ICED Approach : </h4>
              <p>
              Key Informant interviews were conducted by selected staff representatives for all the positions in USADF partner organizations in each of the 21 African countries.
              </p>
              <h4>Team Members : </h4>
              <p>
                <ul>
                  <li>Dr. David Ameyaw</li>
                  <li>Adama Konseiga</li>
                  <li>Daniel Epeh</li>
                  <li>Sarah Ameso</li>
                  <li>Blessing Bmhosva</li>
                </ul>
              </p>
              <h4>Client : </h4>
              <p>United States Africa Development Fund (USADF)</p>

              <h4>Core Area : </h4>
              <p>Institutional M&E Systems Development and Adaptive Management</p>
              <h4>Functional Area : </h4>
              <p>
                Capacity Building on Monitoring Evaluation and digital data
                collection
              </p>

              <h4>Geography : </h4>
              <p>Multiple Countries</p>

              <h4>Stage : </h4>
              <p>Completed</p>

              <h4>Durations : </h4>
              <p>May 2021- August 2021</p>
              <PageShare category={"Governance, Process Analysis"} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PartnerLevelofEffortSurvey;
