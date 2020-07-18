import React from "react";
import Card from "../Card";
import Logo from "../Logo";

const Banner = (props) => {
  return (
    <div>
      <Card>
        <div style={{ padding: "50px 0" }}>
          <Logo />
        </div>
      </Card>
    </div>
  );
};

export default Banner;
