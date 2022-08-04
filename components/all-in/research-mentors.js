import React from "react";
import donor1 from "../../assets/images/causes/donor-1-1.jpg";
import donor2 from "../../assets/images/causes/donor-1-2.jpg";

const ResearchMentors = () => {
  return (
    <div className="cause-details__sidebar">
      <div className="cause-details__donations">
        <h4 className="cause-details__donations-title">Research Mentors</h4>
        <ul className="list-unstyled cause-details__donations-list">
          <li>
            <img
              src="https://basis.ucdavis.edu/sites/g/files/dgvnsk466/files/styles/sf_thumbnail/public/media/images/Nargiza%20Ludgate.jpg?h=8227057d&itok=23Qk3U_F"
              alt=""
              width={62}
            />
            <p>Nargiza Ludgate</p>
            <h3>
              <span style={{ color: "black" }}>
                Assistant Scholar, University of Florida International Center
                Office for Global Research Engagement
              </span>
            </h3>
          </li>
          <li>
            <img
              src="https://basis.ucdavis.edu/sites/g/files/dgvnsk466/files/styles/sf_thumbnail/public/media/images/Nicole%20Mason-Wardell.jpg?h=1dac4223&itok=0PpJN6Xk"
              alt=""
              width={62}
            />
            <p>Nicole Mason-Wardell</p>
            <h3>
              <span style={{ color: "black" }}>
                Associate Professor of Agricultural, Food and Resource
                Economics, Michigan State University
              </span>
            </h3>
          </li>
          <li>
            <img
              src="https://basis.ucdavis.edu/sites/g/files/dgvnsk466/files/styles/sf_thumbnail/public/media/images/Bradford%20Mills.jpg?h=7f412c8f&itok=hlH3b-Th"
              alt=""
              width={62}
            />
            <p>Bradford Mills</p>
            <h3>
              <span style={{ color: "black" }}>
                Professor of Agricultural and Applied Economics, Virginia Tech
              </span>
            </h3>
          </li>
          <li>
            <img
              src="https://basis.ucdavis.edu/sites/g/files/dgvnsk466/files/styles/sf_thumbnail/public/images/person/Miranda_Mario_2013-225x300%5B1%5D.jpg?h=2789d800&itok=lIDAfqj0"
              alt=""
              width={62}
            />
            <p>Mario Miranda</p>
            <h3>
              <span style={{ color: "black" }}>
                Professor of Agricultural, Environmental and Development
                Economics, The Ohio State University
              </span>
            </h3>
          </li>
          <li>
            <img
              src="https://basis.ucdavis.edu/sites/g/files/dgvnsk466/files/styles/sf_thumbnail/public/images/person/Udry.jpg?h=ca20dc95&itok=7TYCQGBK"
              alt=""
              width={62}
            />
            <p>Christopher Udry</p>
            <h3>
              <span style={{ color: "black" }}>
                Robert E. and Emily King Professor of Economics, Northwestern
                University
              </span>
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResearchMentors;
