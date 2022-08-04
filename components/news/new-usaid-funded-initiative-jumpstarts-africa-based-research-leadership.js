import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogSidebar from "../blog-details/blog-sidebar";
import { usaidFundedImage } from "../../data/news-data";

const USAIDFunded = () => {
  return (
    <section className="blog-details pt-120 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <div>
              <div className="blog-card__image">
                <img src={usaidFundedImage} alt="" />
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
                New USAID-funded Initiative Jumpstarts Africa-based Research
                Leadership
              </h3>
              <p>
                A new USAID-funded initiative seeks to jumpstart Africa-based
                leadership in rigorous development research and policy
                evaluation.
              </p>

              <p>
                On May 12, 2020, the Feed the Future Innovation Lab for Markets,
                Risk & Resilience at UC Davis and the Kenya-based International
                Centre for Evaluation and Development (ICED) launched the
                five-year $6 million Advancing Local Leadership, Innovation and
                Networks (ALL-IN) initiative to mobilize and support research
                leadership in Africa to define and implement projects that build
                local solutions to major development challenges.
              </p>

              <p>
                “With the growing capacity in African universities and other
                institutions it’s time for more of our local partners to take
                the lead,” said Michael Carter, director of the MRR Innovation
                Lab. “We anticipate that doing so will enhance the relevance and
                long-term impacts of the research.”
              </p>

              <p style={{ fontWeight: "700" }}>
                Partnership to Build Local Research Leadership
              </p>

              <p>
                Feed the Future Innovation Labs are built on partnerships
                between researchers at U.S. universities and researchers at
                host-country universities and institutions. Historically, these
                partnerships have been led, both in program administration and
                the ideas that drive the research, from the U.S.{" "}
              </p>

              <p>
                ALL-IN shifts this leadership role to researchers in Africa who
                will define priorities and work with U.S. university research
                partners to supplement their own skills, talents, and ideas. In
                the same way that the MRR Innovation Lab and others select and
                administer U.S.-led projects, ALL-IN projects will be selected
                and administered by the ICED management team.
              </p>

              <p>
                “The ALL-IN partnership will place ICED in the position to
                promote an indigenous, culturally sensitive research program,”
                said David Ameyaw, founder, president, and CEO of ICED. “Our
                projects will be led by researchers who understand the context
                and culture on this continent and who are closely related to
                policymakers and understand the intricacies of policy.”
              </p>

              <p style={{ fontWeight: "700" }}>
                Generating Evidence and Policy Impact
              </p>

              <p>
                “ICED is an institution that shares our commitment to serious,
                rigorous evaluations,” said Carter. “It’s the perfect conduit to
                turn the typical US-led research model on its head.”
              </p>

              <p>
                Since it was established in 2017, ICED has been incredibly
                successful at drawing attention to the critical importance of
                evidence across Africa. At the 2019 Evidence to Action
                conference, Republic of Ghana Vice President Mahamudu Bawumia
                joined as headline speaker. At the conference in 2018, Kenya
                National Treasury & Planning Cabinet Secretary Henry Rotich
                announced that Kenya would establish an independent entity
                within the Government of Kenya and funded at roughly KSH 6
                billion (about USD 60 million) dedicated to monitoring and
                evaluation.
              </p>

              <p>
                Ameyaw, who previously held senior posts at the Alliance for a
                Green Revolution in Africa (AGRA) and the Millennium Challenge
                Corporation (MCC), established ICED with core support from the
                Feed the Future Innovation Lab for Assets and Market Access, the
                predecessor to the MRR Innovation Lab, and has partnered with a
                number of range of emerging African and international
                organizations on its work. These include the Government of
                Kenya, the Government of Ghana, the Institute of Statistical,
                Social and Economic Research (ISSER) and the University of
                Ghana, the Campbell Collaboration, the Tegemeo Institute of
                Agricultural Policy and Development, and the Agriculture
                Technology Adoption Initiative (ATAI) at UC Berkeley.
              </p>

              <p>
                The MRR Innovation Lab and ICED anticipate releasing the first
                ALL-IN call for proposals led by Africa-based researchers in
                late summer 2020 with projects to be funded in early 2021.{" "}
              </p>

              <p>
                “Where the whole world’s attention is on Africa, there is no
                opportunity for Africa to fail on development policies,” said
                Ameyaw. “The whole world’s attention is drawn to the Sustainable
                Development Goals and the Africa Agenda 2063, there is a need
                for Africa development policy based on sound evidence.”
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

export default USAIDFunded;
