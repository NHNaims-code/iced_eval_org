import React, { useContext } from "react";
import Link from "next/link";
import { SearchContext } from "../../context/search-context";

const NavLinks = ({ extraClassName }) => {
  const { searchStatus, updateSearchStatus } = useContext(SearchContext);
  const handleSearchClick = (e) => {
    e.preventDefault();
    updateSearchStatus(!searchStatus);
  };

  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className={`main-menu__list ${extraClassName}`}>
      <li className="dropdown">
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="/causes">
          <>
            <a>Our Work</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/works/research-and-innovation-in-evaluations">
              <a>Research and Innovation in Evaluations</a>
            </Link>
          </li>
          <li>
            <Link href="/works/monitoring-and-evaluation-and-adaptive-management">
              <a>Monitoring and Evaluation and Adaptive Management</a>
            </Link>
          </li>
          <li>
            <Link href="/works/knowledge-management-and-policy-engagement">
              <a>Knowledge Management and Policy Engagement</a>
            </Link>
          </li>
          <li>
            <Link href="/works/capacity-strengthening-and-professional-development">
              {/* <Link href="/works/capacity-building-and-professional-development"> */}
              <a>Capacity Strengthening and Professional Development</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="/events">
          <>
            <a>Programs</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>

        <ul className="dropdown-list">
          <li className="dropdown">
            <Link href="/events">
              <>
                <a>Our Programs</a>
                <button
                  aria-label="dropdown toggler"
                  onClick={handleDropdownStatus}
                >
                  <i className="fa fa-angle-down"></i>
                </button>
              </>
            </Link>
            <ul className="dropdown-list">
              <li>
                <Link href="/programs/iindwege/bmgf-funded-project">
                  <a>IINDWEGE</a>
                </Link>
              </li>
              <li>
                <Link href="/programs/all-in">
                  <a>ALL-IN</a>
                </Link>
              </li>
              <li>
                <Link href="/programs/adaim">
                  <a>
                    Agile Data Approaches and Innovations for Monitoring (ADAIM)
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/programs/executive-leadership-program-in-monitoring-and-evaluation-for-public-institutions-and-agencies">
                  <a>
                    Executive Leadership Course for Monitoring and Evaluation
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/programs/evidence-to-action-conference">
                  <a>Evidence to Action Conferences</a>
                </Link>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <Link href="/events">
              <>
                <a>Our Projects</a>
                <button
                  aria-label="dropdown toggler"
                  onClick={handleDropdownStatus}
                >
                  <i className="fa fa-angle-down"></i>
                </button>
              </>
            </Link>
            <ul className="dropdown-list">
              <li>
                <Link href="/projects/current-projects">
                  <a>Current Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/projects/past-projects">
                  <a>Past Projects</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="/news">
          <a>News & Events</a>
        </Link>
        <ul className="dropdown-list">
          <li>
          <Link href="https://e2a.iced-eval.org/" passHref={true}>
                  <a target="_blank">E2A Event 2022</a>
          </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/publications">
          <a>Publications</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link href="#">
          <>
            <a>About Us</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/team">
              <a>Our Team</a>
            </Link>
          </li>
          <li>
            <Link href="/#our-partners">
              <a>Partners</a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className="search-btn search-toggler" onClick={handleSearchClick}>
        <span>
          <i className="azino-icon-magnifying-glass"></i>
        </span>
      </li>
    </ul>
  );
};

export default NavLinks;
