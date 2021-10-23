import React, { Component } from "react";
import Slider from "react-slick";
import SpecialityCard from './specialityCard';
import specialityArray from './specialityArray';
import { Row, Container } from 'react-bootstrap'

function createCard(list) {
    return <SpecialityCard key={list.id} name={list.name} imgUrl={list.imgURL} />
}

export default function SimpleSlider() {
    var settings = {
        customPaging: function (i) {
            return (
                <div className="slider-nav"></div>
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
                breakpoint: 730,
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
                breakpoint: 480,
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
            }
        ]
    }
    return (
        <>
            <div className="special-slider" >
                <Slider {...settings}>
                    {specialityArray.map(createCard)}
                </Slider>
            </div >
        </>
    );
}