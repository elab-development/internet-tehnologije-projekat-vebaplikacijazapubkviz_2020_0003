import React, {useState} from 'react';
import 'reactjs-popup/dist/index.css';
import events from "../data/events";
import QuizCalendar from "../components/QuizCalendar";
import EventPopup from "../components/EventPopup";

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
                <p>Join us and have fun!</p>
            </div>

            
                <QuizCalendar events={events} onSelect={onSelect}/>
            
            <EventPopup open={open} onClose={onClose} event={event} />
        </>
    );
};

export default Events;
