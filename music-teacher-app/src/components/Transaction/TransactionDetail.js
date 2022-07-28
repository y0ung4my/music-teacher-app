import React from "react";
import PropTypes from "prop-types";

function TransactionDetail(props){
  const { transaction, onClickingDelete } = props;

  // console.log(transaction);
  return (
    <React.Fragment>
      <h1>Transaction Detail</h1>
      <h3>{transaction.month} - {transaction.studentName}</h3>
      <p><em>Due: {transaction.amountDue}</em></p>
      <p><em>Paid: {transaction.amountPaid}</em></p>
      <p><em>Lessons: {transaction.lessonCount}</em></p>
      <p><em>{transaction.note}</em></p>
      <button class="btn btn-secondary"onClick={ props.onClickingEdit }>Update Transaction</button>
      <button class="btn btn-secondary"onClick={() => onClickingDelete(transaction.id)}>Delete Transaction</button>
      <button class="btn btn-secondary"onClick={props.handleTransactionStateClick}>{props.buttonText}</button>
      <hr/>
    </React.Fragment>
  );
}

TransactionDetail.propTypes = {
  transaction: PropTypes.object,
  handleTransactionStateClick: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TransactionDetail;