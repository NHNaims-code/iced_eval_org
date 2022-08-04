import React from "react";
import Link from "next/link";

const NewsletterCard = ({ data }) => {
  const { sno, date,title, docLink, videoLink } = data;
  let videoID = videoLink.split("=");
  videoID = videoID[1];
  // console.log("Video ID",videoID);

  const thumbnail = `https://img.youtube.com/vi/${videoID}/mqdefault.jpg`;
  // console.log(thumbnail);

  let convertedDate = new Date(date);

  var options = { 
      day: "numeric",
      month: "short", 
  }
  
  var formattedDate = convertedDate.toLocaleDateString("default", options);


  return (
    <div className="event-card">
      <div className="event-card-inner">
        <div className="event-card-image">
          <div className="event-card-image-inner">
            <img src={thumbnail} alt="" width={130} height={130} />
            <span>{formattedDate}</span>
          </div>
        </div>
        <div className="event-card-content">
          <h3>
            <Link href={docLink}>
              <a target="_blank">{title}</a>
            </Link>
          </h3>
          <ul className="event-card-list">
            <li>
              <i className="fa fa-video"></i>
              <strong>Watch Video : </strong> <a href={videoLink} target="_blank">Click Here</a>
            </li>
            <li>
              <i className="fa fa-book"></i>
              <strong>Download PDF : </strong> <a href={docLink} target="_blank">Click Here</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCard;
