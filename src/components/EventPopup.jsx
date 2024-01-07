import React from 'react';
import PropTypes from 'prop-types';
import Popup from "reactjs-popup";
import MyButton from './MyButton';
import axios from 'axios';
const EventPopup = props => {

    function handleExport(){
        
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'api/export?season_id=1&quiz_event_id='+props.event.id
        };
        
        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            alert("Success!");
        })
        .catch((error) => {
            console.log(error);
        });
  
    }

    return (
        <>
            <Popup onClose={props.onClose} closeOnDocumentClick={true} open={props.open} position="right center">
                <div className="event-popup">
                    <h1 className="text-center">{props.event.title}</h1>
                    <p className="text-center">{props.event.desc}</p>
                    
                    <MyButton label={"Preuzmi"} onClick={handleExport}></MyButton>
                </div>
            </Popup>
        </>
    );
};

export default EventPopup;