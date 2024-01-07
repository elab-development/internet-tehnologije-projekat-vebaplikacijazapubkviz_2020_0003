import React from 'react';
import NamesCard from '../components/NamesCard';
import HeaderTitle from '../components/HeaderTitle';
import UploadImage from '../components/UploadImage';


const About = () => {
    return (
        <>
        <div className="main-info">
        <HeaderTitle title={"Something about us"} text={"Dare to know that"}/>


            <div className="header-description">
                <p>
                    Pub quiz masters Andjelija and Ivana take organizing quiz events to whole other level.<br/>
                    Feel free to join us on our journey.<br/>
                    Location: South Banat, Serbia
                </p>
            </div>
            </div>
            <div className="horizontal">
                    <NamesCard name={"Andjelija Vojnovic"} text={"I am just a simple girl from Pancevo who dared to make a pub quiz alive. Some of my dreams came true with all the excitement and fun we have in those pub events."}/>
                    <NamesCard name={"Ivana Vukmirov"} text={"I am just a simple girl from Vrsac who dared to make a pub quiz alive. Some of my dreams came true with all the excitement and fun we have in those pub events."}/>
                
                    
            </div>
            <div style={{ backgroundColor: '#c0e4f7', padding: '20px' }}>
                <UploadImage />
            </div>
            
        </>
    );
};

export default About;