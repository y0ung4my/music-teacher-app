import React from "react";
import PropTypes from "prop-types";

function Transaction(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTransactionClicked(props.id)}>
        <h3>{props.month}</h3>
        <p>{props.amountDue}</p>
        <p>{props.amountPaid}</p>
        <p>{props.lessonCount}</p>
        <p>{props.studentName}</p>
        <p>{props.note}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Transaction.propTypes = {
  month: PropTypes.string,
  amountDue: PropTypes.string,
  amountPaid: PropTypes.string,
  lessonCount: PropTypes.string,
  studentName: PropTypes.string,
  note: PropTypes.string,
  id: PropTypes.string,
  whenTransactionClicked: PropTypes.func
};

export default Transaction;