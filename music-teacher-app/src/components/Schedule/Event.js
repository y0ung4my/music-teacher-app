import React from "react";
// import Date from "datejs";
 
function Event({ startTime, endTime, description, address }) {
  return (
    <div class="card border-light mb-3" id="card">
      <div class="card-header">{description}</div>
      <div class="card-body">
        <h4 class="card-title">{startTime} - {endTime}</h4>
        <p>Location:</p>
        <p>{address}</p>
        {/* <p>{address}</p> */}
      </div>
    </div>
  );
}
 
export default Event;