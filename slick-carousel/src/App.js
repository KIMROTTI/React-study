import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import img from "./assets/img/202005121933040935_92.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Page = styled.div`
  margin-right: 30px;
  margin-left: 30px;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: auto;
  }

  .slick-slide div {
  }
`;

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };
  return (
    <div className="App">
      <Page>
        <h2> Single Item</h2>
        <StyledSlider {...settings}>
          <div>
            <img src={img}></img>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </StyledSlider>
      </Page>
    </div>
  );
}

export default App;
