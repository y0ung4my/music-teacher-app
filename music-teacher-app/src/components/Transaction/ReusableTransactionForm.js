import React from "react";
import PropTypes from "prop-types";

function ReusableTransactionForm(props) {
  return (
    <React.Fragment>
      <form class="form-group" onSubmit={props.formSubmissionHandler}>
        <input class="form-control"
          type='text'
          name='month'
          placeholder='Month' />
        <input class="form-control"
          type='text'
          name='amountDue'
          placeholder='Amount Paid' />
        <input class="form-control"
          type='text'
          name='amountPaid'
          placeholder='Amount Paid' />
        <input class="form-control"
          type='text'
          name='lessonCount'
          placeholder='# of lessons' />
        <input class="form-control"
          type='text'
          name='studentName'
          placeholder='Student Name' />
        <textarea class="form-control"
          name='note'
          placeholder='notes' />
        {/* <button class="btn btn-secondary"type='submit'>{props.buttonText}</button> */}
      </form>
    </React.Fragment>
  );
}

ReusableTransactionForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableTransactionForm;