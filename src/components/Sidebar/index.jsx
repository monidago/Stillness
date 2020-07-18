import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../Card";
import post from "../../Data/blog.json";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const blogs = post.data;
    setBlogs(blogs);
  }, [blogs]);

  return (
    <div className="sidebarCard">
      <Card
        style={{
          marginBottom: "2rem",
          padding: "1.5rem",
          boxSizing: "border-box",
        }}
      >
        <div className="sidebarHeader">
          <span>About Us</span>
        </div>
        <div className="sidebarAboutImgCard">
          <img
            src={require("../../assets/sidebar/campaign.gif")}
            alt="fitness"
          />
        </div>
        <div className="sidebarBodyCard">
          <p className="sidebarBodyText">
            <NavLink to="/AboutUs">Read More</NavLink>
          </p>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "2rem",
          padding: "1.5rem",
          boxSizing: "border-box",
        }}
      >
        <div className="sidebarHeader">
          <span>Social Network</span>
        </div>
        <div className="sidebarSocialMediaCard">
          <div className="sidebarSocialMedia">
            <a
              href="https://www.facebook.com/"
              target="blank"
              alt="Facebook"
              title="Facebook"
            >
              <i className="fa fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="blank"
              alt="Instagram"
              title="Instagram"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="blank"
              alt="Twitter"
              title="Twitter"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </div>
          <div className="sidebarSocialMedia">
            <a
              href="https://www.pinterest.co.uk/"
              target="blank"
              alt="Pinterest"
              title="Pinterest"
            >
              <i className="fa fa-pinterest-p"></i>
            </a>
            <a
              href="https://www.tumblr.com/"
              target="blank"
              alt="Tumblr"
              title="Tumblr"
            >
              <i className="fab fa-tumblr"></i>
            </a>
            <a
              href="https://uk.linkedin.com/"
              target="blank"
              alt="LinkedIn"
              title="LinkedIn"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </Card>
      <Card
        style={{
          marginBottom: "2rem",
          padding: "1.5rem",
          boxSizing: "border-box",
        }}
      >
        <div className="sidebarHeader">
          <span>Recent Posts</span>
        </div>
        <div className="sidebarRecentPostCard">
          {blogs.map((blog) => {
            return (
              <NavLink
                key={blog.id}
                to={"/blog/${blog.id}"}
                style={{ textDecoration: "none" }}
              >
                <div className="sidebarRecentPost">
                  <h3>{blog.blogTitle}</h3>
                  <span>{blog.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
