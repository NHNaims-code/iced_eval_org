import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import MainSliderTwo from "../components/slider/main-slider-2";
import AboutTwo from "../components/about/about-two";
import BrandCarousel from "../components/brand-carousel";
import GalleryHomeTwo from "../components/gallery/gallery-home-two";
import BlogHomeTwo from "../components/blog/blog-home-two";
import Footer from "../components/footer";
import MenuContextProvider from "../context/menu-context";
import SearchContextProvider from "../context/search-context";
import VideoCardTwo from "../components/videos/video-card-two";
import ServiceOne from "../components/services/service-one";
import ICEDValues1 from "../components/about/iced-values1";
import CallToActionTwo from "../components/call-to-action/call-to-action-two";
import HowWeWork from "../components/about/how-we-work";
import ICEDStrategy from "../components/about/iced-strategy";
import AllPrograms from "../components/programs/all-programs";

const HomeTwo = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
          <Layout pageTitle="International Center for Evaluation and Development">
            <HeaderTwo />
            <StickyHeader extraClassName="stricky-header-two" />
            <MainSliderTwo />
            <AboutTwo />
            <VideoCardTwo /> 
            <HowWeWork/>
            <ICEDStrategy/>
            <AllPrograms/>
            <GalleryHomeTwo />
            <ServiceOne />
            <ICEDValues1 />
            
            {/* <CallToActionTwo
              heading="Current Developments"
              title="Current Developments"
              btntext="Click Here"
              link="/news"
              /> */}
            
            {/* <CallToActionTwo
              heading="Our Journey"
              title="ICED Journey and Partners"
              btntext="Know More"
              link="pdfs/ICED-Journey-and-Partners.pdf"
            /> */}
            {/* <CallToActionTwo
              heading="Our Publications"
              title="Publications"
              btntext="Learn More"
              link="/publications"
            />             */}
            
            <BrandCarousel extraClass="client-carousel__has-border-top" />
            <Footer />
          </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeTwo;
