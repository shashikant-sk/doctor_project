import React from "react";
import DoctorCard from './doctorCard';
import DoctorArray from './doctorArray';
import { Row, Container } from 'react-bootstrap';
import Slider from "react-slick";

function createCard(list) {
    return <DoctorCard key={list.id} name={list.name} imgURL={list.imgURL} speciality={list.speciality} avgRating={list.avgRating} location={list.location} available={list.available} charges={list.charges}/>
}

export default function DoctorSlider() {
    var settings = {
        customPaging: function(i) {
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
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
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
        <div className = "doctor-slider" >
            <Container fluid>
                <Slider {...settings}>
                    {DoctorArray.map(createCard)}
                </Slider>
            </Container>
        </div >
    );
}