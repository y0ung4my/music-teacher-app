import React from "react";
import PropTypes from "prop-types";
import Transaction from "./Transaction";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
// import { orderBy } from "firebase/firestore";

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
            studentName={transaction.studentName}
            month={transaction.month}
            amountPaid={transaction.amountPaid}
            lessonCount={transaction.lessonCount}
            id={transaction.id}
            key={transaction.id} />
        })}
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