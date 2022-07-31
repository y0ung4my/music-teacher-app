import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import Event from "./Event.js";
 
function Schedule() {
  const [events, setEvents] = useState([]);
 
  const calendarID = process.env.REACT_APP_CALENDAR_ID;
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
 
  const getEvents = (calendarID, apiKey) => {
    function initiate() {
      gapi.client
        .init({
          apiKey: apiKey,
        })
        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          });
        })
        .then(
          (response) => {
            let events = response.result.items;
            setEvents(events);
          },
          function (err) {
            return [false, err];
          }
        );
    }
    gapi.load("client", initiate);
  };

  useEffect(() => {
    const events = getEvents(calendarID, apiKey);
    setEvents(events);
  }, []);
 
  return (
    <div>
      <h1>Calendar</h1>
        <ul>
        {events?.map((event) => (
          <Event summary={event.summary}
            date={new Date(`${event.start.dateTime}`)}
            startTime={new Date(`${event.start.dateTime}`)}
            endTime={new Date(`${event.end.dateTime}`)}
            address={event.location}
            description={event.description}
            key={event.id} />
          ))}
        </ul>
    </div>
  );
}
 
export default Schedule;