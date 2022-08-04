import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogSidebar from "../blog-details/blog-sidebar";
import { infrastructureImpactImage } from "../../data/news-data";

const InfrastructureImpactonDietandWomen = () => {
  return (
    <section className="blog-details pt-120 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <div>
              <div className="blog-card__image">
                <img src={infrastructureImpactImage} alt="" />
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
                Infrastructure’s Impact on Nutritious Diet and Women’s Economic
                Empowerment
              </h3>
              <p>
                Lack of infrastructure emerged as a major challenge for
                agricultural development in Asia and Sub-Saharan Africa. It
                poses a great risk to livelihoods and threatens food and
                nutrition security, depriving people of access to healthy,
                affordable food, and quality nutrition and care. Yet we know
                that infrastructure fosters inclusive growth and maximizes
                positive impacts such as improved well-being, sustainable
                development and can contribute to the empowerment of women and
                girls.
              </p>
              <p>
                When planned, delivered, and managed following a
                gender-inclusive and responsive approach, it can help to address
                gender-based barriers that impede access to services and
                reinforce structural inequities for women and girls at the
                household and market levels. Physical infrastructure such as
                roads, electricity, marketplace, and water supply systems play
                an important role in ensuring that low-income consumers have
                access to nutritious foods all year round. However, there is
                paucity of empirical evidence on the impact of infrastructure on
                improved diet and nutrition outcomes among low income consumers.
              </p>

              <p>
                A few studies conducted in Uganda, Nepal, Ethiopia, and Ecuador
                have shown associations between the provision of roads,
                electricity, health, and transport infrastructure with outcomes
                such as food security, child growth, and anthropocentric
                measures. However, as far as we are aware, no studies have
                looked at causal impacts of large-scale infrastructure programs
                on outcomes surrounding affordability and accessibility of safe
                and nutritious foods.
              </p>

              <p>
                It is in light of such evidence gaps that the International
                Center for Evaluation and Development (ICED), applied for and
                received a grant under the BMGF’s Nutritious Food Systems
                portfolio with the goal of identifying cost-effective, scalable,
                and inclusive ways to ensure the availability of safe,
                affordable and nutritious foods and diets year-round in
                sub-Saharan Africa that also contributes to women’s economic
                empowerment.
              </p>

              <div className="cause-details__presentations">
                <i className="fa fa-file-pdf"></i>
                <h3>Download Project Brochure</h3>
                <a href="#" className="thm-btn dynamic-radius">
                  Download
                </a>
              </div>

              
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

export default InfrastructureImpactonDietandWomen;
