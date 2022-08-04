import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";
import banner1 from "../../assets/images/bmgf/image1.webp";
import banner2 from "../../assets/images/bmgf/image2.webp";
import banner3 from "../../assets/images/bmgf/image3.webp";
import banner4 from "../../assets/images/bmgf/image4.webp";
import banner5 from "../../assets/images/bmgf/image5.webp";
import banner6 from "../../assets/images/bmgf/image6.webp";
import banner7 from "../../assets/images/bmgf/image7.webp";
import banner8 from "../../assets/images/bmgf/image8.webp";

import Link from "next/link";
import PageShare from "../page-share";

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const BMGFFundedProject = () => {
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
      delay: 2000,
    },
  };

  return (
    <section className="blog-details pt-120 pb-40 gradient-background-1">
      <Container>
        <Row>
          <Col md={12}>
            <div>
              <section className="main-slider main-slider__two">
                <Swiper {...mainSlideOptions}>
                  <SwiperSlide>
                    <div
                      className="image-layer"
                      style={{ backgroundImage: `url(${banner1})` }}
                    ></div>
                    <Container>
                      <Row className=" justify-content-start">
                        <Col xl={6} lg={12} className="text-left"></Col>
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
                        <Col xl={6} lg={12} className="text-left"></Col>
                      </Row>
                    </Container>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="image-layer"
                      style={{ backgroundImage: `url(${banner3})` }}
                    ></div>
                    <Container>
                      <Row className=" justify-content-start">
                        <Col xl={6} lg={12} className="text-left"></Col>
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
                        <Col xl={6} lg={12} className="text-left"></Col>
                      </Row>
                    </Container>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="image-layer"
                      style={{ backgroundImage: `url(${banner5})` }}
                    ></div>
                    <Container>
                      <Row className=" justify-content-start">
                        <Col xl={6} lg={12} className="text-left"></Col>
                      </Row>
                    </Container>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="image-layer"
                      style={{ backgroundImage: `url(${banner6})` }}
                    ></div>
                    <Container>
                      <Row className=" justify-content-start">
                        <Col xl={6} lg={12} className="text-left"></Col>
                      </Row>
                    </Container>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="image-layer"
                      style={{ backgroundImage: `url(${banner7})` }}
                    ></div>
                    <Container>
                      <Row className=" justify-content-start">
                        <Col xl={6} lg={12} className="text-left"></Col>
                      </Row>
                    </Container>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="image-layer"
                      style={{ backgroundImage: `url(${banner8})` }}
                    ></div>
                    <Container>
                      <Row className=" justify-content-start">
                        <Col xl={6} lg={12} className="text-left"></Col>
                      </Row>
                    </Container>
                  </SwiperSlide>

                  {/* <div
                    className="swiper-pagination"
                    id="main-slider-pagination"
                  ></div> */}
                </Swiper>
              </section>
              <h3 className="mt-5">
                Infrastructure’s Impact on Nutritious Diet and Women’s Economic
                Empowerment
              </h3>
              <p>
                Lack of infrastructure emerged as a major challenge for
                agricultural development in Asia and Sub-Saharan Africa. It
                poses a great risk to livelihoods and threatens food and
                nutrition security, depriving people of access to healthy,
                affordable food, and quality nutrition and care. Yet we know
                that infrastructure fosters inclusive growth and maximizes
                positive impacts such as improved well-being, sustainable
                development and can contribute to the empowerment of women and
                girls.
              </p>
              <p>
                When planned, delivered, and managed following a
                gender-inclusive and responsive approach, it can help to address
                gender-based barriers that impede access to services and
                reinforce structural inequities for women and girls at the
                household and market levels. Physical infrastructure such as
                roads, electricity, marketplace, and water supply systems play
                an important role in ensuring that low-income consumers have
                access to nutritious foods all year round. However, there is
                paucity of empirical evidence on the impact of infrastructure on
                improved diet and nutrition outcomes among low income consumers.
              </p>

              <p>
                A few studies conducted in Uganda, Nepal, Ethiopia, and Ecuador
                have shown associations between the provision of roads,
                electricity, health, and transport infrastructure with outcomes
                such as food security, child growth, and anthropocentric
                measures. However, as far as we are aware, no studies have
                looked at causal impacts of large-scale infrastructure programs
                on outcomes surrounding affordability and accessibility of safe
                and nutritious foods.
              </p>

              <p>
                It is in light of such evidence gaps that the International
                Center for Evaluation and Development (ICED), applied for and
                received a grant under the BMGF’s Nutritious Food Systems
                portfolio with the goal of identifying cost-effective, scalable,
                and inclusive ways to ensure the availability of safe,
                affordable and nutritious foods and diets year-round in
                sub-Saharan Africa that also contributes to women’s economic
                empowerment.
              </p>
              <div className="cause-details__presentations mt-80 mb-80">
                <i className="fa fa-file-pdf"></i>
                <h3>Project Brochure</h3>
                <a
                  href="https://drive.google.com/file/d/1ucynEpVHkGvVHM3o1JYzzx1Rn72KKnYU/view?usp=sharing"
                  target="_blank"
                  className="thm-btn dynamic-radius"
                >
                  Download
                </a>
              </div>

              <div style={{textAlign:"center"}}>
              <h4>ICED BMGF INFRASTRUCTURES IMPACT ON NUTRITIOUS DIETS AND WOMEN'S ECONOMIC EMPOWERMENT PROJECT LAUNCH</h4>
              <p className="pb-80">
              <iframe width="885" height="498" src="https://www.youtube.com/embed/wrjkZuiMkYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

export default BMGFFundedProject;
