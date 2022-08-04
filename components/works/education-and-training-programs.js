import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageShare from "../page-share";

const EducationAndTrainingProgram = () => {
  return (
    <section className="blog-details pt-120 pb-40 gradient-background-4">
      <Container>
        <Row>
          <Col md={12}>
            <div>
              <p>
                ICED Education and Training program provides individual and
                corporate with knowledge and skills that draws on, and
                stimulates innovative work on what Monitoring and Evaluations
                should be like, and its implications in society. The program
                seeks to cultivate a “life of the mind for practice” among those
                who fund and commission evaluations for development, engaging
                them across ideologies and techniques, yet from a very practical
                perspective.
              </p>

              <p>
                The programs focus on three thematic areas:
                <ul>
                  <li>
                    <span className="inline-bold">
                      Executive Leadership Skills Development Program :
                    </span>
                    The program focuses on developing individual and
                    organizational leadership skills and applying those skills
                    to enhance evaluation theory and practice.
                  </li>
                  <li>
                    <span className="inline-bold">
                      Evaluation Communication :
                    </span>
                    This training program targets evaluation professionals with
                    diverse backgrounds -journalists, development communication
                    specialists and other civil society actors - with the aim of
                    bridging existing communication gaps and facilitating
                    greater translation and use of the best
                    available evidence from data, research, and evaluation in
                    policy formulation and program improvement in the Global
                    South
                  </li>
                  <li>
                    
                    <span className="inline-bold">
                      Management Decision Making :
                    </span>
                    The program focuses on supporting evaluation professions at
                    African institutions and organizations to lead and drive
                    change within their organizations and the Global South more
                    generally.
                  </li>
                </ul>
              </p>

              <PageShare />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EducationAndTrainingProgram;
