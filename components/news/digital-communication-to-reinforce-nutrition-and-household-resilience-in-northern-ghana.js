import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogSidebar from "../blog-details/blog-sidebar";
import { digitalCommunicationImage } from "../../data/news-data";

const DigitalCommunicationtoReinforceNutrition = () => {
  return (
    <section className="blog-details pt-120 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <div>
              <div className="blog-card__image">
                <img src={digitalCommunicationImage} alt="" />
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
                Digital Communication to Reinforce Nutrition and Household
                Resilience in Northern Ghana
              </h3>
              <p>
                Nutrition is critical for children’s growth and development in
                rural areas of Sub-Saharan Africa where families face the
                additional risks of climate-related shocks like drought. The
                USAID Resiliency in Northern Ghana (RING) project seeks to
                improve the nutrition and livelihoods of vulnerable families.
                This ALL-IN project measures the impacts of the RING project and
                tests whether nutrition-related messages by mobile phone
                reinforce the RING project’s impact on families’ nutrition and
                resilience. The study also analyzes the costs and benefits of
                nutrition-related messages to guide the future scaling up of
                such programs.
              </p>

              <h6>The Challenge</h6>

              <p>
                In 2013, Ghana was the first country in Sub-Saharan Africa to
                attain the Millennium Development Goal (MDG) of halving poverty.
                However, poverty continues to be pervasive in Ghana’s rural
                areas. Further, Ghana has significant regional differences in
                poverty, with the northern, upper east and upper west regions
                reporting poverty rates exceeding half of the population.
              </p>

              <p>
                This persistent rural poverty has had dire consequences for
                families’ nutrition. In 2019, about one in five children under
                five years of age in Ghana were stunted, and one in ten were
                underweight. In Ghana’s northern region, the prevalence of
                stunting in 2017 was 33 percent, almost twice the national
                average. This high burden of malnutrition affects children’s
                education outcomes, cognitive development as well as physical
                growth.
              </p>

              <p>
                The USAID Resiliency in Northern Ghana (RING) project is an
                integrated project under the Feed the Future initiative that
                seeks to improve the livelihoods and nutritional status of
                vulnerable rural families. RING-I, implemented from 2012 to
                2019, was designed to increase the consumption of diverse
                quality foods, improve nutrition and hygiene among women and
                young children and strengthen local networks for vulnerable
                households. RING-II, currently underway, promotes families’
                wellbeing and resilience through improved farming practices.
              </p>

              <p>
                Direct mobile phone communication through an Interactive Voice
                Response (IVR) platform may help to expand the impacts of the
                RING project by seeking to improve poor and vulnerable families’
                nutrition. While communication on its own will not improve
                nutrition and reduce poverty, understanding its contributions to
                these broader efforts can improve its impact in ongoing and
                future programming.
              </p>

              <h6>Research Design</h6>

              <p>
                This ALL-IN research project, led by the Institute of
                Statistical, Social and Economic Research (ISSER) at the
                University of Ghana, Legon, evaluates the impacts of the RING
                project on household nutrition and resilience to shocks in
                Northern Ghana. The evaluation includes a careful examination of
                whether communication (i.e. IVR messaging) can encourage and
                reinforce this kind of nutrition-based intervention. The
                research team is also exploring whether messages sent to men and
                women separately or together has a larger impact on household
                decisions related to nutrition.
              </p>

              <p>
                The research team is employing a multi-stage sampling procedure
                where participants are selected from 15 districts, and within
                each district a random selection of 180 communities.
                Participants are households with children under two years old.
                The majority of these households are smallholder farmers who
                cultivate maize, soybean, groundnut, cowpea and leafy
                vegetables. The total number of participants is estimated to be
                about 1,800 households.
              </p>

              <p>
                The team is working with Ghana-based IT firm Image-AD to send
                out nutrition-based messages by mobile phone to randomly
                selected households in the treatment groups. The nutrition-based
                messages to be used are key messages derived from the
                nutrition-based programs undertaken as part of USAID programming
                in the project area. Testing differences in outcomes between
                participating households and their non-participating
                counterparts will indicate whether these messages improve
                nutrition-related decisions and behaviors, and resilience to
                shocks like drought.
              </p>

              <p>
                The study is measuring the intervention’s impacts on household
                income, household expenditures on water, sanitation and hygiene,
                spending on food, and dietary diversity as well as children’s
                nutrition-related outcomes such as weight and height and
                incidence of illness.
              </p>
              <h6>Development Impact</h6>

              <p>
                The USAID Country Development Cooperation Strategy (CDCS) has an
                overall goal of supporting Ghana to increase self-reliance with
                all citizens living a healthy and productive life. Current
                inequalities biased against Northern Ghana require a systematic
                approach that takes these inequalities into account. This is
                particularly important as the adverse effects of the COVID-19
                shock is likely to linger on and exacerbate spatial inequality.
              </p>

              <p>
                If the RING program improves households’ welfare, it could lay
                the foundation for planning the country’s development agenda
                with poverty and inequality at the heart of such a plan. This
                ALL-IN project includes an evaluation of the cost effectiveness
                of using a mobile phone platform to speed up behavior change.
                Fortunately for Ghana, mobile phone penetration is very high.
                This makes the use of mobile phones for communicating to
                smallholder farmers as a means to improve families’ nutrition
                and reduce poverty a real possibility.
                <ul>
                  <li>UNDP</li>
                  <li>Ghana Statistical Service (GSS)</li>
                  <li>UNICEF</li>
                  <li>USAID</li>
                  <li>
                    Osei, R. D. et al. 2021. “Effects of Long-Term Malnutrition
                    on Education Outcomes in Ghana: Evidence from a Panel
                    Study.” The European Journal of Development Research.
                  </li>
                </ul>
              </p>

              <p className="font-italic">
                This report is made possible by the generous support of the
                American people through the United States Agency for
                International Development (USAID) cooperative agreement
                7200AA19LE00004. The contents are the responsibility of the Feed
                the Future Innovation Lab for Markets, Risk and Resilience and
                do not necessarily reflect the views of USAID or the United
                States Government.
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

export default DigitalCommunicationtoReinforceNutrition;
