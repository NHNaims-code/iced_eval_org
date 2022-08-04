import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import causeImage1 from "../../assets/images/all-in/image1.jpg";
import AllInProjects from "./all-in-projects";

import PrincipalInvestigators from "./principal-investigators";
import ResearchMentors from "./research-mentors";
import AllInNews from "./all-in-news";
import david from "../../assets/images/team/david.webp";
import michael from "../../assets/images/team/michael-r-carter.webp";
import PageShare from "../page-share";

const AllInICED = () => {
  return (
    <section className="cause-details blog-details  pt-120 pb-40 gradient-background-1">
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <div className="cause-details__content">
              <div className="cause-card">
                <div className="cause-card__inner">
                  <div className="cause-card__image">
                    <img src={causeImage1} alt="" />
                  </div>
                  <div className="cause-card__content">
                    <div className="cause-card__top"></div>
                  </div>
                </div>
              </div>
              <h3>
                Feed the Future Advancing Local Leadership, Innovation and
                Networks (ALL-IN)
              </h3>
              <p>
                On May 12, 2020, at the University of California (UC) Davis,
                Feed the Future Innovation Lab for Markets, Risk and Resilience
                (MRR Innovation Lab) announced the award of a five-year research
                grant to the International Centre for Evaluation and Development
                (ICED) to lead the implementation of MRR Innovation Lab’s
                Advancing Local Leadership, Innovation and Networks (ALL IN) in
                Africa.
              </p>
              <p>
                ALL IN is a new research program that aims to advance host
                country leadership in defining and implementing research
                projects and to deepen host country connections. The research
                will develop and test financial and market innovations that take
                the most promising agricultural tools for families in developing
                economies from the lab to the field.
              </p>
              <p>
                ALL IN is designed to address capacity gaps among many research
                institutions in managing large and complex awards (particularly
                the unique complexities of managing the United States Agency for
                International Development awards). The program builds on the
                successes and draws on the strength of US-African research
                collaborations, but inverts the traditional model. ALL IN will
                call for researchers at African institutions to take the lead in
                defining priorities and will work with US university research
                partners to supplement their own skills, talents, and ideas.{" "}
              </p>

              <p>
                Over the years, Feed the Future Innovation Labs has been built
                on partnerships between researchers at U.S. universities and
                researchers at host-country universities and institutions.
                Historically, these partnerships have been led, in both program
                administration and the ideas that drive the research, from the
                U.S. ALL IN will seek to shift this leadership role to
                researchers in Africa.
              </p>
              <h3 className="mt-5">
                ICED Capacity to serve as Regional Hub for ALL-IN
              </h3>
              <p>
                ICED was established in 2016 to nurture leadership and
                innovation in impact evaluation for development by mobilizing
                the emergent capacity of African universities and research
                institutions. ICED is positioned to bridge the gap that can
                exist between the capacity of an innovative researcher to
                conduct high-quality research and the capacity of that
                researcher’s institution to manage a large and complex research
                project, allowing us to award significant funding to innovative
                host-country based researchers to lead a research project.
              </p>
              <p>
                ICED currently have a memorandum of understandings (MOU) with
                research institutions in Africa such as the Institute of
                Statistical, Social and Economic Research in the University of
                Ghana; the School of Graduate Studies, Research & Extension of
                the United States International University (USIU-Africa) in
                Nairobi, Kenya; The University of Nairobi Institute for Climate
                Change and Adaptation, Kenya, Nairobi; The School of
                Agricultural Economics and Business Studies, Sokoine University
                of Agriculture, Morogoro, Tanzania; Makerere University in
                Kampala, Uganda; and The Ethiopian Economic Policy Research
                Institute, Addis Ababa, Ethiopia. ICED has plans to widen the
                network to most of the research institutions in Africa.
              </p>
              <p>
                ICED has also developed a memorandum of understanding (MOU) with
                selected Africa country government ministries to promote
                research and evaluation for policy-making and action. ICED
                currently has MOU with the Ghana Government Ministry of
                Monitoring and Evaluation, The commissioner of M&E, office of
                the Prime Minister, Uganda, The State Ministry of Planning,
                Department of M&E, Kenya National Treasury and Planning, The
                Planning Commission, Malawi, and The Ministry of Planning and
                International Cooperation, Puntland, State of Somalia.
              </p>

              <p>
                ICED has been championing the evidence to action movement in
                Africa through its annual Evidence to Action conference (E2A)
                which has created an excellent platform for researchers,
                academics, private sector practitioners, development agencies,
                civil society and policy makers to learn, share information,
                build networks and partnerships with the overall objective of
                identifying effective strategies and interventions for ensuring
                data generated from research and evaluation projects is well
                utilized.
              </p>
              <p>
                Therefore, as an African-based and African-led research
                institution, ICED is a natural choice to lead ALL IN based on
                its experience in nurturing leadership and innovation in impact
                evaluation for development and its ability to mobilize the
                emergent capacity of African universities and research
                institutions
              </p>
              <p className="text-italic">
                ICED hopes that this research initiative and the innovations and
                interventions that emerge, will in turn boost the capacity of
                various African governments to design sound evidence-based
                policies that will cause positive development outcomes in the
                continent.
              </p>
              <div className="cause-card__bottom">
                <a
                  href="https://basis.ucdavis.edu/all-in"
                  className="thm-btn dynamic-radius"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="result"></div>
          </Col>
          <Col md={12} lg={4}>
            <div className="cause-details__sidebar">
              <div className="cause-details__donations">
                <h4 className="cause-details__donations-title">
                  ALL-IN Co-Directors
                </h4>
                <ul className="list-unstyled cause-details__donations-list">
                  <li>
                    <img src={david} alt="" width={62} />
                    <p>David Ameyaw</p>
                    <h3>
                      <span style={{ color: "black" }}>
                        President, International Centre for Evaluation and
                        Development (ICED)
                      </span>
                    </h3>
                  </li>
                  <li>
                    <img src={michael} alt="" width={62} />
                    <p>Michael R. Carter</p>
                    <h3>
                      <span style={{ color: "black" }}>
                        Director, Feed the Future Innovation Lab for Markets,
                        Risk and Resilience
                      </span>
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
            <PrincipalInvestigators />
            <ResearchMentors />
          </Col>
        </Row>
      </Container>
      <Container fluid className="p-0 m-0">
        <AllInProjects />
      </Container>
      <Container>
        <AllInNews />
        <h4>Project Team Members</h4>

        <p>
          In 2013, Ghana was the first country in Sub-Saharan Africa to attain
          the Millennium Development Goal (MDG) of halving poverty. However,
          poverty continues to be pervasive in Ghana’s rural areas. Further,
          Ghana has significant regional differences in poverty, with the
          northern, upper east and upper west regions reporting poverty rates
          exceeding half of the population.
        </p>

        <p>
          This persistent rural poverty has had dire consequences for families’
          nutrition. In 2019, about one in five children under five years of age
          in Ghana were stunted, and one in ten were underweight. In Ghana’s
          northern region, the prevalence of stunting in 2017 was 33 percent,
          almost twice the national average. This high burden of malnutrition
          affects children’s education outcomes, cognitive development as well
          as physical growth.
        </p>

        <p>
          The USAID Resiliency in Northern Ghana (RING) project is an integrated
          project under the Feed the Future initiative that seeks to improve the
          livelihoods and nutritional status of vulnerable rural families.
          RING-I, implemented from 2012 to 2019, was designed to increase the
          consumption of diverse quality foods, improve nutrition and hygiene
          among women and young children and strengthen local networks for
          vulnerable households. RING-II, currently underway, promotes families’
          wellbeing and resilience through improved farming practices.
        </p>

        <p>
          Direct mobile phone communication through an Interactive Voice
          Response (IVR) platform may help to expand the impacts of the RING
          project by seeking to improve poor and vulnerable families’ nutrition.
          While communication on its own will not improve nutrition and reduce
          poverty, understanding its contributions to these broader efforts can
          improve its impact in ongoing and future programming.
        </p>

        <h4>Research Design</h4>

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
              <h4>Development Impact</h4>

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

        <PageShare category={""} />
      </Container>
    </section>
  );
};

export default AllInICED;
