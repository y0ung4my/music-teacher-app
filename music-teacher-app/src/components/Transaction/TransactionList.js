import React from "react";
import PropTypes from "prop-types";
import Transaction from "./Transaction";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function TransactionList(props) {
  
  useFirestoreConnect([
    { collection: 'transactions' }
  ]);

  const transactions = useSelector(state => state.firestore.ordered.transactions);

  if (isLoaded(transactions)) {
    return (
      <React.Fragment>
        <hr />
        {transactions.map((transaction) => {
          return <Transaction
            whenTransactionClicked={props.onTransactionSelection}
            month={transaction.month}
            amountDue={transaction.amountDue}
            amountOwed={transaction.amountOwed}
            lessonCount={transaction.lessonCount}
            studentName={transaction.studentName}
            note={transaction.note}
            id={transaction.id}
            key={transaction.id} />
        })}
        <button onClick={props.onMainSelection}>Back to Main</button>
        <button onClick={props.handleTransactionStateClick}>{props.buttonText}</button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}



TransactionList.propTypes = {
  onMainSelection: PropTypes.func,
  onTransactionSelection: PropTypes.func,
  handleTransactionStateClick: PropTypes.func
};

export default TransactionList;