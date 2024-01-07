import React, {useState} from 'react';
import 'reactjs-popup/dist/index.css';
import useData from '../useData';
import QuizCalendar from "../components/QuizCalendar";
import EventPopup from "../components/EventPopup";
import HeaderTitle from '../components/HeaderTitle';
import { useEffect } from 'react';
const QuizEvents = () => {
    const [quizEvents, setQuizEvents] = useState([]);
    const quizEventsData  = useData("api/seasons/1/quiz_events");
    
    const [open, setOpen] = useState(false);
    const [quizEvent, setQuizEvent] = useState(null);

    console.log(quizEventsData);
    useEffect(() => {
        const formatQE = () => {
            if (quizEventsData) {
                const formattedQE = quizEventsData.map((event) => ({
                    id: event.quiz_event_id,
                    title: event.topic,
                    start: new Date(event.quiz_date),
                    end: new Date(new Date(event.quiz_date).getTime() + 2 * 60 * 60 * 1000),
                    desc: "2023/2024",
                }));
                setQuizEvents(formattedQE);
                setQuizEvent(formattedQE[0]);
            }
        };

        if (quizEventsData && quizEventsData.length > 0) {
            formatQE();
        }
    }, [quizEventsData]);


    console.log("Quiz events Ivana:"+ JSON.stringify(quizEvents));
    
    const onSelect = (quizEvent) => {
        
        setQuizEvent(quizEvent);
        console.log(quizEvent);
        setOpen(true);

        console.log(open);
    }



    const onClose = () => {
        setOpen(false);
    }

    return (
        <>
            <HeaderTitle title={"Our events"} text={"Join us and have fun!"}/>
            <QuizCalendar quizEvents={quizEvents} onSelect={onSelect}/>
            {quizEvent && <EventPopup open={open} onClose={onClose} event={quizEvent} />}
   
            
        </>
    );
};

export default QuizEvents;
