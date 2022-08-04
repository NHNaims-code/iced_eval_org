import React from "react";

const PageShare = ({ facebookLink, twitterLink, linkedInLink, category }) => {
  return (
    <div className="blog-details__meta">
      <ul className="list-unstyled blog-details__category">
        <li>
          <span>Social Presence:</span>
        </li>
        <li>
          <a
            href={
              facebookLink
                ? facebookLink
                : "https://www.facebook.com/ICED.THINKTANK"
            }
            target="_blank"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href={
              twitterLink ? twitterLink : "https://twitter.com/ICED_THINKTANK"
            }
            target="_blank"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href={
              linkedInLink
                ? linkedInLink
                : "https://www.linkedin.com/company/international-centre-for-evaluation-and-development-iced-/"
            }
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <ul className="list-unstyled blog-details__category">
        <li>
          <span>Category:</span>
        </li>
        <li>
          <a>{category}</a>
        </li>
      </ul>
    </div>
  );
};

export default PageShare;
