import React from "react";
import "./style.css";

const About = (props) => {
  return (
    <div>
      <section className="aboutCard">
        <div className="aboutTitle">About Us</div>
        <div className="abouImgCard">
          <img src={require("../../assets/about/about.jpg")} alt="About Us" />
        </div>
        <div>
          <p className="aboutText">
            I began business mentoring for visual artists over six years ago
            when I saw that I could help visual artists continue their purpose
            driven work, without sacrificing the ability to make an income and
            living. It breaks my heart that so many wonderful and generous
            artists fail because of the business side. ‘Stillness’ was born from
            that. My passion is to help artists be the artists they were born to
            be, empowering them to build businesses around bringing beauty into
            the world around them. For me, it’s a cause that is worth fighting
            for.
          </p>
          <p className="aboutTextCenter">
            Can you think of a more meaningful way to spend your life?
          </p>
          {/* text source: https://micahjmurray.com/why-i-am-an-artist/ */}
        </div>
      </section>
    </div>
  );
};

export default About;
