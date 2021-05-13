import React, { Fragment } from "react";
import "./styles/ServicesDescription.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faWrench,
  faHardHat,
  faDraftingCompass,
  faCrutch,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";

library.add(faWrench, faHardHat, faDraftingCompass, faCrutch, faHammer);

const ServicesDescription = () => {
  return (
    <Fragment>
      <div className="all-title-box">
        <div className="container text-center">
          {/* <h1>
            Features
            <span className="m_1">Lorem Ipsum dolroin gravida nibh vel velit.</span>
          </h1> */}
        </div>
      </div>

      <div id="overviews" className="section lb">
        <div className="container">
          <div className="section-title row text-center">
            <div className="col-md-8 offset-md-2">
              <h3>Servicios</h3>
              <p className="lead">
                Enfocados en mantener un estándar de calidad en reparaciones y
                fabricaciones, contamos con equipos especializados para las
                diversas actividades que se requiera en el sector.
              </p>
            </div>
          </div>

          {/* <hr className="invis" /> */}

          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div
                className="icon-wrapper wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                {/* <i className="flaticon-server global-radius effect-1 alignleft"></i> */}
                <span className="global-radius effect-1 alignleft">
                  <FontAwesomeIcon icon={faWrench} />
                </span>

                <h3>Mecanizados CNC</h3>
                <p>
                  Realizados con precisas herramientas como: Torno paralelo,
                  Mandrigadora, Fresadora, Taladro de columna. Y en Lima
                  contamos con centro de Mecanizado y tornos CNC.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div
                className="icon-wrapper wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
              >
                <span className="global-radius effect-1 alignleft">
                  <FontAwesomeIcon icon={faHardHat} />
                </span>
                <h3>Diseño de ingenieria</h3>
                <p>
                  Diseño de estructuras, herramientas, maquinas industriales.
                  Todo respaldado por software CAD y CAE
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div
                className="icon-wrapper wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
              >
                <span className="global-radius effect-1 alignleft">
                  <FontAwesomeIcon icon={faDraftingCompass} />
                </span>
                <h3>Metrología en campo</h3>
                <p>
                  Evaluaciones dimensionales, por PLP a uniones por soldadura y
                  dimensionado por Laser Tracker.
                </p>
              </div>
            </div>
          </div>

          <hr className="hr3" />

          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div
                className="icon-wrapper wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <span className="global-radius effect-1 alignleft">
                  <FontAwesomeIcon icon={faCrutch} />
                </span>
                <h3>Soldadura en general</h3>
                <p>
                  Procesos TIG, MIG y SMAW para trabajos en aceros especiales.
                  {/* <small className="readmore">
                    <a href="#">Read more</a>
                  </small> */}
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div
                className="icon-wrapper wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
              >
                <span className="global-radius effect-1 alignleft">
                  <FontAwesomeIcon icon={faHammer} />
                </span>

                <h3>Reparación en campo</h3>
                <p>
                  Mecanizados con mandrinadoras portátiles, tanto de diámetros
                  como superficies planas.
                </p>
              </div>
            </div>

            {/* <div className="col-md-4 col-sm-6 col-xs-12">
              <div
                className="icon-wrapper wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
              >
                <i className="flaticon-locked global-radius effect-1 alignleft"></i>
                <h3>High Security</h3>
                <p>
                  When you need anything about for Landigoo template, just drop
                  an email or leave a feedback from TF!
                  <small className="readmore">
                    <a href="#">Read more</a>
                  </small>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ServicesDescription;
