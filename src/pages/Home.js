import React from "react";
import Landing from "../components/Landing";
import HomePresentation from "../components/HomePresentation";
import BrandsFooter from "../components/BrandsFooter";
import Footer from "../components/Footer";

const Home = (props) => {
  return (
    <div>
      <Landing />
      <HomePresentation />
      <BrandsFooter />
    </div>
  );
};
export default Home;
