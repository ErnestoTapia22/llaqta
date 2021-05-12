import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./styles/Footer.css";

library.add(faCoffee, faFacebookF, faTwitter, faYoutube, faLinkedinIn);

const getYear = () => {
  return new Date().getFullYear();
};
const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="widget clearfix">
                <div className="widget-title">
                  <h3>About US</h3>
                </div>
                <p>
                  {" "}
                  Integer rutrum ligula eu dignissim laoreet. Pellentesque
                  venenatis nibh sed tellus faucibus bibendum. Sed fermentum est
                  vitae rhoncus molestie. Cum sociis natoque penatibus et magnis
                  dis montes.
                </p>
                <p>
                  Sed fermentum est vitae rhoncus molestie. Cum sociis natoque
                  penatibus et magnis dis montes.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="widget clearfix">
                <div className="widget-title">
                  <h3>Information Link</h3>
                </div>
                <ul className="footer-links">
                  <li>
                    <a href="#">Inicio</a>
                  </li>
                  <li>
                    <a href="#">Quienes Somos</a>
                  </li>
                  <li>
                    <a href="#">Servicios</a>
                  </li>
                  <li>
                    <a href="#">Galeria</a>
                  </li>
                  <li>
                    <a href="#">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="widget clearfix">
                <div className="widget-title">
                  <h3>Contact Details</h3>
                </div>

                <ul className="footer-links">
                  <li>
                    <a href="mailto:#">info@yoursite.com</a>
                  </li>
                  <li>
                    <a href="#">www.yoursite.com</a>
                  </li>
                  <li>
                    PO Box 16122 Collins Street West Victoria 8007 Australia
                  </li>
                  <li>+61 3 8376 6284</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyrights">
        <div className="container">
          <div className="footer-distributed">
            <div className="footer-left">
              <p className="footer-company-name">
                All Rights Reserved. &copy; {getYear()} <a href="#">LLAQTA</a>
              </p>
            </div>

            <div className="footer-right">
              <ul className="footer-links-soi">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
