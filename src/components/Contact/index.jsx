import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../Card";
import post from "../../Data/blog.json";

const Contact = (props) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const blogs = post.data;
    setBlogs(blogs);
  }, [blogs]);

  return (
    <div className="fullBlogCard">
      <Card
        style={{
          backgroundColor: "#e9eaed",
        }}
      >
        {blogs.map((blog) => {
          return (
            <div className="fullBlogHeader">
              <span className="fullBlogCategory">{blog.blogCategory}</span>
              <h1 className="fullBlogPostTile">{blog.blogTitle}</h1>
              <span className="fullBlogPostedBy">
                Posted on {blog.postedOn} by {blog.author}
              </span>
              <div className="fullBlogImgContainer">
                <img
                  src={require("../../assets/blog/" + blog.blogImage)}
                  alt={blog.alt}
                ></img>
              </div>
              <div className="fullBlogContent">{blog.blogText}</div>
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default Contact;

// Links to images
// blog3 image source: https://displate.com/displate/13732
// blog1 image source: https://www.pinterest.co.uk/pin/445926800601693858/
// blog2 image source: https://www.pinterest.co.uk/pin/445926800598156820/
// blog5 image source https://www.pinterest.co.uk/pin/445926800584532020/
// blog4 image source https://www.pinterest.co.uk/pin/AR5jdGhp3Jw8C7Y7d4DAzNjEBFJK_rGOFTfVuH4tdMQXvPfsIgvhlMs/

//Links to text sources
//http://www.teenink.com/nonfiction/personal_experience/article/584442/I-Am-an-Artist-Because/
//https://cristianmihai.net/2012/08/07/i-am-an-artist-because/
