import React from "react";
import "./styles/navigation.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <nav
      id="menu"
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top custom-navbar"
    >
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#page-top">
            LLAQTA INGENIEROS
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
              <Link to="/" className="nav-link">
                Inicio
                <div
                  className={
                    splitLocation[1] === ""
                      ? "lineAnimation activeLink"
                      : "lineAnimation"
                  }
                />
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/aboutus">
                Quienes Somos
                <div
                  className={
                    splitLocation[1] === "aboutus"
                      ? "lineAnimation activeLink"
                      : "lineAnimation"
                  }
                />
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/services">
                Servicios
                <div
                  className={
                    splitLocation[1] === "services"
                      ? "lineAnimation activeLink"
                      : "lineAnimation"
                  }
                />
              </Link>

              {/* <a href="#services" className="nav-link">
                Servicios
                <div className="lineAnimation" />
              </a> */}
            </li>
            <li>
              <Link className="nav-link" to="/gallery">
                Galeria
                <div
                  className={
                    splitLocation[1] === "gallery"
                      ? "lineAnimation activeLink"
                      : "lineAnimation"
                  }
                />
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contacto
                <div
                  className={
                    splitLocation[1] === "contact"
                      ? "lineAnimation activeLink"
                      : "lineAnimation"
                  }
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
