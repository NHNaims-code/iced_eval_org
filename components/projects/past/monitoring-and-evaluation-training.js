import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import monitoringTrainingImage from "../../../assets/images/projects/monitoring and evaluation/banner.webp";
import PageShare from "../../page-share";

const MonitoringAndEvaluationTraining = () => {
  return (
    <section className="blog-details pt-120 pb-40 gradient-background-1">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <div>
              <div className="blog-card__image">
                <img src={monitoringTrainingImage} alt="" />
                <div className="blog-card__date">20 Feb</div>
              </div>
              <h3>Monitoring and Evaluation Training</h3>
              <p>
              The overall goal of this assignment was to build the capacity of Kianda Foundation to implement Monitoring and Evaluation and to Develop Monitoring and Evaluation Professionals within the organization.
              </p>


              <h4>Objectives : </h4>
              <p>
              The overall goal of the assignment was to build the capacity of Kianda Foundation to implement Monitoring and Evaluation and Develop Monitoring and Evaluation Professionals within the organization. The assignment had three specific objectives and they included 1) To develop the Monitoring and Evaluation plan for the current project through a participatory approach with the Kianda Foundation staff. 2) To provide technical support for implementing the Monitoring and Evaluation Plan. 3) To support the development of professional skills in Monitoring and Evaluation among the target Kianda Foundation staff. ICED conducted the training and 80% of the participants indicated that the training achieved its objective.
              </p>

              <h4>Role of ICED : </h4>
              <p>
              ICED trained the selected Kianda foundation staff on Key aspects of Monitoring and Evaluation and how to Set up M&E systems in their organization.
              </p>
             

              <h4>ICED Approach : </h4>
              <p>
              The training was conducted in person and in a participatory manner
              </p>
              
              <h4>Client : </h4>
              <p>Kianda Foundation</p>

              <h4>Core Area : </h4>
              <p>Capacity Strengthening & Professional Development</p>
              <h4>Functional Area : </h4>
              <p>
              Monitoring and Evaluation Capacity building
              </p>

              <h4>Geography : </h4>
              <p>Kenya</p>

              <h4>Stage : </h4>
              <p>Completed</p>

              <h4>Durations : </h4>
              <p>February 2020- February 2020</p>
              <PageShare category={"Governance, Process Analysis"} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MonitoringAndEvaluationTraining;
