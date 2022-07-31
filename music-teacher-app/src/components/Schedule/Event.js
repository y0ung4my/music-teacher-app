import React from "react";
 
function Event({ startTime, endTime, summary, address, date, description }) {
  return (
    <div class="card border-light mb-3" id="card">
      <div class="card-header">{date.toDateString()}</div>
      <div class="card-body">
        <h4 class="card-title">{summary}</h4>
        <p>{startTime.toLocaleTimeString()} - {endTime.toLocaleTimeString()}</p>
        <p>{address}</p>
      <hr/>
        <p>{description}</p>
      </div>
    </div>
  );
}
 
export default Event;