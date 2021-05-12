import React from "react";
import "./styles/HomePresentation.css";
import { Fade } from "react-awesome-reveal";
import about2 from "../img/about_02.jpg";
import about3 from "../img/about_03.jpg";

const HomePresentation = () => {
  return (
    <div id="overviews" className="section lb">
      <div className="container mw-1140">
        <div className="section-title row text-center">
          <div className="col-md-8 offset-md-2">
            <h3>About</h3>
            <p className="lead">
              Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean
              sollicitudin, lorem quis bibendum auctor, nisi elit consequat
              ipsum, nec sagittis sem!
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="message-box">
              <h4>2018 BEST WEB HOSTING COMPANY</h4>
              <h2>Awards Winner Support Center</h2>
              <p>
                Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
                vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus
                dignissim.
              </p>

              <p>
                {" "}
                Integer rutrum ligula eu dignissim laoreet. Pellentesque
                venenatis nibh sed tellus faucibus bibendum. Sed fermentum est
                vitae rhoncus molestie. Cum sociis natoque penatibus et magnis
                montes, nascetur ridiculus mus. Sed vitae rutrum neque.{" "}
              </p>

              <a href="#" className="hover-btn-new">
                <span>Learn More</span>
              </a>
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
                <img src={about2} alt="" className="img-fluid img-rounded" />
              </Fade>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="post-media">
              <Fade triggerOnce={true} direction="up" duration={1500}>
                <img src={about3} alt="" className="img-fluid " />
              </Fade>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="message-box">
              <h2>The standard Lorem Ipsum passage, used since the 1500s</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p>
                {" "}
                Integer rutrum ligula eu dignissim laoreet. Pellentesque
                venenatis nibh sed tellus faucibus bibendum.
              </p>

              <a href="#" className="hover-btn-new">
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePresentation;
