import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogSidebar from "../blog-details/blog-sidebar";
import { reducingPovertyImage } from "../../data/news-data";

const ReducingPovertyGhana = () => {
  return (
    <section className="blog-details pt-120 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <div>
              <div className="blog-card__image">
                <img src={reducingPovertyImage} alt="" />
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
                Reducing Poverty among Women by Strengthening the Shea Value
                Chain in Northern Ghana
              </h3>
              <p>
                The shea value chain in Ghana is dominated by women, from
                picking shea nuts to processing them into commodities for a
                growing global market. Shea presents a powerful opportunity to
                address poverty and food insecurity but a lack of training and
                financing keep women from achieving the full profits from their
                efforts. This ALL-IN project is testing a package of training
                and financing that will vertically integrate local shea markets
                in northern Ghana, increasing the sector’s overall profitability
                while empowering women producers to receive the full benefits of
                their work.
              </p>

              <h6>The Challenge</h6>

              <p>
                Northern Ghana is generally poorer than the southern part of the
                country in multiple dimensions, but particularly with respect to
                income, assets and infrastructure. Solutions to these challenges
                should be mindful of opportunities to also bridge gender gaps
                with a focus on women’s economic and social outcomes.
              </p>

              <p>
                The shea tree is an important cash crop in the northern regions
                of Ghana where poverty is highest and increasing.1 Shea butter
                is an important local commodity. Families can use shea butter as
                cooking oil and can process it into local cosmetic products such
                as pomades and soaps. The shea value chain provides many
                families a supplementary household income between harvests of
                staple crops.
              </p>

              <p>
                The production of shea nuts and butter are among the most
                accessible income-generating activities for rural women in
                Northern Ghana and contribute immensely to household food
                security.[2] More than 80 percent of activities in the region’s
                shea value chain are carried out by women,[3] including shea nut
                picking, processing and marketing.
              </p>

              <p>
                The upsurge of globalization in the shea sector presents new
                opportunities to integrate shea into national and international
                value chains. However, constraints across the sector, including
                low quality shea kernels and butter for sale as well as a lack
                of negotiating power, severely limit how much the shea value
                chain can reduce women’s poverty and food insecurity. These
                constraints keep higher shea-related incomes and profits out of
                reach.
              </p>

              <h6>Research Design</h6>

              <p>
                This ALL-IN project, led from the Institute of Statistical,
                Social and Economic Research (ISSER) at the University of Ghana,
                seeks to integrate high-impact segments of the shea value chain
                in Northern Ghana. This mixed-methods research pairs a
                randomized controlled trial (RCT) with a full-scale qualitative
                study. The project includes 4,125 rural households across 165
                communities selected in collaboration with Presbyterian
                Agricultural Services (PAS), META Foundation and the USAID Ghana
                office.
              </p>

              <p>
                The project includes two core interventions. The first is to
                provide training to shea kernel processors to increasing the
                quality and yield of the shea butter they produce. In
                collaboration with PAS and MEF, the research team is training
                leaders in selected communities who will then provide training
                for their local women’s groups. The second intervention is a
                pre-financing contract with commercial buyers for up to one bag
                of shea kernels (about 85kg), which is worth approximately US
                $34.
              </p>

              <p>
                The RCT tests the two interventions’ impacts on community-level
                profits, producer price, women’s empowerment, food security,
                subjective welfare and other outcomes. To measure the true
                impact of these interventions, the 165 communities are randomly
                selected into three groups:
                <ul>
                  <li>
                    T1. Training: Participants receive training intervention
                    only
                  </li>
                  <li>
                    T2. Training and marketing contract: Participants receive
                    training plus a pre-financing-based marketing contract with
                    shea kernel aggregators
                  </li>
                  <li>Control: Participants receive neither intervention</li>
                </ul>
              </p>

              <h6>Development Impact</h6>

              <p>
                Over the past decade, the shea value chain has consistently
                featured in initiatives from the Government of Ghana, USAID and
                other development partners seeking to bridge the north-south
                divide in poverty and food security. This project could increase
                the profitability of shea processing by improving the
                coordination of supply and demand, which in turn could increase
                investments in the sector.
              </p>

              <p>
                Women in particular will benefit from strengthening the shea
                sector. Right now, women involved in the shea butter value chain
                do not derive the full value of their efforts because they often
                do not have the needed knowledge to produce kernels and butter
                that meet market standards. Strengthening a sector that can
                increase women’s access to cash income and overall social and
                economic empowerment could also bridge gender gaps in economic
                and social outcomes.
              </p>

              <p>
                This project seeks to address two key challenges that keep women
                and their communities from higher profits and incomes related to
                the shea value chain. The training could increase the adoption
                of production, processing and storage practices required to meet
                those standards. Better prices for productivity, a greater total
                quantity of marketable shea products and better market
                coordination should all increase shea value chain profits, while
                also increasing women’s social and economic empowerment.
                <ul>
                  <li>Ghana Statistical Service, 2018</li>
                  <li>Hatskevich et al. 2014. “Shea butter processing as an engine of poverty reduction in Northern Ghana: Case study of four communities in the Bolgatanga Municipality.” African Journal of Agricultural Research.</li>
                  <li>Yayah, A. 2020. “Investigating the sustainability of the shea industry among rural women in Northern Ghana.” Stellenbosch University.</li>
                </ul>
              </p>
              <p className="font-italic">This report is made possible by the generous support of the American people through the United States Agency for International Development (USAID) cooperative agreement 7200AA19LE00004. The contents are the responsibility of the Feed the Future Innovation Lab for Markets, Risk and Resilience and do not necessarily reflect the views of USAID or the United States Government.</p>

              
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

export default ReducingPovertyGhana;
