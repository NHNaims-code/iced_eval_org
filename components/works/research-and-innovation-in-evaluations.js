import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageShare from "../page-share";

const ResearchAndInnovationInEvaluation = () => {
  return (
    <section className="blog-details pt-120 pb-40 gradient-background-4">
      <Container>
        <Row>
          <Col md={12}>
            <div>
              <p>
                ICED seeks to provide leadership in continuously research,
                develop and deploy cutting-edge and cost-effective innovations
                and best practices, to transform evaluation, to promote data
                driven decision making aimed at accelerating development in
                Africa. In addition, ICED want to raise the visibility,
                awareness, influence and of overall contribution of ICED on the
                continent. ICED intend to achieve this vision through three
                broad strategies; (a) Innovations in Evaluation Research, (b)
                Collaborations with Strategic Partners, and (c) Evaluation
                Knowledge Management.
              </p>

              <h4>Innovations in Evaluation Research</h4>

              <p>
                <ul>
                  <li>
                    Spearhead the development and deployment of innovations in
                    evaluation through continuous review of methodologies and
                    approaches to evaluation in Africa to identify best
                    practices and innovations (including cutting edge and cost
                    effective approaches)
                  </li>
                  <li>
                    Provide leadership and strategic input in the design,
                    development and implementation of innovations in evaluation
                    (e.g. real time monitoring and mobile/remote data
                    collection)
                  </li>
                  <li>
                    Collaborate with and support the development of new
                    initiatives, research and innovations to transform
                    evaluation to promote data-driven decision along
                    cross-cutting themes.
                  </li>
                  <li>
                    Share, evaluate, and advance strategies to promote the
                    research capabilities of the unit’s personnel to enable them
                    undertake evaluation research.
                  </li>
                </ul>
              </p>

              <h4>Collaborations with Strategic Partners</h4>
              <p>
                <ul>
                  <li>
                    Cultivate and manage collaborations with identified
                    bilateral, regional, national and local partners and
                    institutions for knowledge exchange and mutual learning in
                    evaluation in Africa.
                  </li>
                  <li>
                    Establish synergies with governments, private and
                    philanthropic organizations, donors, and funding agencies to
                    create new opportunities for evaluation research in Africa
                  </li>
                  <li>
                    Communicate research capabilities and develop concept notes
                    and proposals for funding innovative research in evaluation
                  </li>
                </ul>
              </p>

              <h4>Evaluation Knowledge Management</h4>
              <p>
                <ul>
                  <li>
                    Develop the systems, processes and tools to better acquire
                    and capture knowledge (including indigenous knowledge) in
                    evaluation to support decision making in Africa.
                  </li>
                  <li>
                    Develop appropriate dissemination systems to share and use
                    quality and reliable evaluation data with strategic partners
                    and other stakeholders
                  </li>
                  <li>
                    Provide consultancy in evaluation to front-line
                    practitioners
                  </li>
                  <li>
                    Publish reports, working papers and policy briefs among
                    other writings
                  </li>
                </ul>
              </p>
              <PageShare category={``}/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ResearchAndInnovationInEvaluation;
