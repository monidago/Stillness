import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../Card";
import post from "../../Data/blog.json";
import { NavLink } from "react-router-dom";

const PostContent = (props) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const blogs = post.data;
    setBlogs(blogs);
  }, [blogs]);

  return (
    <div className="blogPostCard">
      <Card
        style={{
          backgroundColor: "#e9eaed",
        }}
      >
        {blogs.map((blog) => {
          return (
            <div className="blogContainer">
              <div className="blogHeader">
                <span className="blogCategory">{blog.blogCategory}</span>
                <h1 className="blogPostTile">{blog.blogTitle}</h1>
                <span className="blogPostedBy">
                  Posted on {blog.postedOn} by {blog.author}
                </span>
                <span className="blogMore">
                  <NavLink to="/ContactUs">Read More</NavLink>
                </span>
              </div>
              <div className="blogImgContainer">
                <img
                  src={require("../../assets/blog/" + blog.blogImage)}
                  alt={blog.alt}
                ></img>
              </div>
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default PostContent;

// Links to images
// blog3 image source: https://displate.com/displate/13732
// blog1 image source: https://www.pinterest.co.uk/pin/445926800601693858/
// blog2 image source: https://www.pinterest.co.uk/pin/445926800598156820/
// blog5 image source https://www.pinterest.co.uk/pin/445926800584532020/
// blog4 image source https://www.pinterest.co.uk/pin/AR5jdGhp3Jw8C7Y7d4DAzNjEBFJK_rGOFTfVuH4tdMQXvPfsIgvhlMs/
