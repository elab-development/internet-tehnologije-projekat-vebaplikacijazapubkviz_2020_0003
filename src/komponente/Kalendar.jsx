import React from 'react';
import PropTypes from 'prop-types';
import {Calendar, dayjsLocalizer} from "react-big-calendar";
import dayjs from "dayjs";


const Kalendar = props => {
    const localizer = dayjsLocalizer(dayjs);
    return (
        <>
            <Calendar
                localizer={localizer}
                selectable
                onSelectEvent={(event) => props.onSelect(event)}
                events={props.events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </>
    );
};

Kalendar.propTypes = {
    events: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default Kalendar;
