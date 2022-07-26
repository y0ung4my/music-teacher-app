import React from "react";
import PropTypes from "prop-types";

function TransactionDetail(props){
  const { transaction, onClickingDelete } = props;

  console.log(transaction);
  return (
    <React.Fragment>
      <h1>Transaction Detail</h1>
      <h3>{transaction.month} - {transaction.studentName}</h3>
      <p><em>Due: {transaction.amountDue}</em></p>
      <p><em>Paid: {transaction.amountPaid}</em></p>
      <p><em>Lessons: {transaction.lessonCount}</em></p>
      <p><em>{transaction.note}</em></p>
      <button onClick={ props.onClickingEdit }>Update Transaction</button>
      <button onClick={()=> onClickingDelete(transaction.id) }>Delete Transaction</button>
      <hr/>
    </React.Fragment>
  );
}

TransactionDetail.propTypes = {
  transaction: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TransactionDetail;