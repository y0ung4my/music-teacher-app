import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Student Name' />
        <input
          type='text'
          name='email'
          placeholder='Email' />
        <input
          type='text'
          name='phone'
          placeholder='Phone' />
        <input
          type='text'
          name='timeSlot'
          placeholder='Weekly Lesson Time' />
        <input
          type='text'
          name='lessonLength'
          placeholder='Lesson Length (minutes)' />
        <textarea
          name='note'
          placeholder='notes' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;