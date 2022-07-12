import React from "react";
import PropTypes from "prop-types";

function Student(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenStudentClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.timeSlot}</p>
        <p>{props.lessonLength}</p>
        <p>{props.note}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  timeSlot: PropTypes.string,
  lessonLength: PropTypes.number,
  note: PropTypes.string,
  id: PropTypes.string,
  whenStudentClicked: PropTypes.func
};

export default Student;