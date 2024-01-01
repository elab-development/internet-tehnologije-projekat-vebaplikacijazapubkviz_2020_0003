import React from 'react';
import {Col, Row} from "react-bootstrap";


const About = () => {
    return (
        <>
        <div className="main-info">
            <div className="header-title m-2">
                <h1>Something about us</h1>
                <p>Dare to know that</p>
            </div>

            <div className="header-description">
                <p>
                    Pub quiz masters Andjelija and Ivana take organizing quiz events to whole other level.<br/>
                    Feel free to join us on our journey.<br/>
                    Location: South Banat, Serbia
                </p>
            </div>
            </div>
            <div className="horizontal">
                <div className="names">
                    <h1>Andjelija Vojnovic</h1>
                    <img src="https://picsum.photos/300/300" alt="random" />
                    <p>I am just a simple girl from Pancevo who dared to make a pub quiz alive. Some of my dreams came true with all the excitement and fun we have in those pub events. </p>
                </div>
                <div className="names">
                    <h1>Ivana Vukmirov</h1>
                    <img src="https://picsum.photos/300/300" alt="random" />
                    <p>I am just a simple girl from Vrsac who dared to make a pub quiz alive. Some of my dreams came true with all the excitement and fun we have in those pub events. </p>
                </div>
            </div>

        </>
    );
};

export default About;