import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Home from "./containers/Home";
import Blog from "./containers/Blog";
import ContactUs from "./containers/ContactUs";
import AboutUs from "./containers/AboutUs";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Banner />
        <Route path="/" exact component={Home} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/blog" component={Blog} />
      </div>
    </Router>
  );
}

export default App;
