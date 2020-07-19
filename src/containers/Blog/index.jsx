import React from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import PostContent from "../../components/PostContent";
import Footer from "../../components/Footer";

const Blog = (props) => {
  return (
    <div>
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
