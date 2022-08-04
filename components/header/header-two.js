import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import NavLinks from "./nav-links";
import { MenuContext } from "../../context/menu-context";

import logoDark from "../../assets/images/logo-full2.webp";
import logoSymbol from "../../assets/images/logo-full2.webp";
import allInLogo from "../../assets/images/All-In-Logo.webp";

const HeaderTwo = () => {
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);

  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  return (
    <div className="main-header__two">
      <div className="main-header__top">
        <Container>
          <p></p>
          <div className="main-header__social">
            <a href="https://twitter.com/ICED_THINKTANK" target="_blank" aria-label="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/ICED.THINKTANK" aria-label="facebook" target="_blank">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.linkedin.com/company/international-centre-for-evaluation-and-development-iced-/" target="_blank"  aria-label="linkedin">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </Container>
      </div>
      <div className="header-upper">
        <Container>
          <div className="logo-box">
            <Link href="/">
              <a aria-label="logo image">
                <img src={logoDark} width="340" alt="" className="d-none d-sm-none d-lg-block"/>
                <img src={logoSymbol} width="230" alt="" className="d-sm-block d-lg-none"/>
              </a>
            </Link>
            <span
              className="fa fa-bars mobile-nav__toggler"
              onClick={handleMenuClick}
            ></span>
          </div>
          <div className="logo-box">
            <Link href="https://www.allinresearchnetwork.com">
              <a target="_blank"  aria-label="logo image">
                <img src={allInLogo} width="200" alt="" className="d-none d-sm-none d-lg-block"/>
                <img src={allInLogo} width="200" alt="" className="d-sm-block d-lg-none"/>
              </a>
            </Link>
            <span
              className="fa fa-bars mobile-nav__toggler"
              onClick={handleMenuClick}
            ></span>
          </div>

          <div className="header-info">
            <div className="header-info__box">
              <i className="azino-icon-email1"></i>
              <div className="header-info__box-content">
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@iced-eval.org">info@iced-eval.org</a>
                </p>
              </div>
            </div>
            <div className="header-info__box">
              <i className="azino-icon-calling"></i>
              <div className="header-info__box-content">
                <h3>Phone</h3>
                <p>
                  <a href="tel:+13016483417">U.S.A : +1 301 648 341 7</a>
                </p>
                <p>
                  <a href="tel:+254737486818">Kenya : +254 737486818</a>
                </p>
                <p>
                  <a href="tel:+233303415161">Ghana : +233 303415161</a>
                </p>
              </div>
            </div>
            {/* <div className="header-info__box">
              <i className="azino-icon-address"></i>
              <div className="header-info__box-content">
                <h3>Visit</h3>
                <p>P.O. BOX SK 878, Premier Towers, <br/> Sakumono Broadway,Tema- Accra, Ghana</p>
              </div>
            </div> */}
          </div>
        </Container>
      </div>
      <nav className="main-menu">
        <Container>
          <NavLinks extraClassName="dynamic-radius" />
          <Link href="/contact">
            <a className="thm-btn dynamic-radius">Contact Us</a>
          </Link>
        </Container>
      </nav>
    </div>
  );
};

export default HeaderTwo;
