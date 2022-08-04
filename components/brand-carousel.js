import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import PARTNER_DATA from "../data/partners-data";


const BrandCarousel = ({ extraClass }) => {
  const brandCarouselOptions = {
    spaceBetween: 100,
    slidesPerView: 5,
    autoplay: { delay: 5000 },
    breakpoints: {
      0: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      375: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      767: {
        spaceBetween: 50,
        slidesPerView: 4,
      },
      991: {
        spaceBetween: 50,
        slidesPerView: 4,
      },
      1199: {
        spaceBetween: 30,
        slidesPerView: 5,
      },
    },
  };

  const brandCarouselOptions2 = {
    spaceBetween: 100,
    slidesPerView: 5,
    autoplay: { delay: 5000 },
    breakpoints: {
      0: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      375: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      767: {
        spaceBetween: 50,
        slidesPerView: 2,
      },
      991: {
        spaceBetween: 50,
        slidesPerView: 2,
      },
      1199: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
    },
  };

  return (
    <div className={`client-carousel pt-80 pb-80 ${extraClass}`} id="our-partners">
      <Container>
        <h2>Our Partners</h2>
        <Swiper {...brandCarouselOptions}>
          <div className="swiper-wrapper">
            {PARTNER_DATA.map((partner, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={partner.image} alt="" />
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default BrandCarousel;
