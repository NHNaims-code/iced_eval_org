import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const GalleryCard = ({ image,description }) => {
  return (
    <SimpleReactLightbox>
      <div className="gallery-card">
        <img src={image} className="img-fluid" alt="" />
        <SRLWrapper>
          <div className="gallery-content">
            <a
              href={image}
              className="img-popup"
              data-attribute="SRL"
              aria-label="open image"
            >
              <img src={image} className="img-fluid sr-only" alt="" width={370} height={427}/>
              <p>{description}</p>
            </a>
          </div>
        </SRLWrapper>
      </div>
    </SimpleReactLightbox>
  );
};

export default GalleryCard;
