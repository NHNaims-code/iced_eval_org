import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import welcomeImage from "../../assets/images/homepage/who-we-are.webp";

const showHandler = (event) => {
  event.preventDefault();
  const el = document.getElementById("who-we-are");
  el.classList.toggle("read-more-active");
  const x = document.getElementById("read-more-btn");
  if (x.innerHTML === "Read More") {
    x.innerHTML = "Read Less";
  } else {
    x.innerHTML = "Read More";
  }
};

const AboutTwo = () => {
  return (
    <div className="gradient-background-1">
      <section className="about-two pt-120 pb-120 ">
        <Container>
          <Row>
            <Col xl={6}>
              <div className="about-two__image">
                <img src={welcomeImage} alt="" />
              </div>
            </Col>
            <Col xl={6}>
              <div className="about-two__content">
                <div className="block-title">
                  <p></p>
                  <h3>Who We Are</h3>
                </div>
                <p className="mb-40 pr-8 read-more" id="who-we-are">
                  The International Center for Evaluation and Development (ICED)
                  fills an important gap in the global evaluation architecture.
                  It is the first Africa-based international think-tank that
                  combines research and innovation with extensive practical
                  experience in evaluation for development in Africa. With our
                  operating headquarters in Kenya, and West Africa Regional
                  office in Accra, Ghana, and a range of emerging international
                  alliances and partnerships, ICED is poised to use and enhance
                  the value of evaluation to contribute to the development
                  outcomes and impacts that address the opportunities of today
                  and the future. It focuses specifically on the Global South,
                  with Africa as a significant priority.
                </p>
                <div>
                  <Link href="">
                    <a
                      className="thm-btn dynamic-radius"
                      onClick={showHandler}
                      id="read-more-btn"
                    >
                      Read More
                    </a>
                  </Link>
                  <div className="brochure-buttons-homepage">
                    <Link href="/pdfs/ICED-Brochure-2021-1.pdf">
                      <a className="brochure-button">ICED Brochure - English</a>
                    </Link>
                    <Link href="/pdfs/ICED_Brochure_French.pdf">
                      <a className="brochure-button">ICED Brochure - French</a>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutTwo;
