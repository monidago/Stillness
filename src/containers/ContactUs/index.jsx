import React from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

const ContactUs = (props) => {
  return (
    <div>
      <section>
        <Header />
      </section>
      <Banner />
      <section className="container">
        <Contact />
        <Sidebar />
      </section>
      <section className="footerContainer">
        <Footer />
      </section>
    </div>
  );
};

export default ContactUs;
