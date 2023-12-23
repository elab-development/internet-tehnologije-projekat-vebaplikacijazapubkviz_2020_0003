import React from 'react';
import {Row} from "react-bootstrap";
import events from "../podaci/events";
import Kalendar from "../komponente/Kalendar";

const Events = () => {
    const onSelect = (event) => {
        console.log(event);
    }
    return (
        <>
            <div className="header-title m-2">
                <h1>Our events</h1>
                <p>Join us and have fun</p>
            </div>

            <Row>
                <Kalendar events={events} onSelect={onSelect}/>
            </Row>
        </>
    );
};

export default Events;
