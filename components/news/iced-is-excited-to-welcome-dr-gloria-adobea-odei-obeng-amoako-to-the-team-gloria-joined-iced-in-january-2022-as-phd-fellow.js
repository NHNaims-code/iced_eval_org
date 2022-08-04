import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogSidebar from "../blog-details/blog-sidebar";
import { gloriaAdobeaImage } from "../../data/news-data";

const GloriaAdobeaICED = () => {
  return (
    <section className="blog-details pt-120 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <div>
              <div className="blog-card__image">
                <img src={gloriaAdobeaImage} alt="" />
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
              <h3>
                ICED is excited to welcome Dr. Gloria Adobea Odei Obeng-Amoako
                to the team! Gloria Joined ICED in January 2022 as P.hD Fellow.
              </h3>
              <p>
                Gloria will work as a Postdoc Fellow on the BMGF sponsored
                project on Infrastructure’s Impact on Nutritious Diets and
                Women’s Economic Empowerment and Gender Equality which aims at
                improving understanding on the impacts and pathways connecting
                infrastructural development to diet and women’s empowerment.
              </p>

              <p>
                Gloria has over 15 years’ specialist skills in providing
                technical support, coordination, managing, implementing,
                monitoring and evaluation, knowledge transfer and management of
                nutrition and public health programs in multi-cultural
                environment both at the national, international levels and in
                academia.
              </p>

              <p>
                She holds PhD Health Sciences (Makerere University), M.Phil.
                International Community Health (University of Oslo), B.Sc.
                Nutrition and Food Science (University of Ghana) and Certificate
                in Health in Emergency in Large Population (HELP) programming
                (Johns Hopkins University School of Public Health Bloomberg)
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

export default GloriaAdobeaICED;
