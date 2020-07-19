import React from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import About from "../../components/About";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

const AboutUs = (props) => {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <Banner />
      </section>
      <section className="container">
        <About />
        <Sidebar />
      </section>
      <section className="footerContainer">
        <Footer />
      </section>
    </div>
  );
};

export default AboutUs;
