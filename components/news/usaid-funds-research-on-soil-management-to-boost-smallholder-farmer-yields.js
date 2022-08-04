import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogSidebar from "../blog-details/blog-sidebar";
import { usaidSoilResearchImage } from "../../data/news-data";

const USAIDSoilManagement = () => {
  return (
    <section className="blog-details pt-120 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <div>
              <div className="blog-card__image">
                <img src={usaidSoilResearchImage} alt="" />
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
                USAID Funds Research on Soil Management to Boost Smallholder
                Farmer Yields
              </h3>
              <p>
                August 29, 2021—High soil acidity contributes to low and
                stagnant agricultural productivity. This is particularly true
                for maize, which is the country’s main staple crop.
              </p>

              <p>
                The Feed the Future Advancing Local Leadership, Innovation and
                Networks (ALL-IN) program, supported by United States Agency for
                International Development (USAID), has launched a new project
                led by the Tegemeo Institute of Agricultural Policy &
                Development at Egerton University in Nairobi, Kenya to build
                evidence on practical ways to encourage farmers to update their
                knowledge about the condition of their soils and encourage them
                to apply appropriate soil management practices. Few small-scale
                farmers test their soils to make soil management decisions.
              </p>

              <p>
                “The project will support efforts by the government, development
                agencies, and private sector investors in promoting and
                facilitating proper soil management among farmers for
                sustainable agricultural productivity growth,” said lead
                principal investigator Dr. John Olwande, a research fellow at
                Tegemeo Institute of Agricultural Policy & Development, Egerton
                University.
              </p>

              <p>
                This project takes place in villages across four counties that
                are among the most important for maize production areas in
                Kenya: Bungoma, Kakamega, Trans Nzoia, and Uasin Gishu. These
                counties are among those in which the government conducted soil
                tests in 2014 and found that the soils were highly acidic.
              </p>

              <p>
                “Agriculture is critical across Sub-Saharan Africa considering
                the challenge of feeding and employing a rapidly growing
                population in the coming years,” said Dr. David Sarfo Ameyaw,
                president and CEO of the International Centre for Evaluation and
                Development (ICED) and co-director of Feed the Future ALL-IN.
                “This project is a game-changer in terms of improving food
                security in Kenya.”
              </p>

              <p>
                The results from this project will provide guidance on promoting
                effective soil management for sustainable agricultural
                productivity growth in Kenya and across Sub-Saharan Africa. By
                addressing widespread soil acidity, this project aligns with
                Feed the Future and USAID’s efforts in Kenya to expand economic
                opportunities for smallholder farmers and entrepreneurs to build
                the resilience of households, communities, and markets to shocks
                and stresses – including climate change – and diversify
                agricultural production.
              </p>

              <p>
                “This project from Tegemeo Institute is testing ways to relax
                the constraints that limit smallholder farmers’ adoption of lime
                and other soil management practices that can fundamentally
                improve their maize yields,” said Dr. Michael Carter, Director
                of the Feed the Future Innovation Lab for Markets, Risk and
                Resilience. “The evidence from this project could even benefit
                smallholder farmers across the continent who face the same
                challenge of soil acidity.”
              </p>

              <p>
                Feed the Future ALL-IN was established by USAID as a partnership
                between International Centre for Evaluation and Development
                (ICED), with offices in Nairobi, Kenya and Accra, Ghana, and the
                Feed the Future Innovation Lab for Markets, Risk & Resilience
                (MRR) based at the University of California, Davis. Feed the
                Future ALL-IN funds researchers at African institutions to lead
                large-scale international research collaborations, leveraging
                their local knowledge, skills, and ideas to build actionable
                evidence for promoting resilience and inclusive agricultural
                growth.
              </p>

              <p>
                Read the project summary here : 
                <Link href="https://www.iced-eval.org/wp-content/uploads/2021/06/ALL-IN-project-in-brief-Olwande-Kenya.pdf">
                   Click Here
                </Link>
              </p>

              <p>
                This project is made possible by the generous support of the
                American people through the United States Agency for
                International Development (USAID). The contents are the
                responsibility of Feed the Future ALL-IN and do not necessarily
                reflect the views of USAID or the United States Government.
              </p>

              <p>
                Media contact:
                <ul>
                  <li>
                    Dr. John Olwande, jolwande@tegemeo.org, Tegemeo Institute of
                    Agricultural Policy and Development, Egerton University{" "}
                  </li>
                  <li>
                    Dr. David Sarfo Ameyaw, dameyaw@iced-eval.org ICED President
                    and CEO , ICED
                  </li>
                </ul>
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

export default USAIDSoilManagement;
