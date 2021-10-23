import React from 'react';
//Speciality section cards

function SpecialityCard(props){
    return(
        <>
        <div className="speicality-item text-center">
            <div className="speicality-img">
                <img src={props.imgUrl} className="img-fluid" alt="Speciality" />
                <span><i className="fa fa-circle" aria-hidden="true"></i></span>
            </div>
            <p>{props.name}</p>
        </div>
        </>
    );
}

export default SpecialityCard;