import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import projectEvaluation2 from "../../../assets/images/projects/end of project evaluation 2/banner.webp";
import PageShare from "../../page-share";

const EndOfProjectEvaluationPart2 = () => {
  return (
    <section className="blog-details pt-120 pb-40 gradient-background-1">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <div>
              <div className="blog-card__image">
                <img src={projectEvaluation2} alt="" />
                <div className="blog-card__date">19 Jan</div>
              </div>
              <h3>
                End of Project Evaluation - II
              </h3>
              <p>
              The JFA III was a four-year multi-funding instrument (2014-2018) provided by ECA partners comprising Denmark, Sweden, Republic of South Korea, and the United Kingdom. The funding was used to support programs and activities in five thematic areas covering macroeconomic policy, regional integration and trade, statistics, gender, and human rights as well as social development.  ICED was contracted to conduct the final evaluation of JFA III. 
              </p>

              <h4>Role of ICED : </h4>
              <p>ICED conducted an Evaluation to take stock of performance of the thematic areas funded under the agreement by end of December 2018 and compare it to its original intent specifically capturing the progress that was made in relation to ECA’s 2014 – 2018 result framework. The evaluation focused on a strategic reflection on the relevance, effectiveness, efficiency, and progress made towards achieving results and possible impact.</p>

              <h4>ICED Approach : </h4>
              <p>
              The Evaluation used a blend several of methodologies and instruments to explore the evaluation questions. Data from the evaluation was derived from both primary and secondary sources. 
              </p>
             
             <h4>Team Members</h4>
             <p>
               <ul>
                 <li>Dr. David Ameyaw</li>
                 <li>Dr. Andrew Asibye</li>
               </ul>
             </p>

              <h4>Client : </h4>
              <p>United Nations Economic Commission of Africa (UNECA)</p>

              <h4>Core Area : </h4>
              <p>Institutional M&E Systems Development and Adaptive Management.</p>

              <h4>Functional Area : </h4>
              <p>Governance</p>

              <h4>Geography : </h4>
              <p>Multiple Countries</p>

              <h4>Stage : </h4>
              <p>Completed</p>

              <h4>Durations : </h4>
              <p>January 2019 -July 2019</p>
              <PageShare category={"Governance"} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EndOfProjectEvaluationPart2;
