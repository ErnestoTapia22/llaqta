import React, { Fragment } from "react";
import "./styles/AboutUsMain.css";
import { Fade } from "react-awesome-reveal";
import about2 from "../img/worker.jpg";
import about3 from "../img/worker2.png";

const AboutUsMain = () => {
  return (
    <Fragment>
      <div className="all-title-box-aboutus">
        <div className="container text-center"></div>
      </div>
      <div id="overviews" className="section lb">
        <div className="container mw-1140">
          <div className="section-title row text-center">
            <div className="col-md-8 offset-md-2">
              <h3>Acerca de Nosotros</h3>
              <p className="lead">
                Somos LLAQTA INGENIEROS S.A.C. una empresa dedicada al rubro
                metalmecánica en general. Fundado en Challhuahuacho, provincia
                Cotabambas, departamento de Apurímac, tenemos como propósito ser
                el soporte de las mineras en todo respecto a reparación de
                maquinaria pesada y proyectos mecánicos. Donde se requiera
                rapidez y casos de emergencia, estamos cerca.
              </p>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="message-box">
                <h2>Nuestra Misión</h2>
                <p>
                  Nuestro compromiso es satisfacer las necesidades y
                  expectativas de nuestros clientes en el menor tiempo posible,
                  buscando siempre la seguridad y óptimo funcionamiento de sus
                  equipos.
                </p>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="post-media">
                <Fade
                  triggerOnce={true}
                  direction="up"
                  delay={500}
                  duration={1500}
                >
                  <img
                    src={about2}
                    alt=""
                    className="img-fluid img-rounded shadow-img"
                  />
                </Fade>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="post-media">
                <Fade triggerOnce={true} direction="up" duration={1500}>
                  <img src={about3} alt="" className="img-fluid shadow-img" />
                </Fade>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="message-box">
                <h2>Nuestra Visión</h2>
                <p>
                  Tenemos como objetivo ser una empresa reconocida en el ámbito
                  nacional dentro de la industria metalmecánica, donde nuestros
                  servicios de diseño, calidad y cumplimiento van ligados con
                  las normas que rigen a nuestra Industria, lo cual nos lleva a
                  beneficiar a nuestros clientes con productos y servicios de la
                  más alta competitividad.
                </p>

                {/* <a href="#" className="hover-btn-new">
                  <span>Learn More</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUsMain;
