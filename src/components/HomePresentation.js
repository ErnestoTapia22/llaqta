import React from "react";
import "./styles/HomePresentation.css";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuoteRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import about2 from "../img/home-1.jpg";
import about3 from "../img/home-2.jpg";

library.add(faQuoteRight, faQuoteLeft);
const HomePresentation = () => {
  return (
    <div id="overviews" className="section lb">
      <div className="container mw-1140">
        <div className="section-title row text-center">
          <div className="col-md-8 offset-md-2">
            <h3>¿Por qué elegirnos?</h3>
            <p className="lead">
              Si buscas garantía en la reconstrucción de elementos o partes de
              maquinaria pesada, somos los indicados. Contamos con los equipos
              de precisión y el soporte técnico de nuestra área de Ingeniería
              dedicados a la constante investigación sobre los diversos métodos
              de reconstrucción.
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="message-box">
              {/* <h4>Nuestros Lemas</h4> */}
              <h2>Nuestros Lemas</h2>
              <p>
                <FontAwesomeIcon icon={faQuoteLeft} color="#538234" /> Somos
                Profesionales al servicio de la industria.{" "}
                <FontAwesomeIcon icon={faQuoteRight} color="#538234" />
              </p>

              <p>
                {" "}
                <FontAwesomeIcon icon={faQuoteLeft} color="#538234" /> Con
                seguridad, responsabilidad y puntualidad en nuestro trabajo.{" "}
                <FontAwesomeIcon icon={faQuoteRight} color="#538234" />{" "}
              </p>

              {/* <a href="#" className="hover-btn-new">
                <span>Learn More</span>
              </a> */}
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
              <h2>Mensaje de nuestro gerente general</h2>
              <p>
                <FontAwesomeIcon icon={faQuoteLeft} color="#538234" /> Cuento
                con más de 10 años de experiencia en el sector minero y
                metalmecánico, y uno de los grandes problemas en la producción
                minera es el retraso generado por reparaciones no programadas de
                maquinaria pesada. Esto es debido a que la mayoría de estos
                equipos y mantenimiento de estos se hacen en la ciudad de Lima.
                LLAQTA INGENIEROS SAC, se ha creado con el objetivo de ser un
                aliado de las mineras que pueda resolver problemas en tiempo de
                reparación, estamos ubicados estrategicamente para ser la
                solución a sus paradas de emergencia y así disminuir el retraso
                generado.{" "}
                <FontAwesomeIcon icon={faQuoteRight} color="#538234" />
              </p>

              {/* <p>
                {" "}
                Integer rutrum ligula eu dignissim laoreet. Pellentesque
                venenatis nibh sed tellus faucibus bibendum.
              </p> */}

              {/* <a href="#" className="hover-btn-new">
                <span>Learn More</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePresentation;
