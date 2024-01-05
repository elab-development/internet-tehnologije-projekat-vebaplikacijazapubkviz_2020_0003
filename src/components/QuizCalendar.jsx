import React from 'react';
import PropTypes from 'prop-types';
import {Calendar, dayjsLocalizer} from "react-big-calendar";
import dayjs from "dayjs";


const QuizCalendar = ({quizEvents}) => {
    const localizer = dayjsLocalizer(dayjs);


    console.log("U kalendaru su "+JSON.stringify(quizEvents))
    return (
        <> 
            <Calendar
                localizer={localizer}
                selectable
                events={quizEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        
        </>
    );
};

export default QuizCalendar;
