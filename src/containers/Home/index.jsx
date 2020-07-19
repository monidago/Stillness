import React from "react";
import "./style.css";
import Footer from "../../components/Footer";
import HomePage from "../../components/HomePage";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

const Home = (props) => {
  return (
    <div>
      <section>
        <Header />
      </section>
      <Banner />
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
