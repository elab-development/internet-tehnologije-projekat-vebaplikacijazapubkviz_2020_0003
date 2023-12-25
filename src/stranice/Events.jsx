import React, {useState} from 'react';
import 'reactjs-popup/dist/index.css';
import {Row} from "react-bootstrap";
import events from "../podaci/events";
import Kalendar from "../komponente/Kalendar";
import EventPopup from "../komponente/EventPopup";

const Events = () => {

    const [open, setOpen] = useState(false);
    const [event, setEvent] = useState(events[0]);

    const onSelect = (event) => {
        console.log(event);
        setEvent(event);
        setOpen(true);

        console.log(open);
    }



    const onClose = () => {
        setOpen(false);
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
            <EventPopup open={open} onClose={onClose} event={event} />
        </>
    );
};

export default Events;
