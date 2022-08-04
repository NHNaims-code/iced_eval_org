import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import BlockTitle from "../block-title";
import BlogCard from "../blog/blog-card";

import ALL_IN_PROJECTS_DATA from "../../data/all-in-projects";

const AllInProjects = () => {
  const blogCarouselOptions = {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
  return (
    <section className="news-page news-home">
      <Container>
        <Row className="align-items-start align-items-md-center flex-column flex-md-row mb-60">
          <Col lg={4}>
            <BlockTitle title={`ALL-IN Projects`} tagLine="All In Projects" />
          </Col>
          <Col lg={8} className="d-flex">
            <div className="my-auto">
              <p className="block-text pr-10 mb-0">
              ALL-IN research projects further the mission of the MRR Innovation Lab to generate and transfer into action innovations that will bolster resilience, keeping rural individuals, households, communities and markets in positions of economic viability from which they can sustain and accelerate a path of inclusive agricultural growth. 
              </p>
            </div>
          </Col>
        </Row>
        <Swiper {...blogCarouselOptions}>
          {ALL_IN_PROJECTS_DATA.map(({ image, title, text, link }, index) => (
            <SwiperSlide key={index}>
              <BlogCard image={image} title={title} link={link} text={text} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default AllInProjects;
