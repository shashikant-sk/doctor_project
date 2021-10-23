import React from 'react';
//Speciality section cards

function FeatureCard(props){
    return(
        <>
        <div className="feature-item text-center">
            <img src={props.imgURL} className="img-fluid" alt="Feature" />
            <p>{props.name}</p>
        </div>
        </>
    );
}

export default FeatureCard;