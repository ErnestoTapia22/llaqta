import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/BrandsFooter.css";
import logo_01 from "../img/logo_01.png";
import logo_02 from "../img/logo_02.png";
import logo_03 from "../img/logo_03.png";
import logo_04 from "../img/logo_04.png";
import logo_05 from "../img/logo_05.png";
import logo_06 from "../img/logo_06.png";

const BrandsFooter = () => {
  return (
    <div className="parallax section dbcolor">
      <div className="container">
        <div className="row logos">
          <Slider
            dots={false}
            infinite={true}
            slidesToShow={5}
            slidesToScroll={1}
            autoplay={true}
            arrows={false}
            pauseOnHover={true}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            <div className="col-md-2 col-sm-2 col-xs-6">
              <a href="#">
                <img src={logo_01} alt="" className="img-repsonsive" />
              </a>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-6">
              <a href="#">
                <img src={logo_02} alt="" className="img-repsonsive" />
              </a>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-6">
              <a href="#">
                <img src={logo_03} alt="" className="img-repsonsive" />
              </a>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-6">
              <a href="#">
                <img src={logo_04} alt="" className="img-repsonsive" />
              </a>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-6">
              <a href="#">
                <img src={logo_05} alt="" className="img-repsonsive" />
              </a>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-6">
              <a href="#">
                <img src={logo_06} alt="" className="img-repsonsive" />
              </a>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BrandsFooter;
