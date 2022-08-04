import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockTitle from "../block-title";
import BlogCard from "./blog-card";

import bgImage from "../../assets/images/backgrounds/slide-2.webp";

import BLOG_DATA from "../../data/news-data";

const BlogHomeTwo = () => {
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
    <>
      <section
        className="news__top news-home  pt-120"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Container>
          <Row className="align-items-start align-items-md-center flex-column flex-md-row">
            <Col lg={7}>
              <BlockTitle
                title={`News`}
                tagLine="Our Stories"
              />
            </Col>
            <Col lg={5} className="d-flex">
              <div className="my-auto">
                <p className="block-text pr-10 mb-0">
                ICED is an international and independent think-tank, specializing in innovation and research in Monitoring and Evaluation for development.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="news-page pb-120">
        <Container>
          <Swiper {...blogCarouselOptions}>
            {BLOG_DATA.map(
              (
                { image, title, date, text, link, commentCount, author },
                index
              ) => (
                <SwiperSlide key={index}>
                  <BlogCard
                    image={image}
                    title={title}
                    date={date}
                    text={text}
                    link={link}
                    commentCount={commentCount}
                    author={author}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </Container>
      </section>
    </>
  );
};

export default BlogHomeTwo;
