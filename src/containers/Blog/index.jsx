import React from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import PostContent from "../../components/PostContent";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

const Blog = (props) => {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <Banner />
      </section>
      <section className="container">
        <PostContent />
        <Sidebar />
      </section>
      <section className="footerContainer">
        <Footer />
      </section>
    </div>
  );
};

export default Blog;
