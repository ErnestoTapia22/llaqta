import React, { Fragment } from "react";
import "./styles/ContactForm.css";
import Map from "../components/Map";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("for implementing");
  };
  return (
    <Fragment>
      <div className="all-title-box-contact">
        <div className="container text-center"></div>
      </div>
      <div id="support" className="section wb">
        <div className="container-fulid">
          <div className="section-title text-center">
            <h3>Contáctenos!</h3>
          </div>

          <div className="row">
            <div className="col-xl-6 col-md-12 col-sm-12">
              <div className="contact_form">
                <div id="message"></div>
                <form
                  id="contactform"
                  className=""
                  onSubmit={handleSubmit}
                  name="contactform"
                >
                  <fieldset className="row row-fluid">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="form-control"
                        placeholder="nombres"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="form-control"
                        placeholder="Apellidos"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Teléfono"
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <textarea
                        className="form-control"
                        name="comments"
                        id="comments"
                        rows="6"
                        placeholder="Danos mas detalles.."
                      ></textarea>
                    </div>
                    <div className="text-center pd d-grid gap-2 d-md-block">
                      <button
                        type="submit"
                        value="SEND"
                        id="submit"
                        className="btn btn-light btn-radius btn-brd grd1"
                      >
                        Enviar
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
            <div className="col-xl-6 col-md-12 col-sm-12">
              <div className="map-box">{<Map />}</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactForm;
