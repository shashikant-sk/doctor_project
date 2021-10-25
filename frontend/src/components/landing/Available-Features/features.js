import React from 'react';
import FeatureSlider from './slickSlider';

function Features(){
    return(
        <>
        <section className="section section-features">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 features-img">
                        <img src="./img/features/feature.png" className="img-fluid" alt="Feature" />
                    </div>
                    <div className="col-md-7">
                        <div className="section-header">
                            <h2 className="mt-2">Availabe Features in Our Clinic</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        </div>
                        <FeatureSlider/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Features;