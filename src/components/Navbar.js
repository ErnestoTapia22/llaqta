import React from "react";
import "./styles/navigation.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav
      id="menu"
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top custom-navbar"
    >
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#page-top">
            LLAQTA
          </a>{" "}
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Inicio
                <div className="lineAnimation" />
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                Quienes Somos
                <div className="lineAnimation" />
              </a>
            </li>
            <li>
              <Link className="nav-link" to="/services">
                Servicios
              </Link>
              <div className="lineAnimation" />
              {/* <a href="#services" className="nav-link">
                Servicios
                <div className="lineAnimation" />
              </a> */}
            </li>
            <li>
              <a href="#portfolio" className="nav-link">
                Galeria
                <div className="lineAnimation" />
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contacto
                <div className="lineAnimation" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
