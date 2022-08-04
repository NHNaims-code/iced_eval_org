import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import welcomeImage from "../../assets/images/homepage/programs.webp";

const AllPrograms = () => {
  return (
    <>
      <section className="about-two pt-120 pb-120 gradient-background-3">
        <Container>
          <Row>
            <Col xl={6}>
              <div className="about-two__image">
                <img src={welcomeImage} alt="" width={586} />
              </div>
            </Col>
            <Col xl={6}>
              <div className="about-two__content">
                <div className="block-title">
                  <h3>Programs</h3>
                </div>
                <p className="mb-40 pr-10">
                  ICED is an international and independent think-tank,
                  specializing in innovation and research in Monitoring and
                  Evaluation for development. Given below is a list of programs
                  held by ICED.
                </p>
                <Row>
                  <Col md={4}>
                    <div className="about-two__box">
                      <h3>
                        <i className="azino-icon-confirmation"></i>
                        <a className="program-link" href="/programs/iindwege/bmgf-funded-project">
                          IINDWEGE
                        </a>
                      </h3>
                    </div>
                    <div className="about-two__box">
                      <h3>
                        <i className="azino-icon-confirmation"></i>
                        <a className="program-link" href="/programs/evidence-to-action-conference">
                          EAC
                        </a>
                      </h3>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="about-two__box">
                      <h3>
                        <i className="azino-icon-confirmation"></i>
                        <a className="program-link" href="/programs/all-in">ALL-IN</a>
                      </h3>
                    </div>
                    <div className="about-two__box">
                      <h3>
                        <i className="azino-icon-confirmation"></i>
                        <a className="program-link" href="/programs/adaim">ADAIM</a>
                      </h3>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="about-two__box">
                      <h3>
                        <i className="azino-icon-confirmation"></i>
                        <a className="program-link" href="/programs/executive-leadership-program-in-monitoring-and-evaluation-for-public-institutions-and-agencies">
                          ELCM
                        </a>
                      </h3>
                    </div>
                  </Col>
                </Row>
                <Link href="/programs/iindwege/bmgf-funded-project">
                  <a className="thm-btn dynamic-radius mt-5">Discover More</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AllPrograms;
