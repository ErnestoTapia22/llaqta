import React, { Fragment } from "react";
import "./styles/404.css";

const error404 = () => {
  return (
    <Fragment>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>
              4<span>0</span>4
            </h1>
          </div>
          <h2>La página solicitada no existe</h2>
          {/* <form className="notfound-search">
            <input type="text" placeholder="Search..." />
            <button type="button">
              <span></span>
            </button>
          </form> */}
        </div>
      </div>
    </Fragment>
  );
};

export default error404;
