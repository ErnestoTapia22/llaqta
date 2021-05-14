import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import "./styles/App.css";
import ScrollToTop from "../helpers/ScrollToTop";
import AboutUs from "../pages/AboutUs";
import error404 from "../pages/404";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route path="/404" component={error404} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
