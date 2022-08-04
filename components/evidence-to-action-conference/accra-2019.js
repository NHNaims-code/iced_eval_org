import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import blogDetailsImage from "../../assets/images/blog/blog-d-1-1.jpg";
import { accra2019Image } from "../../data/evidence-to-action-conference";
import PageShare from "../page-share";

const Accra2019 = () => {
  return (
    <section className="blog-details pt-120 pb-40 gradient-background-1">
      <Container>
        <Row>
          <Col md={12}>
            <div>
              <div className="blog-card__image">
                <img src={accra2019Image} alt="" />
                <div className="blog-card__date">Accra 2019</div>
              </div>

              <h3>Evidence To Action Conference - Accra 2019</h3>
              <h4>Theme of the Conference</h4>
              <p>
                The theme ‘’Responsibility and Accountability: Strengthening
                Evidence Generation and Use in Support of Africa Policy Reform
                and Development Agenda.’’
              </p>
              <h4>Aim of the Conference</h4>
              <p>
                The aim of the conference will be to identify and discuss
                accountability and responsibilities of stakeholders in the use
                of evidence to address developmental needs.
              </p>
              <h4>The Concept</h4>
              <p>
                “On 1 January 2016, the
                <a
                  href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/"
                  target="_blank"
                >
                  {" "}
                  17 Sustainable Development Goals (SDGs){" "}
                </a>
                of the
                <a
                  href="https://www.un.org/ga/search/view_doc.asp?symbol=A/RES/70/1&Lang=E"
                  target="_blank"
                >
                  {" "}
                  2030 Agenda for Sustainable Development{" "}
                </a>
                — adopted by world leaders in September 2015 at an
                <a
                  href="http://www.un.org/sustainabledevelopment/summit/"
                  target="_blank"
                >
                  {" "}
                  historic UN Summit{" "}
                </a>
                — officially came into force. Over the next fifteen years, with
                these new Goals that universally apply to all, countries will
                mobilize efforts to end all forms of poverty, fight inequalities
                and tackle climate change, while ensuring that no one is left
                behind.
              </p>

              <p>
                Sustainable development (SD) is defined in the Brundtland Report
                as “development that meets the needs and aspirations of the
                present without compromising the ability of future generations
                to meet their own needs”. Thus, sustainable development is the
                organizing principle for sustaining finite resources necessary
                to provide for the needs of future generations of life on the
                planet.
              </p>

              <p>
                This definition implies the two cardinal principles of
                leadership – Responsibility and Accountability. The
                responsibility and accountability all countries, poor, rich and
                middle-income to promote prosperity while protecting the planet.
              </p>

              <p>
                For Development countries to be able to mobilize efforts to end
                all forms of poverty, fight inequalities and tackle climate
                change, while ensuring that no one is left behind, they should
                be able to provide leadership in the generating and utilization
                of evidence that are required for them to assess outcomes and
                impacts of development interventions and programs, capture the
                progress, success, and failures of its sustainable development
                interventions, inform all stakeholders for effective decisions
                making, strategic planning and risk management, provide
                accountability to its citizens and to contribute to the broader
                knowledge and learning in the field of sustainable development.
              </p>

              <p>
                The type of leadership calls for the high-level responsibility
                and accountability from both policy makers, development
                professionals, researchers and evaluators and other stakeholders
                – that is the willingness to be responsible and accountable for
                the well-being of the larger community by making decision and
                developing policy and action that is based on well-informed
                evidence that are support by irrefutable facts and data. More
                and more global leadership are embracing the new concept of
                responsibility and accountability in terms of evidence
                generation and the use of in support of policy making and
                development action.
              </p>

              <p>
                Africa countries cannot be passive spectators in the generating
                of evidence in their area of 17 sustainable Development Goals.
                We cannot wait for researchers and evaluators from the Developed
                countries to take the initiative and responsibility to generate
                the evidence that are needed to actively track and monitor our
                progress and attainment of the SDG Goals. There is a global
                responsibility for all global citizens to contribute to the
                global development agenda. The modern world is a global village,
                a global household, a global economic unit of the global
                community and to develop policies and development actions that
                contribute to the eradication of poverty, fight inequalities and
                tackle climate change, all should be demonstrate leadership,
                authority and accountability of the evidence generation and its
                use thereof.
              </p>
              <p>
                Evidence Generation and Use in Support of Africa Policy Reform
                and Sustainable Development Agenda is a two-party proposition.
                The responsibility to provide the research and evaluation agenda
                and the resources requirement and the holding accountable of
                those entrusted with the resources to generate the sound,
                rigorous, and solid evidence that can be used for policy making
                and practices. While is the responsibility for policy makers and
                development professionals to demand solid, rigorous and sound
                evidence for policy making and action to contribute to the SDG
                goals and should be accountable of the use of these evidence at
                all time and provide resources needed, it is also the
                responsibility of researchers and evaluators to supply well
                documented and systematic reviewed evidence and be accountable
                to present research and evaluation results and findings in a
                manner, format, language and time needed and can be used by the
                policy makers and governments for effective decision making that
                “meets the needs and aspirations of the present without
                compromising the ability of future generations to meet their own
                needs”
              </p>
              <div style={{ textAlign: "center" }}>
                <h4>
                  Official Opening of Evidence to Action 2019 Conference by
                  Ghana Vice President,Dr Bawumia
                </h4>
                <p className="pb-80">
                  <iframe
                    width="854"
                    height="480"
                    src="https://www.youtube.com/embed/_HLTXgsTKWs"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <h4>
                Evidence to Action Conference 2019-Panel Discussions
                </h4>
                <p className="pb-80">
                <iframe width="854" height="480" src="https://www.youtube.com/embed/M2gSwCASIIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </p>
              </div>

              <PageShare category={""} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Accra2019;
