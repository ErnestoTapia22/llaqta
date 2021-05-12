import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
