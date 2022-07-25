import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase'

function NewTransactionForm(props) {
  
  const firestore = useFirestore();

  function addTransactionToFirestore(event) {
    event.preventDefault();
    props.onNewTransactionCreation();

    return firestore.collection('transactions').add(
      {
        month: event.target.month.value,
        amountDue: event.target.amountDue.value,
        amountPaid: event.target.amountPaid.value,
        lessonCount: event.target.lessonCount.value,
        studentName: event.target.studentName.value,
        note: event.target.note.value
      }
    )
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addTransactionToFirestore}
        buttonText="Submit" />
    </React.Fragment>
  );
}

NewTransactionForm.propTypes = {
  onNewTransactionCreation: PropTypes.func
};

export default NewTransactionForm;