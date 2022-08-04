import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import jicaBannerImage from "../../../assets/images/projects/jica/banner.webp";
import PageShare from "../../page-share";

const Jica = () => {
  return (
    <section className="blog-details pt-120 pb-40 gradient-background-1">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <div>
              <div className="blog-card__image">
                <img src={jicaBannerImage} alt="" />
                <div className="blog-card__date">04 Apr</div>
              </div>
              <h3>
                Thematic Evaluation of the Noguchi Memorial Institute for
                Medical Research in Ghana
              </h3>
              <p>
                ICED is managing the thematic evaluation of Ministry of Foreign
                Affairs of Japan (MOFA) program of support to Ghana. There are
                currently four (4) Japan Official Development Assistance
                projects to Noguchi Memorial Institute for Medical Research in
                Ghana (NMIMR) between 2016 – 2020 but this evaluation is focused
                on two of them.
              </p>
              <h3>The two (2) projects include:</h3>
              <p>
                <ul>
                  <li>
                    FY 2016 Grant Assistance: "Constructing an advanced research
                    center for infectious diseases in the NMIMR"
                    JPY2,285,000,000. This project aims to ensure efficient and
                    safe research as well as the provision of good teaching
                    environment of the NMIMR to play a leading role in tackling
                    the ever-expanding research and training needs of Ghana and
                    the West African sub-region to respond effectively to
                    disease outbreaks.{" "}
                  </li>
                  <li>
                    FY2019 Technical Cooperation: “The Third Country Training
                    Course on Enhancing Laboratory Skills for Infectious
                    Diseases in West African Countries for Post Ebola”.
                  </li>
                </ul>
              </p>

              <h3>Our Role and Approach</h3>
              <p>
                ICED will actively engage with MOFA and solicit their input, the
                evaluation team will use empirical evidence and a structured
                valuing approach to identify and offer an independent assessment
                and perspective to MOFA and its stakeholders. We will use the
                project log-frames as a key document to ensure that we
                exhaustively cover each objective, expected outcomes,
                assumptions, and indicators. Our role as evaluators is to ensure
                that we gather empirical data from multiple perspectives at
                different levels, triangulate that data to answer each
                evaluation question, and make sense of the findings. A five (5)
                pronged approach will be adopted for the evaluation.
              </p>
              <p>
                The thematic evaluation seeks to determine how well Japan’s
                assistance for Noguchi Memorial Institute for Medical Research
                (NMIMR) achieved the outcomes planned, how they were achieved
                and under what conditions. The evaluation also attempts to
                analyze how Japan’s assistance for NMIMR contributed to Ghana’s
                response to Covid-19. This information can inform not only
                Japan’s future ODA projects but also the international society
                by identifying lessons leant and emerging good practices.
              </p>

              <h3>Team Members : </h3>
              <p>
                Dr. David Ameyaw, Prof. Dorcas Obiri- Yeboah, Isaac Letsa, Edem
                Tornyie, Fadilatu Sagri Adams, Desmond Kaledzi
              </p>
              <PageShare category={"Government, Health"} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Jica;
