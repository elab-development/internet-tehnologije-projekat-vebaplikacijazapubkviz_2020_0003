import React from 'react';
import {Col, Row} from "react-bootstrap";


const About = () => {
    return (
        <>
            <div className="header-title m-2">
                <h1>Something about us</h1>
                <p>Dare to know that</p>
            </div>

            <div className="header-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in. Eu consequat ac felis donec et. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Tincidunt arcu non sodales neque sodales. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Enim lobortis scelerisque fermentum dui.
                </p>
            </div>

            <Row>
                <Col>
                    <h1>Andjelija Vojnovic</h1>
                    <img src="https://picsum.photos/200/300" alt="random" />
                    <p>I am just a simple girl from Pancevo who dared to make a pub quiz alive. Some of my dreams came true with all the excitement and fun we have in those pub events. </p>
                </Col>
                <Col>
                    <h1>Ivana Vukmirov</h1>
                    <img src="https://picsum.photos/200/300" alt="random" />
                    <p>I am just a simple girl from Vrsac who dared to make a pub quiz alive. Some of my dreams came true with all the excitement and fun we have in those pub events. </p>
                </Col>
            </Row>

        </>
    );
};

export default About;