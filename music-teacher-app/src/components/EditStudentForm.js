import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditStudentForm (props) {
  const { student } = props;

  function handleEditStudentFormSubmission(event) {
    event.preventDefault();
    props.onEditStudent({name: event.target.name.value, email: event.target.email.value, phone: event.target.phone.value, timeSlot: event.target.timeSlot.value, lessonLength: event.target.lessonLength.value, note: event.target.lessonLength.value});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditStudentFormSubmission}
        buttonText="Update Student" />
    </React.Fragment>
  );
}

EditStudentForm.propTypes = {
  onEditStudent: PropTypes.func
};

export default EditStudentForm;