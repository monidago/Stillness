import React from "react";
import "./style.css";



export default class HomeBanner extends React.Component {
  state = {
    images: [
      require("../../assets/slider/img1.jpg"),
      require("../../assets/slider/img2.jpg"),
      require("../../assets/slider/img3.jpg"),
      require("../../assets/slider/img4.jpg"),
    ],

    idx: 0,
  };

  handleNext = () => {
    this.setState({
      idx: this.state.idx + 1,
    });
  };

  render() {
    return (
      <div className="homeBannerWrapper">
        <div className="homeBannerImgCard">
          <div className="homeBannerbtnsCard homeBannerBtn homeBannerBtnLeft">
            <i
              className="fas fa-chevron-left"
              aria-hidden="true"
              onClick={() => {
                this.setState({
                  idx: this.state.idx - 1,
                });
              }}
            ></i>
          </div>

          <div className="homeBannerPhotos">
            <img alt="Slider" src={this.state.images[this.state.idx]} />
          </div>
          <div className="homeBannerbtnsCard homeBannerBtn homeBannerBtnRight">
            <i
              className="fas fa-chevron-right"
              aria-hidden="true"
              onClick={this.handleNext}
            ></i>
          </div>
        </div>
      </div>
    );
  }
}

// Image sources
// Image 1 a colleage of all the images in this site
// Image 2 https://www.pinterest.co.uk/pin/445926800578295366/
// Image 3 https://sabonhomeblog.tumblr.com/post/167415272034
// Image 4 https://www.pinterest.co.uk/pin/141863456981653805/


