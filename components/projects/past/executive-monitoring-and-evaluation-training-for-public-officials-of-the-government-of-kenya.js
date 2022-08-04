import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import executiveImage from "../../../assets/images/projects/executive monitoring and evaluation/banner.webp";
import PageShare from "../../page-share";

const ExecutiveMonitoringAndEvaluationTrainingForKenya = () => {
  return (
    <section className="blog-details pt-120 pb-40 gradient-background-1">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <div>
              <div className="blog-card__image">
                <img src={executiveImage} alt="" />
                <div className="blog-card__date">19 Jun</div>
              </div>
              <h3>
                Executive Monitoring and Evaluation training for public
                officials of the Government of Kenya
              </h3>
              <p>
                The Executive Leadership Program in Monitoring and Evaluation
                for Public Sector was designed to bridge the gap between theory
                and practice to inform planning and policy making. The course
                was also meant to address gaps in the evaluative capabilities
                and knowledge and advance evaluation theory and practice in
                support of sustained and resilient development with specific
                focus on the challenges and experiences shared by public sector
                practitioners in the planning and delivery of the national
                agenda.
              </p>

              <h4>ICED Approach : </h4>
              <p>
                This course was run in a workshop-style using classroom lectures
                and executive learning methodologies including group work and
                individual project development.
              </p>
              <p>
                To achieve the outcomes full participation was required and
                participants got the opportunity to share their experiences and
                best practices regarding designing monitoring and evaluations
                plans and individual coaching and mentoring in developing action
                plan for their organizations.
              </p>

              <h3>Client : </h3>
              <p>Department of Monitoring and Evaluation</p>

              <h4>Core Area : </h4>
              <p>Capacity Strengthening & Professional Development</p>

              <h4>Functional Area : </h4>
              <p>Capacity Building in Monitoring and Evaluation</p>

              <h4>Geography : </h4>
              <p>Kenya</p>

              <h4>Stage : </h4>
              <p>Completed</p>

              <h4>Durations : </h4>
              <p>June 2019 - June 2019</p>
              <PageShare category={"Training"} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ExecutiveMonitoringAndEvaluationTrainingForKenya;
