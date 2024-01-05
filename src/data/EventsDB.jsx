import React from 'react';
import useData from '../useData';

const EventsDB = () => {
  const eventsData  = useData("season/1/quiz_events");
 
  if (!eventsData) {
    
    return null;
  }

  const events = eventsData.map(event => ({
    title: "2023/2024",
    start: new Date(event.quiz_date),
    end: new Date(event.quiz_date + 1 * 60 * 60 * 1000), // Dodajemo 1 sat (3600000 ms)
    desc: event.topic
  }));
  return events;
};

export default EventsDB;