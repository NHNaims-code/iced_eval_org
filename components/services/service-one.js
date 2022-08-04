import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import serviceBg from "../../assets/images/backgrounds/service-hand-bg-1-1.png";
import serviceLine from "../../assets/images/shapes/service-line-1-1.png";

const serviceOneData = [
  {
    icon: "azino-icon-reading-book",
    extraClassName: "background-secondary",
    title: "Research and Innovation",
    text: "",
    link: "/works/research-and-innovation-in-evaluations",
  },
  {
    icon: "azino-icon-magnifying-glass",
    title: "Monitoring and Evaluation",
    extraClassName: "background-base",
    text: "",
    link: "/works/monitoring-and-evaluation-and-adaptive-management",
  },
  {
    icon: "azino-icon-charity",
    title: "Policy Engagement",
    text: "",
    link: "/works/knowledge-management-and-policy-engagement",
    extraClassName: "background-primary",
  },
  {
    icon: "azino-icon-support",
    title: "Capacity Development",
    extraClassName: "background-special",
    text: "",
    link: "/works/capacity-strengthening-and-professional-development",
  },
];

const ServiceOne = () => {
  return (
    <section
      className="service-one pt-80 pb-90"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <Container>
        <img src={serviceLine} alt="" className="service-one__shape-1" />
        <div className="block-title">
          <Link href="/works/research-and-innovation-in-evaluations">
            <h3 style={{cursor:"pointer"}}>Pillars of our Work</h3>
          </Link>
        </div>
        <Row>
          {serviceOneData.map(
            ({ icon, title, text, link, extraClassName }, index) => (
              <Col md={6} lg={3} key={`service-one-key-${index}`}>
                <div className={`service-one__box`}>
                  <div className={`service-one__icon ${extraClassName}`}>
                    <div className="service-one__icon-inner">
                      <i className={icon}></i>
                    </div>
                  </div>
                  <h3>
                    <Link href={link}>
                      <a>{title}</a>
                    </Link>
                  </h3>
                  <p>{text}</p>
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceOne;
