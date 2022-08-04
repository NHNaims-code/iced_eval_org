import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import GalleryCard from "./gallery-card";
import galleryDot from "../../assets/images/shapes/gallery-dot-1-1.png";
import { PHOTO_GALLERY } from "../../data/gallery-images";
import welcomeImage from "../../assets/images/gallery/miscellaneous/ICED-Journey-and-Partners_Page_1.webp";

SwiperCore.use([Autoplay]);

const GalleryHomeTwo = () => {
  const sliderOptions = {
    spaceBetween: 100,
    slidesPerView: 4,
    autoplay: { delay: 5000 },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      425: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      767: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      991: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1199: {
        spaceBetween: 30,
        slidesPerView: 1,
      },
    },
  };
  return (
    <section className="gallery-home-two pt-120 pb-120">
      <Container>
        <h2>ICED at a glance</h2>
        <Row>
          <Col xl={6}>
            <div className="about-two__image">
              <img src={welcomeImage} alt="" width={586} />
            </div>
          </Col>
          <Col xl={6}>
            <Swiper {...sliderOptions}>
              {PHOTO_GALLERY.map((gallery, index) => {
                return (
                  <SwiperSlide key={index}>
                    <GalleryCard
                      image={gallery.image}
                      description={gallery.description}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GalleryHomeTwo;
