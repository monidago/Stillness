import React from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";

const ContactUs = (props) => {
  return (
    <div>
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
