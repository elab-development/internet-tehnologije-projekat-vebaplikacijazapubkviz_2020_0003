import React from 'react';
import PropTypes from 'prop-types';
import Popup from "reactjs-popup";
import MyButton from './MyButton';

const EventPopup = props => {
    return (
        <>
            <Popup onClose={props.onClose} closeOnDocumentClick={true} open={props.open} position="right center">
                <div className="event-popup">
                    <h1 className="text-center">{props.event.title}</h1>
                    <p className="text-center">{props.event.desc}</p>
                    
                    <MyButton>Preuzmi</MyButton>
                </div>
            </Popup>
        </>
    );
};

export default EventPopup;