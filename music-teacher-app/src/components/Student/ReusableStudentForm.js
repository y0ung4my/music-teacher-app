import React from "react";
import PropTypes from "prop-types";

function ReusableStudentForm(props) {
  return (
    <React.Fragment>
      <form class="form-group" onSubmit={props.formSubmissionHandler}>
        <input class="form-control"
          type='text'
          name='name'
          placeholder='Student Name' />
        <input class="form-control"
          type='text'
          name='email'
          placeholder='Email' />
        <input class="form-control"
          type='text'
          name='phone'
          placeholder='Phone' />
        <input class="form-control"
          type='text'
          name='timeSlot'
          placeholder='Weekly Lesson Time' />
        <input class="form-control"
          type='number'
          name='lessonLength'
          placeholder='Lesson Length (minutes)' />
        <textarea class="form-control"
          name='note'
          placeholder='notes' />
        <button class="btn btn-secondary"type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableStudentForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableStudentForm;