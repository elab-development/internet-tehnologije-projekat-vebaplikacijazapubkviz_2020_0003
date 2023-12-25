import React from 'react';
import PropTypes from 'prop-types';
import Popup from "reactjs-popup";

const EventPopup = props => {
    return (
        <>
            <Popup onClose={props.onClose} closeOnDocumentClick={true} open={props.open} position="right center">
                <div className="event-popup">
                    <h1 className="text-center">{props.event.title}</h1>
                    <p className="text-center">{props.event.desc}</p>
                </div>
            </Popup>
        </>
    );
};

EventPopup.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    event: PropTypes.object.isRequired
};

export default EventPopup;