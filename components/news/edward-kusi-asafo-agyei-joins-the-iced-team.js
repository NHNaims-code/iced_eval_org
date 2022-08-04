import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import BlogSidebar from '../blog-details/blog-sidebar';
import { edwardImage } from '../../data/news-data';
const EdwardKusiICED = () => {
  return (
    <section className="blog-details pt-120 pb-40">
            <Container>
              <Row>
                <Col md={12} lg={8}>
                  <div>
                    <div className="blog-card__image">
                      <img src={edwardImage} alt="" />
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
                    <h3>Edward Kusi Asafo-Agyei Joins the ICED Team</h3>
                    <p>
                    Edward Kusi Asafo-Agyei will work with the International Centre for Evaluation and Development (ICED) as a Research Assistant for the Infrastructure’s Impact on Nutritious Diet, Women Empowerment and Gender Equality (IINDWEGE) project sponsored by Bill and Melinda Gates Foundation (BMGF)
                    </p>
                    <p>
                    Prior to joining ICED, He was the Monitoring and Evaluation Officer at the International Institute of Tropical Agriculture (IITA) and the Monitoring and Evaluation/ Management Information Systems Officer.
                    </p>
                    <p>
                    Edward is an enthusiastic Agricultural Economist with over 10 years of practical experience in Monitoring and Evaluation (M&E) and is eager to contribute to the team’s success through hard work, attention to detail, and excellent organizational skills. He possesses a clear understanding of project management, research, and development of data collection tools for performance measurement of project activities and training in qualitative and quantitative data management skills. He is motivated to learn, grow, and excel in the Development and Project Management field.
                    </p>
                    <p>
                    He holds a master’s degree in Monitoring and Evaluation, from the Christian Service University College, and another in Agricultural Economics from the Kwame Nkrumah University of Science and Technology, (KNUST) Kumasi.  He also holds a BSc in Agriculture also from KNUST.
                    </p>
                    <p>
                    He currently lives in Accra, Ghana with his family. When he is not keeping busy with Research and Studies, you can find him singing.
                    </p>
                  </div>
                </Col>
                <Col md={12} lg={4}>
                  <BlogSidebar />
                </Col>
              </Row>
            </Container>
          </section>
  )
}

export default EdwardKusiICED