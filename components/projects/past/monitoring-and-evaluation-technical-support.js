import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import monitoringImage from "../../../assets/images/projects/monitoring and evaluation technical support/banner.webp";
import PageShare from "../../page-share";

const MonitoringAndEvaluationTechnicalSupport = () => {
  return (
    <section className="blog-details pt-120 pb-40 gradient-background-1">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <div>
              <div className="blog-card__image">
                <img src={monitoringImage} alt="" />
                <div className="blog-card__date">18 Jun</div>
              </div>
              <h3>Monitoring and Evaluation Technical Support</h3>
              <p>
                ICED was contracted by USADF to provide Monitoring and
                Evaluation technical support to its partners in 22 African
                countries. ICED in response built the capacity of all the USADF
                partner staff in all the 22 countries to be able to carry out
                Organisational Capacity Assessment (OCA) and Poverty Probability
                Index (PPI) for their grantees. Both tools helped in
                facilitating effective programme design, implementation, and
                evaluation.
              </p>
              <p>
                USADF then requested ICED to train the grants on how to leverage
                technology for data collection, analysis, and reporting.
              </p>

              <h4>Objectives : </h4>
              <p>
                ICED supported USADF to build the capacity of their grantees in
                about 20 African countries to be able to conduct Organization
                Capacity Assessment (OCA) and Poverty Probability Index (PPI)
                for their sub-grantees. ICED is currently training the USADF
                grantees on digital data collection using the Kobo tool kit.
              </p>

              <h4>Role of ICED : </h4>
              <p>
                ICED trained all the partner staff in the 22 African Countries
                on how to effectively use both the OCA and the PPI tools.
              </p>
              <p>
                ICED trained teams in a total of 8 countries on how to use Kobo
                tool kit for data collection and analysis. The countries include
                Uganda, Kenya, Rwanda, Zimbabwe, Mauritania, Mali, Malawi, and
                Zambia.
              </p>

              <h4>ICED Approach : </h4>
              <p>
                All the trainings that happened before covid were conducted in
                person or physically while the training that happened post covid
                were conducted virtually.
              </p>
              <h4>Team Members : </h4>
              <p>
                <ul>
                  <li>Dr. David Ameyaw</li>
                  <li>Adama Konseiga</li>
                  <li>Daniel Epeh</li>
                  <li>Dr. Kwame Obeng Ntii</li>
                  <li>Sarah Ameso</li>
                  <li>Blessing Bmhosva</li>
                </ul>
              </p>
              <h4>Client : </h4>
              <p>United States Africa Development Fund (USADF)</p>

              <h4>Core Area : </h4>
              <p>Capacity strengthening & Professional Development</p>
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
              <p>June 2018 – April 2021</p>
              <PageShare category={"Governance, Process Analysis"} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MonitoringAndEvaluationTechnicalSupport;
