import React from "react";
import "./styles/AditionalServices.css";
import SoldadorAzul from "../img/soldador-azul.jpg";

const AditionalServices = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src={SoldadorAzul} className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>También te ofrecemos</h2>
              <div className="list-style">
                <div className="col-lg-12">
                  <ul>
                    <li>Certificado de calidad por reparación.</li>
                    <li>Asesoramiento antes y post repararación.</li>
                    <li>Maquinaria de precisión.</li>
                    <li>Soporte técnico por ingenieros colegiados.</li>
                    <li>
                      Técnicos calificados con más de 10 años de experiencia en
                      mecanizado.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AditionalServices;
