import React, {useState} from 'react';
import 'reactjs-popup/dist/index.css';
import events from "../data/events";
import QuizCalendar from "../components/QuizCalendar";
import EventPopup from "../components/EventPopup";
import HeaderTitle from '../components/HeaderTitle';

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
            <HeaderTitle title={"Our events"} text={"Join us and have fun!"}/>
            <QuizCalendar events={events} onSelect={onSelect}/>
            <EventPopup open={open} onClose={onClose} event={event} />
            
        </>
    );
};

export default Events;
