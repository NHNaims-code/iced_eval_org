import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import logoLight from "../assets/images/logo-full2.webp";
import blogPost1 from "../assets/images/resources/footer-img-1-1.jpg";
import blogPost2 from "../assets/images/resources/footer-img-1-2.jpg";

const Footer = () => {
  return (
    <section className="site-footer">
      <div className="main-footer pt-142 pb-80">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__about">
                <Link href="/">
                  <a aria-label="logo image">
                    <img
                      src={logoLight}
                      className="footer-widget__logo rounded"
                      width="250"
                      alt=""
                    />
                  </a>
                </Link>
                <p>
                  ICED is an international and independent think-tank,
                  specializing in innovation and research in Monitoring and
                  Evaluation for development.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">Accra Office</h3>
                <ul className="list-unstyled footer-widget__link-list">
                  <li>
                    <Link href="https://goo.gl/maps/GcBJkhqPU3LiLgUp9">
                      <a target="_blank">
                        P.O BOX SK 878 Premier Towers, Sakumono Broadway,
                        Accra, Ghana
                      </a>
                    </Link>
                  </li>
                </ul>
                <ul className="list-unstyled footer-widget__contact">
                  <li>
                    <a href="#">
                      <i className="azino-icon-telephone"></i>+233 303415161
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="azino-icon-email"></i>info@iced-eval.org
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">Nairobi Head Office</h3>
                <ul className="list-unstyled footer-widget__link-list">
                  <li>
                    <Link href="https://goo.gl/maps/C9tjSofGV5UHNwtV6">
                      <a target="_blank">P.O. Box 1838 Sarit Centre 00606 Nairobi, Kenya</a>
                    </Link>
                  </li>
                </ul>
                <ul className="list-unstyled footer-widget__contact">
                  <li>
                    <a href="#">
                      <i className="azino-icon-telephone"></i>+254 737486818
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="azino-icon-email"></i>info@iced-eval.org
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">United States Office</h3>
                <ul className="list-unstyled footer-widget__link-list">
                  <li>
                    <Link href="https://goo.gl/maps/jNda2aYn9LQS3zFM9">
                      <a target="_blank">9524 Jeanne CT Laurel, MD 20723, USA</a>
                    </Link>
                  </li>
                </ul>
                <ul className="list-unstyled footer-widget__contact">
                  <li>
                    <a href="#">
                      <i className="azino-icon-telephone"></i>+1 301 648 3417 
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="azino-icon-email"></i>info@iced-eval.org
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <ScrollLink
            to="wrapper"
            smooth={true}
            duration={500}
            className="scroll-to-top"
          >
            <i className="far fa-angle-up"></i>
          </ScrollLink>
          <p>
            © Copyright 2022, All Rights Reserved | International Center for
            Evaluation and Development
          </p>
          <div className="footer-social">
            <a href="https://twitter.com/ICED_THINKTANK" target="_blank" aria-label="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/ICED.THINKTANK" target="_blank" aria-label="facebook">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.linkedin.com/company/international-centre-for-evaluation-and-development-iced-/" target="_blank" aria-label="linkedin">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
