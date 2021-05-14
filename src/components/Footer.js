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
import { Link } from "react-router-dom";
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
                  <h3>¿Por qué elegirnos?</h3>
                </div>
                <p>
                  Si buscas garantía en la reconstrucción de elementos o partes
                  de maquinaria pesada, somos los indicados. Contamos con los
                  equipos de precisión y el soporte técnico de nuestra área de
                  Ingeniería dedicados a la constante investigación sobre los
                  diversos métodos de reconstrucción.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="widget clearfix">
                <div className="widget-title">
                  <h3>Links de información</h3>
                </div>
                <ul className="footer-links">
                  <li>
                    <Link to="/">Inicio</Link>
                  </li>
                  <li>
                    <Link to="/aboutus">Quienes Somos</Link>
                  </li>
                  <li>
                    <Link to="/services">Servicios</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Galería</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contacto</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="widget clearfix">
                <div className="widget-title">
                  <h3>Detalles de contacto</h3>
                </div>

                <ul className="footer-links">
                  <li>
                    <span>ventas@llaqta.com.pe</span>
                  </li>
                  <li>
                    <a
                      href="https://www.llaqta.com.pe"
                      target="_blank"
                      rel="noreferrer"
                    >
                      www.llaqta.com.pe
                    </a>
                  </li>
                  <li>
                    Barrio Manantiales S/N Callhuahuacho <br />
                    Cotabambas - Apurimac
                  </li>
                  <li>01-3041000</li>
                  <li>+51982960296</li>
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
                All Rights Reserved. &copy; {getYear()} <span>LLAQTA</span>
              </p>
            </div>

            <div className="footer-right">
              <ul className="footer-links-soi">
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                  >
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
