import React from 'react';
//This is the card for blog section of Landing Page

function Card(props){
    return(
        <>
        <div classname="col-md-6 col-lg-3 col-sm-12">
            <div classname="blog grid-blog">
                <div classname="blog-image">
                    <a href="blog-details.html"><img classname="img-fluid" src={props.blogImgURL} alt="Post Image" /></a>
                </div>
                <div classname="blog-content">
                    <ul classname="entry-meta meta-item">
                        <li>
                            <div classname="post-author">
                                <a href="doctor-profile.html"><img src={props.docImgURL} alt="Post Author" /> <span>{props.name}</span></a>
                            </div>
                        </li>
                        <li><i classname="far fa-clock"></i>{props.date}</li>
                    </ul>
                    <h3 classname="blog-title"><a href="blog-details.html">{props.head}</a></h3>
                    <p classname="mb-0">{props.body}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Card;