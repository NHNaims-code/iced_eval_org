import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogSidebar from "../blog-details/blog-sidebar";
import { solomonImage } from "../../data/news-data";

const SolomonZenaICED = () => {
  return (
    <section className="blog-details pt-120 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <div>
              <div className="blog-card__image">
                <img src={solomonImage} alt="" />
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
              <h3>Solomon Zena Walelign Joins the ICED Team</h3>
              <p>
                ICED is pleased to welcome Dr. Solomon Zena Walelign to the
                team. Solomon will work as the Project Director on the BMGF
                sponsored project on Infrastructure’s Impact on Nutritious Diets
                and Women’s Economic Empowerment and Gender Equality which aims
                at improving understanding of the impacts and pathways
                connecting infrastructural development to diet, and women’s
                empowerment.
              </p>
              <p>
                Solomon Zena Walelign completed a double Ph.D. in Environmental
                and Resource Economics at the University of Copenhagen and in
                Forest Sciences at the Georg-August University of Göttingen. He
                holds part-time positions as a Postdoctoral Fellow at the
                Norwegian University of Science and Technology, as a Consultant
                at the World Bank.
              </p>
              <p>
                He is also an Adjunct Assistant Professor at the University of
                Gondar. Previously, he was a Visiting Scholar at the University
                of California Berkeley and the University of South Carolina, a
                Postdoctoral Fellow at the University of Copenhagen, and an
                Assistant Lecturer at the University of Gondar.
              </p>
              <p>
                Solomon’s main research focus includes livelihoods, poverty,
                largescale land transaction, gender empowerment, and climate
                change resettlement. He conducted fieldwork in Nepal, Ethiopia,
                Kenya, and Tanzania.”
              </p>
              <p>He currently lives in Accra, Ghana with his family.</p>
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

export default SolomonZenaICED;
