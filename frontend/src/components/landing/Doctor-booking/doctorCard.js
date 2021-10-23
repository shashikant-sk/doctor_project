import React from 'react';
//Speciality section cards

function DoctorCard(props){
    return(
        <>
        <div className="profile-widget">
            <div className="doc-img">
                <a href="doctor-profile.html">
                    <img src={props.imgURL} className="img-fluid" alt="User Image"/>
                </a>
                <a href="javascript:void(0)" className="fav-btn">
                    <i className="far fa-bookmark"></i>
                </a>
            </div>
            <div className="pro-content">
                <h3 className="title">
                    <a href="doctor-profile.html">{props.name}</a>
                    <i className="fas fa-check-circle verified"></i>
                </h3>
                <p className="speciality">{props.speciality}</p>
                <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <span className="d-inline-block average-rating">({props.avgRating})</span>
                </div>
                <ul className="available-info">
                    <li><i className="fas fa-map-marker-alt"></i>{props.location}</li>
                    <li><i className="far fa-clock"></i>{props.avilable}</li>
                    <li>
                        <i className="far fa-money-bill-alt"></i>{props.charges}
                        <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                    </li>
                </ul>
                <div className="row row-sm">
                    <div className="col-6">
                        <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                    </div>
                    <div className="col-6">
                        <a href="booking.html" className="btn book-btn">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default DoctorCard;