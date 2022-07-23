import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";

function EditStudentForm (props) {
  const { student } = props;
  const firestore = useFirestore();

  function handleEditStudentFormSubmission(event) {
    event.preventDefault();
    props.onEditStudent();
    const propertiesToUpdate = { name: event.target.name.value, email: event.target.email.value, phone: event.target.phone.value, timeSlot: event.target.timeSlot.value, lessonLength: event.target.lessonLength.value, note: event.target.lessonLength.value };
    return firestore.update({ collection: "students", doc: student.id }, propertiesToUpdate);
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
  student: PropTypes.object,
  onEditStudent: PropTypes.func
};

export default EditStudentForm;