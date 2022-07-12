import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewStudentForm(props){

  function handleNewStudentFormSubmission(event) {
    event.preventDefault();
    props.onNewStudentCreation({name: event.target.name.value, email: event.target.email.value, phone: event.target.phone.value, timeSlot: event.target.timeSlot.value, lessonLength: event.target.lessonLength.value, note: event.target.lessonLength.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewStudentFormSubmission}
        buttonText="Submit" />
    </React.Fragment>
  );
}

NewStudentForm.propTypes = {
  onNewStudentCreation: PropTypes.func
};

export default NewStudentForm;