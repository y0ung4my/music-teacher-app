import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "../StudentControl/ReusableForm";
import { useFirestore } from 'react-redux-firebase'

function NewStudentForm(props) {
  
  const firestore = useFirestore();

  function addStudentToFirestore(event) {
    event.preventDefault();
    props.onNewStudentCreation();

    return firestore.collection('students').add(
      {
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        timeSlot: event.target.timeSlot.value,
        lessonLength: event.target.lessonLength.value,
        note: event.target.note.value
      }
    )
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addStudentToFirestore}
        buttonText="Submit" />
    </React.Fragment>
  );
}

NewStudentForm.propTypes = {
  onNewStudentCreation: PropTypes.func
};

export default NewStudentForm;