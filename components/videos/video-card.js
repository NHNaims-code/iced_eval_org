import React, { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { Container } from "react-bootstrap";
import bgImage from "../../assets/images/backgrounds/slide-4.webp";
import heart from "../../assets/images/shapes/heart-2-1.png";
import { getLatestProject } from "../../data/publication-data";

const VideoCard = () => {
const project = getLatestProject();

  const [isOpen, setOpen] = useState(false);
  return (
    <section className="video-card">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
      <div
        className="video-card__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <Container className=" text-center pt-120 pb-120">
        <p>
          Our Project Launch 2022
        </p>
        <h3>
          {project.title}
        </h3>
        <h4 style={{color:"white"}}>{project.text}</h4>
        <div className="video-card__btn-block">
          <Link href={project.link}>
            <a className="thm-btn dynamic-radius">Read More</a>
          </Link>
          <span
            onClick={() => setOpen(true)}
            className="video-popup video-card__btn"
          >
            <i className="fa fa-play"></i>
          </span>
        </div>
      </Container>
    </section>
  );
};

export default VideoCard;
