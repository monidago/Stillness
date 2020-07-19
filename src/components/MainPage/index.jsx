import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const MainPage = (props) => {
  return (
    <div className="mainContainer">
      <h1 className="mainHeader">Artists' Stories</h1>
      <div className="mainWrapper">
        <div className="mainCard">
          <NavLink to="/Blog">
            <img
              className="mainImg"
              src={require("../../assets/mainpage/main1.jpg")}
              alt="Artist in Studio"
            />
          </NavLink>
          {/* image source: https://www.pinterest.co.uk/pin/AR5jdGhp3Jw8C7Y7d4DAzNjEBFJK_rGOFTfVuH4tdMQXvPfsIgvhlMs/ */}
          <div className="mainContent">
            <h4 className="mainHeading">Clare Smith</h4>
            <div className="mainLine"></div>
            <p className="mainParagraph">
              Being an artist is a way of finding out who you really are...
            </p>
          </div>
        </div>

        <div className="mainCard">
          <NavLink to="/Blog">
            <img
              className="mainImg"
              src={require("../../assets/mainpage/main2.jpg")}
              alt="Artist in Studio"
            />
          </NavLink>
          {/* image source: http://www.joymasi.com/frances-segismundo */}
          <div className="mainContent">
            <h4 className="mainHeading">Marissa De Santos</h4>
            <div className="mainLine"></div>
            <p className="mainParagraph">
              A part of me wants to believe that I was born an artist...
            </p>
          </div>
        </div>

        <div className="mainCard">
          <NavLink to="/Blog">
            <img
              className="mainImg"
              src={require("../../assets/mainpage/main3.jpg")}
              alt="Artist in Studio"
            />
          </NavLink>
          {/* image source: https://www.pinterest.co.uk/pin/445926800603431132/*/}
          <div className="mainContent">
            <h4 className="mainHeading">Lorenza Clarck</h4>
            <div className="mainLine"></div>
            <p className="mainParagraph">
              There is a part of me that believes art to be a primordial aspect
              of the human condition...
            </p>
          </div>
        </div>

        <div className="mainCard">
          <NavLink to="/Blog">
            <img
              className="mainImg"
              src={require("../../assets/mainpage/main4.jpg")}
              alt="Artist in Studio"
            />
          </NavLink>
          {/* image source: https://www.dwell.com/article/this-stunning-studio-in-rhode-island-is-a-creatives-dream-66c7ee4f/6382251823183396864 */}
          <div className="mainContent">
            <h4 className="mainHeading">Jack White</h4>
            <div className="mainLine"></div>
            <p className="mainParagraph">
              That is was my inexorable destiny to become a writer...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
