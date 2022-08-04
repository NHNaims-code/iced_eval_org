import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogSidebar from "../blog-details/blog-sidebar";
import { icedBoardChairImage } from "../../data/news-data";

const IcedBordChair = () => {
  return (
    <section className="blog-details pt-120 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <div>
              <div className="blog-card__image">
                <img src={icedBoardChairImage} alt="" />
                <div className="blog-card__date">4 Aug</div>
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
                ICED Board Chair, Dr. Namanga Ngongi, appointed Co-Convener CGIAR System Board High-Level Advisory Panel
              </h3>
              
              <p>
                The Chairman of the Board of Directors of the International Centre for Evaluation and Development (ICED), Dr. Namanga Ngongi has been appointed Co-Convener of the CGIAR System Board High-Level Advisory Panel. CGIAR (Consultative Group on International Agricultural Research) is a global partnership that unites organizations engaged in research for a food secure future.
              </p>

              <p>
                The CGIAR’s System Board independent external high-level Advisory Panel is to guide leadership and staff in strengthening their strategic engagement with countries and regional partners as CGIAR continues its transition to an integrated One CGIAR.
              </p>

              <p>
                The Panel will advise on fostering ownership of reforms and mechanisms for joint learning and engagement with governments, regional organizations, farmer groups, the private sector, and community organizations across the regions in which CGIAR works, and review CGIAR’s Engagement Framework for Partnerships & Advocacy - Toward Greater Impact.
              </p>
              
              <p>
                The Panel brings together respected leaders from the fields of government, academia and civil society, representing deep and diverse experience in agricultural science and innovation in the global South. It is constituted of two Co-Conveners and initially ten additional members who are eminent leaders in the global South or the Executive Secretary of a regional or global representative forum. It will convene for up to six months to advise the CGIAR System Board and oversee the leadership team’s roll-out of consultations across Africa, Asia, and Latin America and the Caribbean.
              </p>

              <p>
                The ICED Board Chair is currently a member of the African Economic Research Consortium, Chair of the Seed Systems Group (SSG) and former Chair of the International Institute of Tropical Agriculture’s Board. He was President of the Alliance for a Green Revolution in Africa (AGRA) from 2007 to 2012 and involved in the One CGIAR reform process as a member of the CGIAR System Management Board.
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

export default IcedBordChair;
