import React from "react";
import "./style.css";
import Card from "../Card";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <div>
      <section>
        <Card>
          <div className="footerImageWrap">
            <div>
              <NavLink to="/Blog">
                <img
                  src={require("../../assets/footer/footer1.jpg")}
                  alt="Artist Painting"
                />
              </NavLink>
              {/* image source: https://twitter.com/chicxchanel/status/1199626335813013505/photo/4 */}
            </div>
            <div>
              <NavLink to="/Blog">
                <img
                  src={require("../../assets/footer/footer2.jpg")}
                  alt="Drawing"
                />
                {/* image source: https://www.pinterest.co.uk/pin/445926800574049763/ */}
              </NavLink>
            </div>
            <div>
              <NavLink to="/Blog">
                <img
                  src={require("../../assets/footer/footer3.jpg")}
                  alt="Journal"
                />
                {/* image source: https://designyoutrust.com/2017/08/a-wandering-into-the-fascinating-sketchbook-of-russian-artist-elena-limkina/ */}
              </NavLink>
            </div>
            <div>
              <NavLink to="/Blog">
                <img
                  src={require("../../assets/footer/footer4.jpg")}
                  alt="Ink Drawing"
                />
                {/* image source: https://www.pinterest.co.uk/pin/445926800573918223/ */}
              </NavLink>
            </div>
            <div>
              <NavLink to="/Blog">
                <img
                  src={require("../../assets/footer/footer5.jpg")}
                  alt="Tree Drawing"
                />
                {/* image source: https://www.pinterest.co.uk/pin/445926800608096423/ */}
              </NavLink>
            </div>
          </div>
        </Card>
      </section>
      <section className="footerList">
        <div className="footerText">
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <p className="footerCopyright">@MDA</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
