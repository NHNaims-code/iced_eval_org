import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0996942536813!2d-0.2019572854485901!3d5.552236995974322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf909a6b697655%3A0xda385dcaf1f66fef!2sPremier%20Towers!5e0!3m2!1sen!2sin!4v1646400634096!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        className={`map__${extraClass}`}
      ></iframe>
    </div>
  );
};

export default GoogleMap;
