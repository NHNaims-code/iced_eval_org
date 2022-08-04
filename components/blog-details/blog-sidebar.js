import Link from "next/link";
import React from "react";
import { solomonImage } from "../../data/news-data";
import { edwardImage } from "../../data/news-data";
import { fiveYearGrantImage } from "../../data/news-data";

const BlogSidebar = () => {
  return (
    <div className="blog-sidebar">
      <div className="blog-sidebar__search">
        <form action="#">
          <input type="text" placeholder="Search here" />
          <button type="submit">
            <i className="azino-icon-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div className="blog-sidebar__single">
        <h3>Latest Posts</h3>
        <ul className="list-unstyled blog-sidebar__post">
          <li>
            <img src={solomonImage} alt="" width={62} />
            <h3>
              <Link href="/news/solomon-zena-walelign-joins-the-iced-team">
              Solomon Zena Walelign Joins the ICED Team
              </Link>
            </h3>
          </li>
          <li>
            <img src={edwardImage} alt="" width={62} />
            <h3>
              <a href="/news/edward-kusi-asafo-agyei-joins-the-iced-team">Edward Kusi Asafo-Agyei Joins the ICED Team</a>
            </h3>
          </li>
          <li>
            <img src={fiveYearGrantImage} alt="" width={62}/>
            <h3>
              <a href="/news/african-research-gets-a-boost-from-a-five-year-grant">
              African research gets a boost from a five-year grant
              </a>
            </h3>
          </li>
        </ul>
      </div>
      {/* <div className="blog-sidebar__single">
        <h3>Categories</h3>
        <ul className="list-unstyled blog-sidebar__category">
          <li>
            <a href="#">Charity</a>
          </li>
          <li>
            <a href="#">Fundraising</a>
          </li>
          <li>
            <a href="#">Donations</a>
          </li>
          <li>
            <a href="#">Health</a>
          </li>
          <li>
            <a href="#">Save Lives</a>
          </li>
          <li>
            <a href="#">Clean Water</a>
          </li>
        </ul>
      </div> */}
      {/* <div className="blog-sidebar__single">
        <h3>Tags</h3>
        <ul className="list-unstyled blog-sidebar__tags">
          <li>
            <a href="#">Charity</a>
          </li>
          <li>
            <a href="#">donations</a>
          </li>
          <li>
            <a href="#">savelives</a>
          </li>
          <li>
            <a href="#">education</a>
          </li>
          <li>
            <a href="#">poorpeople</a>
          </li>
          <li>
            <a href="#">health</a>
          </li>
          <li>
            <a href="#">cleanwater</a>
          </li>
        </ul>
      </div> */}
      {/* <div className="blog-sidebar__single">
        <h3>Comments</h3>
        <ul className="blog-sidebar__comments">
          <li>
            <a href="#">A Wordpress Commenter on Launch New Mobile App</a>
          </li>
          <li>
            <a href="#">John Doe on Template: Comments</a>
          </li>
          <li>
            <a href="#">A Wordpress Commenter on Launch New Mobile App</a>
          </li>
          <li>
            <a href="#">John Doe on Template: Comments</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default BlogSidebar;
