import React from "react";
import Landing from "../components/Landing";
import HomePresentation from "../components/HomePresentation";
import BrandsFooter from "../components/BrandsFooter";

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
