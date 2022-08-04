import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import projectEvaluation1 from "../../../assets/images/projects/end of project evaluation 1/banner.webp";
import PageShare from "../../page-share";

const EndOfProjectEvaluationPart1 = () => {
  return (
    <section className="blog-details pt-120 pb-40 gradient-background-1">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <div>
              <div className="blog-card__image">
                <img src={projectEvaluation1} alt="" />
                <div className="blog-card__date">19 Sep</div>
              </div>
              <h3>
                End of Project Evaluation - I
              </h3>
              <p>
              The United Nation Economic Commission of Africa (UNECA) contracted ICED to conduct an end of project evaluation to review and evaluate the implementation of the “Strengthening the capacity of the Africa Peer Review Mechanism countries in conducting effective self-assessment and implementing the National Plans of Action project fully and independently. The focus of the evaluation is to accurately verify if the objectives of the project were attained and if the means used to attain the objective fall in the project scope.
              </p>

              <h4>Role of ICED : </h4>
              <p>ICED assessed the project’s performance and provided recommendations for the future, covering all components and target countries, and determined performance across seven key areas.</p>

              <h4>ICED Approach : </h4>
              <p>
              The evaluation methodology was a mixed method approach to address the evaluation questions. The evaluation utilized both primary and secondary data. Primary data was collected from interviews and interactions with the target groups qualitative in-person and telephone key informant interviews; various focus group sessions; and direct observations.
              </p>
              <p>
              Quantitative web-based surveys were sent out to other beneficiaries of the program in member countries that the evaluation visit was possible.
              </p>

              <h4>Client : </h4>
              <p>United Nations Economic Commission of Africa (UNECA)</p>

              <h4>Core Area : </h4>
              <p>Institutional M&E Systems Development and Adaptive Management.</p>

              <h4>Functional Area : </h4>
              <p>Strengthening of gender equality and women’s empowerment within the context of the Beijing Declaration and Platform for Action in the Gender and Women Empowerment Division.</p>

              <h4>Geography : </h4>
              <p>Multiple Countries</p>

              <h4>Stage : </h4>
              <p>Completed</p>

              <h4>Durations : </h4>
              <p>September 2019 - February 2020</p>
              <PageShare category={"Training"} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EndOfProjectEvaluationPart1;
