import Link from "next/link";
import React from "react";
import gdiLogo from "../../assets/images/partners/gdi.jpg";
import cosaLogo from "../../assets/images/partners/cosa.webp";
import bmgfLogo from "../../assets/images/partners/bmgf.webp";
import agricultureImage from "../../assets/images/adaim/agriculture.webp";
import farmingImage from "../../assets/images/adaim/farming.webp";
import teaImage from "../../assets/images/adaim/tea.webp";

const AdaimPartners = () => {
  return (
    <>
      <div className="blog-sidebar">
        <div className="blog-sidebar__single">
          <h3>Our Partners</h3>
          <ul className="list-unstyled blog-sidebar__post">
            <li>
              <img src={bmgfLogo} alt="" width={62} />
              <h3>
                <a href="https://www.gatesfoundation.org/" target="_blank">
                  Bell & Mileinda Gates Foundation
                </a>
              </h3>
            </li>

            <li>
              <img src={cosaLogo} alt="" width={62} />
              <h3>
                <Link href="https://thecosa.org/" target="_blank">
                  Committee on Sustainabilty Assessment
                </Link>
              </h3>
            </li>
            <li>
              <img src={gdiLogo} alt="" width={62} />
              <h3>
                <a href="https://www.gdipartners.in/" target="_blank">
                  Government Development Impact
                </a>
              </h3>
            </li>
          </ul>
        </div>
      </div>
      <div className="blog-sidebar">
        <div className="blog-sidebar__single">
          <img src={agricultureImage} width="100%" className="mb-4"></img>
          <img src={farmingImage} width="100%" className="mb-4"></img>
          <img src={teaImage} width="100%" className="mb-4"></img>
        </div>
      </div>
    </>
  );
};

export default AdaimPartners;
