import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogSidebar from "../blog-details/blog-sidebar";
import { claricePanyinImage } from "../../data/news-data";

const ClaricePanyinICED = () => {
  return (
    <section className="blog-details pt-120 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <div>
              <div className="blog-card__image">
                <img src={claricePanyinImage} alt="" />
                <div className="blog-card__date">20 May</div>
              </div>
              <div className="blog-card__meta d-flex justify-content-start mt-0 mb-0">
                <a href="#">
                  <i className="far fa-user-circle"></i> Admin
                </a>
                <a href="#">
                  <i className="far fa-comments"></i> 2 Comments
                </a>
              </div>
              <h3>Clarice Panyin Nyan Joins the ICED Team</h3>
              <p>
                ICED is delighted to welcome Ms. Clarice Panyin Nyan to our
                team! Clarice joined ICED in January 2022 as a Research
                Assistant.
              </p>

              <p>
                Clarice will work as a Research Assistant on the BMGF sponsored
                project on Infrastructure’s Impact on Nutritious Diets and
                Women’s Economic Empowerment which aims at improving
                understanding of the impacts and pathways connecting
                infrastructural development to diet and women’s empowerment.
              </p>

              <p>
                In addition to her work at ICED, Clarice is a Ph.D. student in
                Population Studies at the Regional Institute for Population
                Studies (RIRS), University of Ghana.{" "}
              </p>

              <p>
                Prior to working at ICED, Clarice worked at the Institute of
                Statistical, social, and Economic Research as a Research
                Assistant
              </p>

              <p>
                She has a bachelor’s degree in Statistics and Computer Science
                and an MPhil in Statistics from the University of Ghana.
              </p>
            </div>
          </Col>
          <Col md={12} lg={4}>
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ClaricePanyinICED;
