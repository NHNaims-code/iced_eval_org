import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import NavLinks from "./nav-links";

import { MenuContext } from "../../context/menu-context";

import logoSmall from "../../assets/images/logo-symbol-med.webp";

const HeaderOne = () => {
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);

  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  return (
    <header className="main-header">
      <Container>
        <div className="inner-container">
          <Row>
            <Col sm={12} md={12} lg={12} xl={2}>
              <div className="logo-box">
                <Link href="/">
                  <a aria-label="logo image">
                    <img src={logoSmall} width="80" alt="" />
                  </a>
                </Link>
                <span
                  className="fa fa-bars mobile-nav__toggler"
                  onClick={handleMenuClick}
                ></span>
              </div>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={12}
              xl={10}
              className="d-none d-md-none d-lg-none d-xl-block"
            >
              <div className="main-header__top">
                <p></p>
                <div className="main-header__social">
                  <a href="https://twitter.com/ICED_THINKTANK" target="_blank" aria-label="twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com/ICED.THINKTANK" aria-label="facebook">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/international-centre-for-evaluation-and-development-iced-/" target="_blank" aria-label="linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <nav className="main-menu dynamic-radius">
                <NavLinks />
              </nav>

              <div className="main-header__info">
                <ul className="list-unstyled main-header__info-list">
                  <li>
                    <i className="azino-icon-email"></i>
                    <a href="mailto:info@iced-eval.org">info@iced-eval.org</a>
                  </li>
                  <li className="contact-nos">
                    <i className="azino-icon-telephone"></i>
                    <a href="tel:+13016483417"><span className="inline-bold">U.S.A</span> : +1 301 648 341 7</a>
                    <a href="tel:+254737486818"><span className="inline-bold">Kenya</span> : +254 737486818</a>
                    <a href="tel:+233303415161"><span className="inline-bold">Ghana</span> : +233 303415161</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </header>
  );
};

export default HeaderOne;
