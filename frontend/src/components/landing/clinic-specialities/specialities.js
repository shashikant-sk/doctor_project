import React from 'react';
import SpecialityCard from './specialityCard';
import specialitiesArray from './specialityArray';
import SimpleSlider from './slickSlider';
//This is the Specialities section of Landing Page

function createCard(list){
    return <SpecialityCard key={list.id} name={list.name} imgUrl={list.imgURL} />
}

function Specialities(){
    return(
        <>
        <section className="section section-specialities">
            <div className="container-fluid">
                <div className="section-header text-center">
                    <h2>Clinic and Specialities</h2>
                    <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <SimpleSlider/>
            </div>
        </section>
        </>
    );
}

export default Specialities;