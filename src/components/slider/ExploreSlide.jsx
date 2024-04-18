import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExSlide1 from "../ExpolreSlides/ExSlide1";
import ExSlide2 from "../ExpolreSlides/ExSlide2";
import ExSlide3 from "../ExpolreSlides/ExSlide3";




export default function ExploreSlide() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
          
            <div className="bg-white">
                <a href="#"><ExSlide1 /></a>
            </div>
            <div className="bg-white">
                <a href=""><ExSlide2 /></a>
            </div>
            <div className="bg-white">
                <a href=""> <ExSlide3 /> </a>


            </div>
           
        


        </Slider>
    );
}