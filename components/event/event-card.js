import React from "react";
import Link from "next/link";

const EventCard = ({ data }) => {
  const { id, image,name, designation } = data;
  return (
    <div className="event-card">
      <div className="event-card-inner">
        <div className="event-card-image">
          <div className="event-card-image-inner">
            <img src={image} alt="" />
            {/* <span>{name}</span> */}
          </div>
        </div>
        <div className="event-card-content">
          <h3>
            <Link href={`team/${id}`}>
              <a>{name}</a>
            </Link>
          </h3>
          <ul className="event-card-list">
            <li>
              <i className="azino-icon-clock"></i>
              <strong>Designation:</strong> {designation}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
