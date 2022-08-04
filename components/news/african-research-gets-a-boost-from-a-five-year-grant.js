import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { fiveYearGrantImage } from "../../data/news-data";
import BlogSidebar from "../blog-details/blog-sidebar";

const AfricanResearch = () => {
  return (
    <section className="blog-details pt-120 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <div>
              <div className="blog-card__image">
                <img src={fiveYearGrantImage} alt="" />
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
              <h3>African Research gets a Boost from a Five-Year Grant</h3>
              <p>
                The International Centre for Evaluation and Development (ICED)
                has secured a five-year research grant from the Feed the Future
                Innovation Lab for Markets, Risk and Resilience (MRR Innovation
                Lab){" "}
              </p>

              <p>
                ICED will lead the implementation of MRR Innovation Lab’s
                Advancing Local Leadership, Innovation and Networks (ALL-IN) in
                Africa.
              </p>

              <p>
                The research will develop and test financial and market
                innovations that take the most promising agricultural tools for
                families in developing economies from the lab to the field.
              </p>

              <p>
                ALL IN is designed to address capacity gaps among many research
                institutions in managing large and complex awards (particularly
                the unique complexities of managing the United States Agency for
                International Development awards).
              </p>

              <p>
                “With the growing capacity in African universities and other
                institutions it is time for more of our local partners to take
                the lead,” said Michael Carter, director of the MRR Innovation
                Lab. “We anticipate that doing so will enhance the relevance and
                long-term impacts of the research.”
              </p>

              <p>
                Over the years, Feed the Future Innovation Labs have been built
                on partnerships between researchers at U.S. universities and
                researchers at host-country universities and institutions.
                Historically, these partnerships have been led, in both program
                administration and the ideas that drive the research, from the
                U.S. ALL IN will seek to shift this leadership role to
                researchers in Africa.
              </p>

              <p>
                ICED President and CEO, Dr. David Sarfo Ameyaw remarked: “The
                partnership will place ICED in the position to promote an
                indigenous, culturally sensitive research program. Our projects
                will be led by researchers who understand the context and
                culture on this continent and who are closely related to
                policymakers and understand the intricacies of policy.” Under
                ALL IN, nearly $6 million will be made available for African-led
                research activities in the focus areas of research.
              </p>

              <p>
                Ameyaw added: “Where the whole world’s attention is on Africa,
                there is no opportunity for Africa to fail on development
                policies. The whole world’s attention is drawn to the
                Sustainable Development Goals and the Africa Agenda 2063, there
                is a need to anchor Africa development policy on sound
                evidence.”
              </p>

              <p>
                ICED currently has Memoranda of Understanding (MoU) with
                research institutions in Africa such as USIU-Africa in Nairobi,
                The University of Nairobi, Sokoine University of Agriculture,
                Morogoro, Tanzania, Makerere University, and The Campbell
                Collaboration.
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

export default AfricanResearch;
