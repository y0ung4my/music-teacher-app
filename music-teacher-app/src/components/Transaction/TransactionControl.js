import React from 'react';
import NewTransactionForm from './NewTransactionForm';
import TransactionList from './TransactionList';
import TransactionDetail from './TransactionDetail';
import EditTransactionForm from './EditTransactionForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from '../../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';

class TransactionControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props); // CONSOLE LOG
    this.state = {
      selectedTransaction: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedTransaction != null) {
      this.setState({
        selectedTransaction: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
      }
    }

  handleAddingNewTransactionToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedTransaction = (id) => {
    this.props.firestore.get({collection: 'transactions', doc: id}).then((transaction) => {
      const firestoreTransaction = {
        month: transaction.get("month"),
        amountDue: transaction.get("amountDue"),
        amountPaid: transaction.get("amountPaid"),
        lessonCount: transaction.get("lessonCount"),
        studentName: transaction.get("studentName"),
        note: transaction.get("note"),
        id: transaction.id
      }
      this.setState({selectedTransaction: firestoreTransaction });
    });
  }

  handleDeletingTransaction = (id) => {
    this.props.firestore.delete({ collection: "transactions", doc: id });
    // const { dispatch } = this.props;
    // const action = a.deleteTransaction(id);
    // dispatch(action);
    this.setState({selectedTransaction: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingTransactionInList = () => {
    // const { dispatch } = this.props;
    // const action = a.addTransaction(transactionToEdit);
    // dispatch(action);
    this.setState({
      editing: false,
      selectedTransaction: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditTransactionForm transaction = {this.state.selectedTransaction} onEditTransaction = {this.handleEditingTransactionInList} />
      buttonText = "Return to Transaction List";
    } else if (this.state.selectedTransaction != null) {
      currentlyVisibleState = 
      <TransactionDetail 
        transaction = {this.state.selectedTransaction} 
        onClickingDelete = {this.handleDeletingTransaction} 
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Transaction List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewTransactionForm onNewTransactionCreation={this.handleAddingNewTransactionToList}  />;
      buttonText = "Return to Transaction List";
    } else {
      currentlyVisibleState = <TransactionList onTransactionSelection={this.handleChangingSelectedTransaction} />;
      buttonText = "Add Transaction";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button class="btn btn-secondary" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

TransactionControl.propTypes = {
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

TransactionControl = connect(mapStateToProps)(TransactionControl);
export default withFirestore(TransactionControl);