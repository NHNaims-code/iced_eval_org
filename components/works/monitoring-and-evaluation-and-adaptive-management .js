import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageShare from "../page-share";

const MonitoringAndEvaluationAndAdaptiveManagement  = () => {
  return (
    <section className="blog-details pt-120 pb-40 gradient-background-4">
      <Container>
        <Row>
          <Col md={12}>
            <div>
              <p>
                ICED is positioning itself as a thought leader in M&E systems
                development and capacity enhancement across Africa. Governments
                across sub Saharan Africa struggles to deliver services to
                citizens in efficient, effective and timely manner with its
                attendant negative effects on livelihoods and quality of life.
                ICED wants to change the current narrative by tapping into a
                vast array of M&E expertise and tools to promote transparency
                and accountability for better service delivery, expenditure
                management and enhanced policy and decision-making. ICED intends
                to guide governments through learning and adaptive management to
                improve public sector management to deliver results aimed at
                changing the socio-economic conditions of the African people.
              </p>

              <p>
                ICED Public/Private Institutional M&E system strategy
                development will focus on positioning itself to provide the
                following services to African governments and other clients in
                the following areas:
                <ul>
                  <li>
                    Promote evaluative thinking and develop capacity in
                    evidence-based management through results chain modeling and
                    theory of change mapping
                  </li>
                  <li>
                    Build monitoring and evaluation capacity through learning
                    events and coaching with emphasis on collaboration, learning
                    and adaptive management. This will be based on carefully
                    developed ICED learning modules/tools.
                  </li>
                  <li>
                    Support governments to prepare Government-wide results
                    framework and sector results frameworks
                  </li>
                  <li>
                    Support governments to establish results delivery units
                    across government
                  </li>
                  <li>
                    Support governments and other clients to develop monitoring
                    tools such as dashboards, scorecard systems and templates
                    for annual progress reporting.
                  </li>
                  <li>
                    Make available ICED’s expertise to develop monitoring and
                    evaluation policy, guidelines, norms and standards
                  </li>
                </ul>
              </p>

              <p>
                Governments, donors, and other key actors across the continent
                are recognizing the importance of M&E – and research and
                evidence more broadly – to drive decision-making. Similarly, the
                spread of technology is enabling more agile, timely, and
                cost-effective data collection and analysis. There is a also a
                good range of African-led organizations conducting rigorous M&E
                – at varying levels of scale – with strong understanding of
                local contexts and language, trusted relationships with
                beneficiaries, and often strong convening power of individuals
                and organizations. Underpinning this is a growing focus on M&E
                that is ‘Made in Africa.’ The Made in Africa agenda is focused
                on embedding evaluation in the worldviews, methodologies and
                interests of the African continent, rather than the bias toward
                Western priorities and approaches. ICED has the potential to
                contribute to furthering this agenda by becoming a significant
                player in the African context.
              </p>

              <PageShare category={``}/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MonitoringAndEvaluationAndAdaptiveManagement;
