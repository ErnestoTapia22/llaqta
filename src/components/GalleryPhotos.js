import React, { Fragment } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import "./styles/GalleryPhotos.css";
import portfolio01 from "../img/portfolio/portfolio-1.jpg";
import portfolio02 from "../img/portfolio/portfolio-2.jpg";
import portfolio03 from "../img/portfolio/portfolio-3.jpg";
import portfolio04 from "../img/portfolio/portfolio-4.jpg";
import portfolio05 from "../img/portfolio/portfolio-5.jpg";
import portfolio06 from "../img/portfolio/portfolio-6.jpg";
import portfolio07 from "../img/portfolio/portfolio-7.jpg";
import portfolio08 from "../img/portfolio/portfolio-9.jpg";
import portfolio09 from "../img/portfolio/portfolio-10.jpg";

const GalleryPhotos = () => {
  return (
    <Fragment>
      <div className="all-title-box-gallery">
        <div className="container text-center"></div>
      </div>
      <div id="portfolio" className="text-center section lb">
        <div className="container">
          <div className="section-title">
            <h2>Galería</h2>
          </div>
          <SRLWrapper>
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <img src={portfolio01} className="img-fluid" alt="Llaqta" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <img src={portfolio02} className="img-fluid" alt="Llaqta" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <img src={portfolio03} className="img-fluid" alt="Llaqta" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <img src={portfolio04} className="img-fluid" alt="Llaqta" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <img src={portfolio05} className="img-fluid" alt="Llaqta" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <img src={portfolio06} className="img-fluid" alt="Llaqta" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <img src={portfolio07} className="img-fluid" alt="Llaqta" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <img src={portfolio08} className="img-fluid" alt="Llaqta" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <img src={portfolio09} className="img-fluid" alt="Llaqta" />
                </div>
              </div>
            </div>
          </SRLWrapper>
        </div>
      </div>
    </Fragment>
  );
};

export default GalleryPhotos;
