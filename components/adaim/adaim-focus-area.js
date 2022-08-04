import React from "react";
import { Container } from "react-bootstrap";

import BlogCard from "../blog/blog-card";

const ADAIM_FOCUS_AREA = [
  {
    image:'https://www.gdipartners.in/wp-content/webpc-passthru.php?src=https://www.gdipartners.in/wp-content/uploads/2022/02/focus-1-1.png&nocache=1',
    title:'Micro Level Data Collection',
    text:'Micro level data collection that tests different agile technologies and lean data systems to enhance demographic profiles, engage their opinions, and provide regular feedback to program managers and to beneficiaries '
  },
  {
    image:'https://www.gdipartners.in/wp-content/webpc-passthru.php?src=https://www.gdipartners.in/wp-content/uploads/2022/02/focus-2-1.png&nocache=1',
    title:'Meso Level Research',
    text:'Meso level research to better understand and monitor the factors such as governance, markets, or value chain dynamics that can affect outcomes and systemic change'
  },
  {
    image:'https://www.gdipartners.in/wp-content/webpc-passthru.php?src=https://www.gdipartners.in/wp-content/uploads/2022/02/focus-3.png&nocache=1',
    title:'Agile Data Research',
    text:'Agile Data research to study and validate new use cases, such as baselines, using agile approaches that collect data in a way that is inclusive, reliable, and repeatable, and can monitor factors such as cost-effectiveness, elements of risk and resilience, or internal validity, etc. in diverse situations'
  },
]

const AdaimFocusArea = () => {
  return (
    <section className="news-page pt-120 pb-120">
      <Container>
        <div className="news-3-col">
          {ADAIM_FOCUS_AREA.map(
            (
              { image, title, text},
              index
            ) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                text={text}
              />
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default AdaimFocusArea;
