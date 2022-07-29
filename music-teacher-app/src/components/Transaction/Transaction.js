import React from "react";
import PropTypes from "prop-types";

function Transaction(props){
  return (
    <React.Fragment>
      <div class="card border-light mb-3" id="card" onClick = {() => props.whenTransactionClicked(props.id)}>
        <h3 class="card-header">{props.month}</h3>
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