import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import welcomeImage from "../../assets/images/homepage/how-we-work.webp";

const showHandler = (event) => {
  event.preventDefault();
  const el = document.getElementById("how-we-work");
  el.classList.toggle("read-more-active");
  const x = document.getElementById("read-more-btn2");
  if (x.innerHTML === "Read More") {
    x.innerHTML = "Read Less";
  } else {
    x.innerHTML = "Read More";
  }
};

const HowWeWork = () => {
  return (
    <section className="about-two pt-120 pb-120">
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
                <h3>How We Work</h3>
              </div>
              <p className="mb-40 pr-8 read-more" id="how-we-work">
                At the core of ICED's establishment is the belief that Africa
                now needs more targeted initiatives to encourage and advance
                thought and practice leadership in the Monitoring and Evaluation
                profession. ICED assumption is that if trends and priorities are
                well-identified; existing expertise and innovations in Africa
                highlighted and developed hand in hand or integrated with those
                in the other countries; original thinkers and practitioners
                encouraged to span disciplinary, sector, geographic, demographi
                c and ideological boundaries ; influential, well-resourced and
                risk-taking actors are brought on board; known and new
                information and knowledge are integrated, synthesized and well
                communi cated; and energies focused on solving key challenges
                and sharing solutions, advances in Monitoring and Evaluation
              </p>
              <div className="buttons-homepage">
                <Link href="">
                  <a
                    className="thm-btn dynamic-radius"
                    onClick={showHandler}
                    id="read-more-btn2"
                  >
                    Read More
                  </a>
                </Link>
                <div className="brochure-buttons-homepage">
                  <Link href="/pdfs/ICED-Brochure-2021-1.pdf">
                    <a className="brochure-button">ICED Brochure</a>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowWeWork;
