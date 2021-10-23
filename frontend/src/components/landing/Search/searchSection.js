import React from 'react';
//This is the search section of Landing Page

function SearchSection(){
    return(
        <>
            <section className="section section-search">
                <div className="container-fluid">
                    <div className="banner-wrapper">
                        <div className="banner-header text-center">
                            <h1>Search Doctor, Make an Appointment</h1>
                            <p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
                        </div>
                        <div className="search-box">
                            <form action="">
                                <div className="form-group search-location">
                                    <input type="text" className="form-control" placeholder="Search Location" />
                                    <span className="form-text">Based on your Location</span>
                                </div>
                                <div className="form-group search-info">
                                    <input type="text" className="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" />
                                    <span className="form-text">Ex : Dental or Sugar Check up etc</span>
                                </div>
                                <button type="submit" className="btn btn-primary search-btn mt-0"><i className="fas fa-search"></i> <span>Search</span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            </>
    );
}

export default SearchSection;