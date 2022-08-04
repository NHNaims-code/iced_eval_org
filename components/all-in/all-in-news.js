import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import BlockTitle from "../block-title";
import BlogCard from "../blog/blog-card";

import ALL_IN_NEWS_DATA from "../../data/all-in-news";

const AllInNews = () => {
  const blogCarouselOptions = {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  };
  return (
    <section className="news-page news-home pt-80 pb-120">
      <Container>
        <Row className="align-items-start align-items-md-center flex-column flex-md-row mb-60">
          <Col lg={4}>
            <BlockTitle
              title={`ALL-IN News`}
              tagLine="Latest News"
            />
          </Col>
          <Col lg={8} className="d-flex">
            <div className="my-auto">
              <p className="block-text pr-10 mb-0">
              ALL-IN is a USAID-funded collaborative research grant program between The Feed the Future Innovation Lab for Markets, Risk & Resilience (MRR) and the International Centre for Evaluation and Development (ICED). Over its five-year funding cycle, ALL-IN is supporting 12 projects with a maximum award amount of $450,000. 
              </p>
            </div>
          </Col>
        </Row>
        <Swiper {...blogCarouselOptions}>
          {ALL_IN_NEWS_DATA.map(
            (
              { image, title,date, link },
              index
            ) => (
              <SwiperSlide key={index}>
                <BlogCard
                  image={image}
                  title={title}
                  date={date}
                  link={link}  
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Container>
    </section>
  );
};

export default AllInNews;
