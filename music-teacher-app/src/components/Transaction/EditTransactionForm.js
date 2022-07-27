import React from "react";
import ReusableTransactionForm from "./ReusableTransactionForm";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";

function EditTransactionForm (props) {
  const { transaction } = props;
  const firestore = useFirestore();

  function handleEditTransactionFormSubmission(event) {
    event.preventDefault();
    props.onEditTransaction();
    const propertiesToUpdate = { month: event.target.month.value, amountDue: event.target.amountDue.value, amountPaid: event.target.amountPaid.value, lessonCount: event.target.lessonCount.value, studentName: event.target.studentName.value, note: event.target.note.value };
    return firestore.update({ collection: "transactions", doc: transaction.id }, propertiesToUpdate);
  }

  return (
    <React.Fragment>
      <ReusableTransactionForm 
        formSubmissionHandler={handleEditTransactionFormSubmission}
        buttonText="Update Transaction" />
    </React.Fragment>
  );
}

EditTransactionForm.propTypes = {
  transaction: PropTypes.object,
  onEditTransaction: PropTypes.func
};

export default EditTransactionForm;