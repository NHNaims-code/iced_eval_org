import React from "react";
import GalleryCard from "./gallery-card";

import GalleryHome from "./gallery-home";
import { Container, Row } from "react-bootstrap";
import {
  PHOTO_GALLERY,
  PHOTO_GALLERY_2017,
  PHOTO_GALLERY_2018,
  PHOTO_GALLERY_2019,
} from "../../data/gallery-images";
import { BMGF_GALLERY } from "../../data/gallery-images";

const GalleryPage = () => {
  return (
    <div className="gradient-background-2">
      <Container className="pt-120">
        <Row>
          <h2 className="heading-title-gallery">Photo Gallery - 2017</h2>
        </Row>
      </Container>
      <section className="gallery-page pt-120 pb-120">
        <div className="container">
          <div className="gallery-3-col">
            {PHOTO_GALLERY_2017.map((gallery, index) => {
              return (
                <GalleryCard
                  key={index}
                  image={gallery.image}
                  description={gallery.description}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Container>
        <Row>
          <h2 className="heading-title-gallery">Photo Gallery - 2018</h2>
        </Row>
      </Container>
      <section className="gallery-page pt-120 pb-120">
        <div className="container">
          <div className="gallery-3-col">
            {PHOTO_GALLERY_2018.map((gallery, index) => {
              return (
                <GalleryCard
                  key={index}
                  image={gallery.image}
                  description={gallery.description}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Container>
        <Row>
          <h2 className="heading-title-gallery">Photo Gallery - 2019</h2>
        </Row>
      </Container>
      <section className="gallery-page pt-120 pb-120">
        <div className="container">
          <div className="gallery-3-col">
            {PHOTO_GALLERY_2019.map((gallery, index) => {
              return (
                <GalleryCard
                  key={index}
                  image={gallery.image}
                  description={gallery.description}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Container>
        <Row>
          <h2 className="heading-title-gallery">BMGF Launch Images</h2>
        </Row>
      </Container>
      <section className="gallery-page pt-120 pb-120">
        <div className="container">
          <div className="gallery-3-col">
            {BMGF_GALLERY.map((gallery, index) => {
              return (
                <GalleryCard
                  key={index}
                  image={gallery.image}
                  description={gallery.description}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Container>
        <Row>
          <h2 className="heading-title-gallery">Miscellaneous Images</h2>
        </Row>
      </Container>
      <section className="gallery-page pt-120 pb-120">
        <div className="container">
          <div className="gallery-3-col">
            {PHOTO_GALLERY.map((gallery, index) => {
              return (
                <GalleryCard
                  key={index}
                  image={gallery.image}
                  description={gallery.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
