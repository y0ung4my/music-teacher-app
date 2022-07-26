import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='month'
          placeholder='Month' />
        <input
          type='text'
          name='amountDue'
          placeholder='Amount Paid' />
        <input
          type='text'
          name='amountPaid'
          placeholder='Amount Paid' />
        <input
          type='text'
          name='lessonCount'
          placeholder='# of lessons' />
        <input
          type='text'
          name='studentName'
          placeholder='Student Name' />
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