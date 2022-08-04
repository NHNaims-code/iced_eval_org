import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import mozambiqueImage from "../../../assets/images/projects/mozambique/banner.webp";
import PageShare from "../../page-share";

const EndofProjectEvaluaionForMozambiqueLocal = () => {
  return (
    <section className="blog-details pt-120 pb-40 gradient-background-1">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <div>
              <div className="blog-card__image">
                <img src={mozambiqueImage} alt="" />
                <div className="blog-card__date">18 Jun</div>
              </div>
              <h3>End of Project Evaluation for the Mozambique Local and Regional Procurement (LRP) Project</h3>
              <p>
              ICED was contracted by World Vision Mozambique to conduct an end of project Evaluation for local procurement school feeding programme which was implemented over a period of two years that is 2017 – 2019
              </p>
              

              <h4>Role of ICED : </h4>
              <p>
              ICED assessed the project implementation process, identifying the project achievements and any challenges faced. The evaluation generally contributed to the organizational learning by identifying lessons learnt and emerging good practices.
              </p>
              

              <h4>ICED Approach : </h4>
              <p>
              A mixed-methods approach was utilized for this evaluation and that included quantitative and qualitative data collection approaches to enrich the validity of the evaluation results through data triangulation.  
              </p>
              <h4>Team Members : </h4>
              <p>
                <ul>
                  <li>Dr. David Ameyaw</li>
                  <li>Eneida Monteiro</li>
                  <li>Ventura Mfume</li>
                </ul>
              </p>
              <h4>Client : </h4>
              <p>World Vision International</p>

              <h4>Core Area : </h4>
              <p>Institutional M&E Systems Development and Adaptive Management</p>
              <h4>Functional Area : </h4>
              <p>
              Food Security
              </p>

              <h4>Geography : </h4>
              <p>Mozambique</p>

              <h4>Stage : </h4>
              <p>Completed</p>

              <h4>Durations : </h4>
              <p>July 2019 to December 2019</p>
              <PageShare category={"Food Security"} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EndofProjectEvaluaionForMozambiqueLocal;
