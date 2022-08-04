import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import evitaBannerImage from "../../../assets/images/projects/evita/banner.webp";
import PageShare from "../../page-share";

const Evita = () => {
  return (
    <section className="blog-details pt-120 pb-40 gradient-background-1">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <div>
              <div className="blog-card__image">
                <img src={evitaBannerImage} alt=""/>
                <div className="blog-card__date">04 Apr</div>
              </div>
              <h3>
                Evaluating recommended reforms for inclusive transformation in
                agriculture
              </h3>
              <p>
                ICED is undertaking a retrospective policy evaluation as part of
                the Gates Foundation’s Evaluating Inclusive Transformation in
                Agriculture (EVITA) framework to understand when, how, and why
                some policy reforms are successfully implemented.
              </p>
              <p>
                The policy reforms are influenced by economic analysis by MAFAP
                and MIRA programs, supported in part by the ECS team in BMGF.
                Given that the progress of both investments was well documented,
                the scope of this evaluation is not to assess their performance,
                rather the evaluation seeks to understand the extent to which
                governments and their partners have implemented policies post
                adoption.
              </p>
              <p>
                The target users for the evaluation include EVITA, Ag Dev
                program officers, MAFAP, MIRA, national governments, and other
                stakeholders. Evidence from the evaluation will be used to
                generate learning about what works and what does not in policy
                implementation to inform future strategy, planning and
                implementation. It is this understanding of the TORs, objectives
                and intended use of the evaluation findings that has shaped our
                proposed approach to the evaluation.
              </p>

              <h3>Our Role : </h3>
              <p>
                ICED is undertaking a retrospective policy evaluation of
                recommended reforms to understand the extend to which African
                governments and their partners initiated, resourced, and
                sustained the implementation of specific policy and public
                investments, post adoption. The results of the Evaluation will
                inform the way BMGF develops its future policy strategy and
                program decisions.
              </p>

              <h3>Our Approach : </h3>
              <p>
                ICED will focus on two investments that supported governments in
                identifying, analyzing, and recommending potential policy
                reforms.
              </p>
              <p>
                <ul>
                  <li>Micro Reforms for African Agribusiness (MIRA)</li>
                  <li>
                    Monitoring and Analyzing Food and Agricultural Policies
                    (MAFAP)
                  </li>
                </ul>
              </p>
              <p>
                This evaluation does not seek to assess the performance of MAFAP
                or MIRA but to examine to what extent adopted reforms have been
                implemented by governments and their partners.
              </p>

              <h3>Team Members : </h3>
              <p>
              Dr. David Ameyaw, Sarah Amezo, Edem Tornyie, Prof. Takyiwaa Menuh, Prof. Robert Osei, Desmond Kaledzi, Fadilatu Sagri Adams 
              </p>
              <PageShare category={"Governance, Process Analysis"} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Evita;
