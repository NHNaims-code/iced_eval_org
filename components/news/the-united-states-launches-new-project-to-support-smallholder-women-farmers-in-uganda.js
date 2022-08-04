import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogSidebar from "../blog-details/blog-sidebar";
import { smallholderWomenImage } from "../../data/news-data";

const USASmallHolderWomenFarmer = () => {
  return (
    <section className="blog-details pt-120 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <div>
              <div className="blog-card__image">
                <img src={smallholderWomenImage} alt="" />
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
                The United States Launches New Project to Support Smallholder
                Women Farmers in Uganda
              </h3>
              <p>
                The United States, through the Feed the Future Advancing Local
                Leadership, Innovation, and Networks (ALL-IN) program, has
                launched a new research project that will build evidence on what
                works to strengthen the empowerment and resilience of
                smallholder women farmers in Uganda.
              </p>

              <p>
                The three-year, $450,000 project, led by Makerere University,
                will test ways to transform and improve smallholder women
                farmers’ resilience to agricultural shocks and enhance their
                economic empowerment. The project will focus on stress-tolerant
                seeds and fertilizer, training on climate-smart agriculture,
                business skills, and low-cost crop insurance. The project will
                be implemented in the Isingiro and Alebtong districts in Uganda,
                where rural families can benefit from opportunities to improve
                their crop yields, incomes, nutrition, and resilience to
                agricultural shocks.
              </p>

              <p>
                “This project integrates multiple approaches with a focus on
                improving women’s livelihoods as well as their economic
                empowerment,” said Dr. Florence Kyoheirwe Muhanguzi, the
                project’s lead principal investigator and an associate professor
                of women’s and gender studies at Makerere University. “This
                research will build evidence to guide the development of
                policies in Uganda and across the region that effectively
                address women’s vulnerability to agricultural shocks through
                interventions that will increase their agricultural
                productivity, help diversify their incomes and improve the
                wellbeing of their families.”
              </p>

              <p>
                Women are critical to agriculture in Uganda, contributing about
                90 percent of the nation’s food. Yet they are more vulnerable
                than men to agricultural shocks caused by the effects of climate
                change. The majority of women farmers live in poverty, are
                subsistence-oriented, and depend on basic farming practices that
                generally produce more low-value crops.
              </p>

              <p>
                This project is being implemented using a mix of research
                methods. Detailed interviews will help the team to understand
                local concepts of women’s empowerment and the agricultural
                shocks women face. The team is implementing the main project
                interventions as a randomized controlled trial (RCT), which
                compares outcomes of farmers who receive the interventions to
                similar farmers who do not, which will show the true impacts of
                the individual interventions.
              </p>

              <p>
                The project supports United States efforts in Uganda to achieve
                a well-nourished population, understand key drivers of
                vulnerability, increase households’ capacity to manage risk, and
                diversify community and household assets.
              </p>

              <p>
                Dr. David Ameyaw, President and CEO of the International Centre
                for Evaluation and Development (ICED), said that improving
                agricultural productivity is critical at this time, considering
                forecasts that poverty will increase even more due to the
                COVID-19 pandemic. “Through this project, we believe that
                women’s empowerment and food security will be enhanced in the
                region,” Ameyaw said.
              </p>

              <p>
                Feed the Future ALL-IN was established by USAID as a partnership
                between ICED, with offices in Nairobi, Kenya and Accra, Ghana,
                and the Feed the Future Innovation Lab for Markets, Risk &
                Resilience (MRR) based at the University of California, Davis.
                ALL-IN funds researchers at African institutions to lead
                large-scale international research collaborations, leveraging
                their local knowledge, skills, and ideas to build actionable
                evidence for promoting resilience and inclusive agricultural
                growth. For more, visit{" "}
                <Link href="https://basis.ucdavis.edu/all-in">
                  https://basis.ucdavis.edu/all-in
                </Link>
                .
              </p>

              <p>
                “With the growing capacity in African universities and other
                institutions, it’s time for more of our local partners to take
                the lead,” said Dr. Michael Carter, director of the Feed the
                Future MRR Innovation Lab. “We anticipate that doing so will
                enhance the relevance and long-term impacts of the research.”
              </p>

              <p>
                Read the project summary here:{" "}
                <Link href="https://basis.ucdavis.edu/project/strengthening-resilience-and-empowerment-women-smallholder-farmers-uganda">
                  https://basis.ucdavis.edu/project/strengthening-resilience-and-empowerment-women-smallholder-farmers-uganda
                </Link>
              </p>

              <p>
                This report is made possible by the generous support of the
                American people through the United States Agency for
                International Development (USAID). The contents are the
                responsibility of Feed the Future ALL-IN and do not necessarily
                reflect the views of USAID or the United States Government.
                USAID administers the U.S. foreign assistance program providing
                economic and humanitarian assistance in more than 80 countries
                worldwide.
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

export default USASmallHolderWomenFarmer;
