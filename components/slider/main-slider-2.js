import React from "react";
import Link from 'next/link';  
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";
import banner0 from "../../assets/images/main-slider/e2a-details.webp";
import banner1 from "../../assets/images/main-slider/e2a-poster.webp";
import banner2 from "../../assets/images/main-slider/david.webp";
import banner3 from "../../assets/images/main-slider/all-in.webp";
import banner4 from "../../assets/images/main-slider/evita.webp";
import iindwege from "../../assets/images/main-slider/iindwege.webp";
import adaim from "../../assets/images/main-slider/adaim.webp";

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const MainSliderTwo = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  };



  return (
    <section className="main-slider main-slider__two">
      <Swiper {...mainSlideOptions}>
      <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner0})`, backgroundSize:'contain', backgroundPosition:'center', backgroundColor:'white' }}
          ></div>

          <Container>
            <Row className="justify-content-start">
              <Col xl={9} lg={12} className="text-left">
                <h2>
                    Evidence to Action Conference 2022
                </h2>
                <p>The conference aims to nurture the use of evidence-based policy decision-making and action in Africa, especially in the drive towards the realization of Agenda 2063 and 2030 Agenda goals within the disruptions of the Covid-19 pandemic.</p>
                <Link href="https://e2a.iced-eval.org/" passHref={true}>
                  <a target="_blank" className="scroll-to-target thm-btn dynamic-radius">Learn more</a>
                </Link>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner1})`, backgroundSize:'contain', backgroundPosition:'center', backgroundColor:'white' }}
          ></div>

          <Container>
            <Row className="justify-content-start">
              <Col xl={9} lg={12} className="text-left">
                <h2>
                    Evidence to Action Conference 2022: 26 – 30 September 2022, Kampala Uganda
                </h2>
                <p>Theme: Adapting and innovating evaluation practice for evidence-based decision making within and beyond COVID-19.</p>
                <Link href="https://e2a.iced-eval.org/events/2022-evidence-to-action-conference/" passHref={true}>
                  <a target="_blank" className="scroll-to-target thm-btn dynamic-radius">Register Online</a>
                </Link>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
       
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${iindwege})` }}
          ></div>

          <Container>
            <Row className="justify-content-start">
              <Col xl={9} lg={12} className="text-left">
                <h2>
                  Infrastructure’s Impact on Nutritious Diet and Women’s
                  Economic Empowerment - IINDWEGE
                </h2>
                <p>A BMGF Funded Project</p>
                <a
                  href="/programs/iindwege/bmgf-funded-project"
                  data-target=".donate-options"
                  className="scroll-to-target thm-btn dynamic-radius"
                >
                  Read More
                </a>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${adaim})` }}
          ></div>

          <Container>
            <Row className="justify-content-start">
              <Col xl={9} lg={12} className="text-left">
                <h2>
                  Agile Data Approaches And Innovation For Monitoring- ADAIM
                </h2>
                <p>A Project in collaboration with GDi</p>
                <a
                  href="/programs/adaim"
                  data-target=".donate-options"
                  className="scroll-to-target thm-btn dynamic-radius"
                >
                  Read More
                </a>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner2})` }}
          ></div>

          <Container>
            <Row className=" justify-content-start">
              <Col xl={9} lg={12} className="text-left">
                <h2>
                  Dr David Ameyaw <br /> President and CEO <br /> ICED
                </h2>
                <p>
                  Giving his introductory speech at the launch of the BMGF
                  Project
                </p>
                <a
                  href="/programs/iindwege/bmgf-funded-project"
                  data-target=".donate-options"
                  className="scroll-to-target thm-btn dynamic-radius"
                >
                  Read More
                </a>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner3})` }}
          ></div>

          <Container>
            <Row className="justify-content-start">
              <Col xl={9} lg={12} className="text-left">
                <h2>
                  Feed The Future Advancing Local Leadership, Innovation And
                  Networks - ALL-IN
                </h2>
                <p>
                  Advancing Local Leadership, Innovation  
                  and Networks
                </p>
                <a
                  href="/programs/all-in"
                  data-target=".donate-options"
                  className="scroll-to-target thm-btn dynamic-radius"
                >
                  Read More
                </a>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${banner4})` }}
          ></div>

          <Container>
            <Row className=" justify-content-start">
              <Col xl={9} lg={12} className="text-left">
                <h2>
                  Evaluating Recommended Reforms For Inclusive Transformation In
                  Agriculture - EVITA
                </h2>
                <p>
                  Evaluating Recommended Reforms For Inclusive Transformation In
                  Agriculture
                </p>
                <a
                  href="/projects/current-projects/evita"
                  data-target=".donate-options"
                  className="scroll-to-target thm-btn dynamic-radius"
                >
                  Read More
                </a>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        
        
        <div className="swiper-pagination" id="main-slider-pagination"></div>
      </Swiper>
    </section>
  );
};

export default MainSliderTwo;
