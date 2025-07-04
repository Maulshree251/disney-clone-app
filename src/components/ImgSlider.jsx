import styled from "styled-components";
import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";


const ImgSlider = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
return (
  <div>
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="/images/slider-badging.jpg" alt="slider-badging" />
        </a>
      </Wrap>
      <Wrap>
        <a>     
          <img src="/images/slider-scale.jpg" alt="slider-scale" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="slider-badag" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" alt="slider-scales" />
        </a>
      </Wrap>
    </Carousel>
  </div>
);
}

const Carousel = styled(Slider)`
margin-top: 20px;

& > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    background-color: blue;

    &:hover{
        opacity: 1;
        transition: opacity 0.2s ease 0s;
    }
}

ul li button {
    &:before{
       font-size: 10px;
         color: rgb(150, 158, 171); 
    }

}

ul li.slick-active button:before{
    color: white;
}

.slick-list {
    overflow: initial;
}

.slick-prev{
    left: -75px;
}

.slick-next{
    right: -75px;
}
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

a{
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
        overflow: hidden;
    }

    

}`



export default ImgSlider