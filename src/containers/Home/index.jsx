import React from "react";
import "./style.css";
import Footer from "../../components/Footer";
import HomePage from "../../components/HomePage";

const Home = (props) => {
  return (
    <div>
      <section className="container">
        <HomePage />
      </section>
      <section className="footerContainer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
