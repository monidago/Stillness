import React from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import About from "../../components/About";
import Footer from "../../components/Footer";

const AboutUs = (props) => {
  return (
    <div>
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
