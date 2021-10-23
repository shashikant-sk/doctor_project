import React, { Component } from "react";
import Slider from "react-slick";
import FeatureCard from './featureCard';
import FeaturesArray from './featuresArray';
import { Row, Container } from 'react-bootstrap'

function createCard(list){
    return <FeatureCard key={list.id} name={list.name} imgURL={list.imgURL} />
}

export default function FeatureSlider() {
    var settings = {
        customPaging: function(i) {
            return (
                <>
                <div className="slider-nav"></div>
                </>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        arrows: true,
        autoplay: true,
        centerMode: true,
        infinite: true,
        focusOnSelect: true,
        speed: 500,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    autoplay: true,
                    centerMode: true,
                    infinite: true,
                    focusOnSelect: true,
                    speed: 500,
                    autoplaySpeed: 1500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    autoplay: true,
                    centerMode: true,
                    infinite: true,
                    focusOnSelect: true,
                    speed: 500,
                    autoplaySpeed: 1500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    arrows: true,
                    autoplay: true,
                    centerMode: true,
                    infinite: true,
                    focusOnSelect: true,
                    speed: 500,
                    autoplaySpeed: 1500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    }
    return(
        <>
        <div className = "feature-slider" >
            <Slider {...settings}>
                {FeaturesArray.map(createCard)}
            </Slider>
        </div>
        </>
    );
}