import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Container, Row, Col } from "react-bootstrap";
import videoBg from "../../assets/images/shapes/video-bg-1-1.png";
import videoImage from "../../assets/images/backgrounds/slide-5.webp";
import allinImage from "../../assets/images/backgrounds/All-in.webp";
import Link from "next/link";

const VideoCardTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="video-card-two pt-120 pb-120">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
       <Container>
        <div
          className="inner-container"
          style={{ backgroundImage: `url(${videoBg})` }}
        >
          <Row className="align-items-center">
            <Col lg={3}>
              <div className="video-card-two__box">
                <img src={videoImage} alt="" width={250} />
              </div>
            </Col>
            <Col lg={4}>
              <h3>Evidence to Action Conference</h3>
            </Col>
            <Col lg={5}>
              <p>
                "Adapting and Innovating evaluation practice for Evidence
                based decision making within and beyond COVID-19", Evidence to Action
                Conference Kampala 26th - 29th September 2022 
              </p>
              
              <Link href="/pdfs/E2A_2022_CONCEPT_NOTE_Final.pdf">
                  <a className="thm-btn dynamic-radius">Concept Note</a>
              </Link>
                          
              <Link href="/pdfs/E2A_2022_CALL_FOR_ABSTRACTS.pdf">
                  <a className="thm-btn dynamic-radius">Call for Abstracts</a>
              </Link>
              
            </Col>
          </Row>
        </div>
      </Container>
     <p>  </p>
      {/* <Container>
        <div
          className="inner-container"
          style={{ backgroundImage: `url(${videoBg})` }}
        >
          <Row className="align-items-center">
            <Col lg={3}>
              <div className="video-card-two__box">
                <img src={allinImage} alt="" width={250} />
              </div>
            </Col>
            <Col lg={4}>
              <h3>All In Research Network Launch</h3>
            </Col>
            <Col lg={5}>
              <p>
                "The ALL-IN Research Network (ARN) is a collaborative initiative 
                between MRR-UC Davis and ICED to support the African economic research community,
                 to fully engage and to take the lead in defining research priorities that build pathways to local policy impacts.
              </p>
              
              <Link href="/pdfs/ARN_Virtual_Launch.pdf">
                  <a className="thm-btn dynamic-radius">Agenda</a>
              </Link>
                          
              <Link href="https://us02web.zoom.us/webinar/register/WN__4CQKgr7QtuKpBlt021hTA">
                  <a className="thm-btn dynamic-radius">Registration</a>
              </Link>
              
            </Col>
          </Row>
        </div>
      </Container> */}
    </section>
  );
};

export default VideoCardTwo;
