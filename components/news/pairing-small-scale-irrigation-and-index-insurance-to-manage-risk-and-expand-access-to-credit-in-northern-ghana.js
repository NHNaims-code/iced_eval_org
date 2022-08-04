import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogSidebar from "../blog-details/blog-sidebar";
import { smallScaleIrrigationImage } from "../../data/news-data";

const SmallScaleIrrigationAndInsurance = () => {
  return (
    <section className="blog-details pt-120 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <div>
              <div className="blog-card__image">
                <img src={smallScaleIrrigationImage} alt="" />
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
                Pairing Small-scale Irrigation and Index Insurance to Manage
                Risk and Expand Access to Credit in Northern Ghana
              </h3>
              <p>
                Drought is a constant threat across Sub-Saharan Africa. A new
                government initiative in Ghana is building rain-fed dams to
                irrigate small-scale farmer communities, but these dams may dry
                up during a severe drought. An ALL-IN research team is testing
                an innovative bundle of supplemental irrigation and a
                complementary index insurance product to expands farmers’
                overall drought protection. This innovation could unlock
                investments that leverage the benefits of irrigation and
                better-managed risk, further improving long-term agricultural
                growth and resilience in rural communities.
              </p>

              <h6>The Challenge</h6>

              <p>
                Frequent dry spells and drought keep farmers in Sub-Saharan
                Africa from improving their livelihoods for different reasons.
                When there is a risk of losing crops to drought, farmers avoid
                spending in technologies that promise to increase their yields
                and income.[1] Microloans are harder to obtain because drought
                can lead to widespread loan defaults.[2]
              </p>

              <p>
                Over the past two decades, significant attention and resources
                have been allocated to the development and expansion of weather
                index insurance as a tool for farmers in developing countries to
                effectively manage drought risk.[3] However, demand for weather
                index insurance has been very low in Sub-Saharan Africa due to a
                lack of affordability, competition with informal risk-sharing
                networks and the failure of payouts to match farmers’ losses,
                also called “basis risk.”
              </p>

              <p>
                Supplemental irrigation, the application of additional water to
                otherwise rain-fed crops, is another potential tool for farmers
                to adapt to frequent drought. The real value of supplemental
                irrigation lies in its capacity to bridge dry spells when
                rainfall fails to provide essential moisture for crops. However,
                supplemental irrigation has not reached significant scale in
                most countries across Sub-Saharan Africa.
              </p>

              <p>
                Neither index insurance nor supplemental irrigation on their own
                can fully address farmers’ vulnerability to drought. However,
                bundling the two together may combine the strengths of both
                technologies at the lowest cost.
              </p>

              <h6>Research Design</h6>

              <p>
                This ALL-IN project, led by the University of Energy and Natural
                Resources in Ghana, leverages the Government of Ghana’s new
                flagship initiative “One Village, One Dam” (1V1D) to test an
                innovative bundling of index insurance and irrigation to
                increase productivity and resilience.
              </p>

              <p>
                The project is being implemented as a randomized controlled
                trial (RCT) to measure the causal impacts of the index insurance
                and irrigation bundle. The team is measuring how the bundle
                affects demand for index insurance, the impacts of increasing
                the knowledge and adoption of supplemental irrigation, whether
                the bundle promotes the adoption of innovative agricultural
                technologies like improved seeds and fertilizer, and changes in
                agricultural productivity and livelihoods.
              </p>

              <p>
                This project includes a sample of 1,800 rural families from 180
                villages in Ghana’s Northern Savannah agro-ecological zone.
                Individual villages are randomly sorted into three groups:
                <ul>
                  <li>
                    Treatment 1: Supplemental irrigation, no drought index
                    insurance
                  </li>
                  <li>
                    Treatment 2: Bundled supplemental irrigation with drought
                    index insurance
                  </li>
                  <li>
                    Control group: No supplemental irrigation or drought index
                    insurance
                  </li>
                </ul>
              </p>

              <p>
                The 1V1D initiative is providing access to supplemental
                irrigation for the staple crops maize and rice during rainy
                season and full irrigation for cash crops, livestock and
                households’ water needs during the dry season. The main source
                of water for these dams is rainfall. Farmers in treatment groups
                1 and 2 are receiving training on drought management practices
                and the benefits of supplemental irrigation.
              </p>

              <p>
                The research team is partnering with the Ghana Agricultural
                Insurance Pool (GAIP) to design an index insurance contract
                tailored to small-scale farmers with access to small-scale
                supplemental irrigation. The index insurance is based on
                satellite measures of rainfall that can predict crop yields. The
                index insurance will also include a fail-safe audit rule in
                which farmers or communities can request a secondary measurement
                of losses in case the insurance fails to pay accurately.
              </p>
              <p>
                Women are included in the study in proportion to their high
                representation among small-scale farmers in Ghana, and the study
                measures impacts on women specifically. Men and women farmers
                are randomly assigned to each group in nearly equal proportions.
              </p>

              <h6>Development Impact</h6>

              <p>
                This project aligns with USAID objectives in Ghana in terms of
                its targeted crops of maize and rice and its focus on the
                country’s Northern Savannah agro-ecological zone. The project
                integrates nutrition and gender issues throughout and emphasizes
                improving the food security and resilience of vulnerable
                households. The project complements existing initiatives
                supported by Feed the Future and USAID that address agricultural
                productivity, food security, nutrition and access to credit and
                markets.
              </p>

              <p>
                The project is also answering other questions that will guide
                its future scaling. In particular, the research team is
                developing the most cost-effective way to make the bundle of
                irrigation and insurance available and is assessing farmers’
                willingness to pay for the product so as to ensure its
                commercial sustainability.
                <ul>
                  <li>
                    Emerick, K., et al. 2016. “Technological innovations,
                    downside risk, and the modernization of agriculture.”
                    American Economic Review.
                  </li>
                  <li>
                    Karlan, D., et al. 2014. “Agricultural decisions after
                    relaxing credit and risk constraints.” Quarterly Journal of
                    Economics.
                  </li>
                  <li>
                    Carter, M., et al. 2014. “Index-based Weather Insurance for
                    Developing Countries: A Review of Evidence and a Set of
                    Propositions for Up Scaling.” UC Davis Working Paper.
                  </li>
                </ul>
              </p>

              <p className="font-italic">This report is made possible by the generous support of the American people through the United States Agency for International Development (USAID) cooperative agreement 7200AA19LE00004. The contents are the responsibility of the Feed the Future Innovation Lab for Markets, Risk and Resilience and do not necessarily reflect the views of USAID or the United States Government.</p>

              {/* <div className="blog-details__meta">
                <ul className="list-unstyled blog-details__category">
                  <li>
                    <span>Share:</span>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">LinkedIn</a>
                  </li>
                </ul>
                <ul className="list-unstyled blog-details__category">
                  <li>
                    <span>Category:</span>
                  </li>
                  <li>
                    <a href="#">charity</a>
                  </li>
                  <li>
                    <a href="#">childrens</a>
                  </li>
                </ul>
              </div>
              <div className="blog-navigations">
                <a href="#">Our donation is hope for poor childrens</a>
                <a href="#">Fundrising for Early Childhood Rise</a>
              </div> */}
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

export default SmallScaleIrrigationAndInsurance;
