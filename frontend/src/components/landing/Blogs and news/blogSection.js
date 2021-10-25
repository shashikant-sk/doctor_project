import React from 'react';
import Card from './card';
import cardArray from './cardArray';
// import 'bootstrap/dist/css/bootstrap.css';
// import css from "./landing-page/effect";
//This is the Blog section of Landing Page

function createCard(card){
    return(
        <>
        <Card 
            key={card.id}
            name={card.name}
            date={card.date}
            head={card.head}
            body={card.body}
            blogImgURL={card.blogImgURL}
            docImgURL={card.docImgURL}
        />
        </>
    );
}

function BlogSection(){
    return(
        <>
        <section classname="section section-blogs">
            <div classname="container-fluid">
                <div classname="section-header text-center">
                    <h2>Blogs and News</h2>
                    <p classname="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div classname="row blog-grid-row">
                    {cardArray.map(createCard)}
                </div>
                <div classname="view-all text-center">
                    <a href="blog-list.html" classname="btn btn-primary">View All</a>
                </div>
            </div>
        </section>
        </>
    );
}

export default BlogSection;