import React from "react";
import "./style.css";
import HomeBanner from "../HomeBanner";
import MainPage from "../MainPage";

const HomePage = (props) => {
  return (
    <div className="homePageContainer">
      <section>
        <HomeBanner />
      </section>
      <section>
        <MainPage />
      </section>
    </div>
  );
};

export default HomePage;
