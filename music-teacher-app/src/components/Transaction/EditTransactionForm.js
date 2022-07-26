import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";

function EditTransactionForm (props) {
  const { transaction } = props;
  const firestore = useFirestore();

  function handleEditTransactionFormSubmission(event) {
    event.preventDefault();
    props.onEditTransaction();
    const propertiesToUpdate = { name: event.target.name.value, email: event.target.email.value, phone: event.target.phone.value, timeSlot: event.target.timeSlot.value, lessonLength: event.target.lessonLength.value, note: event.target.lessonLength.value };
    return firestore.update({ collection: "transactions", doc: transaction.id }, propertiesToUpdate);
  }

  return (
    <React.Fragment>
      <ReusableForm 
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