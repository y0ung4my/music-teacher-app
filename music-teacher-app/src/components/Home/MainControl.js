// import React from 'react';
// import Main from './Home';
// import { connect } from 'react-redux';
// import PropTypes from "prop-types";
// import NewStudentForm from '../Student/NewStudentForm';
// import StudentList from '../Student/StudentList';
// import StudentDetail from '../Student/StudentDetail';
// import EditStudentForm from '../Student/EditStudentForm';
// // import StudentControl from "./StudentControl";
// // import TransactionControl from "./TransactionControl";
// import NewTransactionForm from '../Transaction/NewTransactionForm';
// import TransactionList from '../Transaction/TransactionList';
// import TransactionDetail from '../Transaction/TransactionDetail';
// import EditTransactionForm from '../Transaction/EditTransactionForm';
// import * as a from '../../actions';
// import { withFirestore, isLoaded } from 'react-redux-firebase';

// class MainControl extends React.Component {

//   constructor(props) {
//     super(props);
//     // console.log(props); // CONSOLE LOG
//     this.state = {
//       studentControlSelected: false,
//       transactionControlSelected: false,
//       selectedStudent: null,
//       selectedTransaction: null,
//       editingStudent: false,
//       editingTransaction: false,
//       studentFormVisibleOnPage: false,
//       transactionFormVisibleOnPage: false,
//     };
//     // console.log(this.state);
//   }

//   handleMainClick = () => {
//     this.setState({
//       studentControlSelected: false,
//       transactionControlSelected: false
//     })
//   }

//   handleStudentClick = () => {
//       this.setState({
//         studentControlSelected: true
//       });
//   }

//   handleTransactionClick = () => {
//     this.setState({
//       transactionControlSelected: true
//     });
// }

//   handleStudentStateClick = () => {
//     if (this.state.selectedStudent != null) {
//       this.setState({
//         selectedStudent: null,
//         editingStudent: false
//       });
//     } else {
//       this.setState({
//         studentFormVisibleOnPage: true
//       });
//       // const { dispatch } = this.props;
//       // const action = a.toggleStudentForm();
//       // dispatch(action);
//       }
//   }

//   handleTransactionStateClick = () => {
//     if (this.state.selectedTransaction != null) {
//       this.setState({
//         selectedTransaction: null,
//         editingTransaction: false
//       });
//     } else {
//       this.setState({
//         transactionFormVisibleOnPage: true
//       });
//       }
//     }


//   handleAddingNewStudentToList = () => {
//     this.setState({
//       studentFormVisibleOnPage: false
//     });
//   }

//   handleChangingSelectedStudent = (id) => {
//     this.props.firestore.get({collection: 'students', doc: id}).then((student) => {
//       const firestoreStudent = {
//         name: student.get("name"),
//         email: student.get("email"),
//         phone: student.get("phone"),
//         timeSlot: student.get("timeSlot"),
//         lessonLength: student.get("lessonLength"),
//         note: student.get("note"),
//         id: student.id
//       }
//       this.setState({selectedStudent: firestoreStudent });
//     });
//   }

//   handleDeletingStudent = (id) => {
//     this.props.firestore.delete({ collection: "students", doc: id });
//     // const { dispatch } = this.props;
//     // const action = a.deleteStudent(id);
//     // dispatch(action);
//     this.setState({selectedStudent: null});
//   }

//   handleEditStudentClick = () => {
//     this.setState({editingStudent: true});
//   }

//   handleEditingStudentInList = () => {
//     // const { dispatch } = this.props;
//     // const action = a.addStudent(studentToEdit);
//     // dispatch(action);
//     this.setState({
//       editingStudent: false,
//       selectedStudent: null
//     });
//   }
  
//   // handleTransactionClick = () => {
//   //   this.setState({
//   //     transactionControlSelected: true,
//   //     studentControlSelected: false
//   //     });
//   // }

//   handleAddingNewTransactionToList = () => {
//     this.setState({
//       transactionFormVisibleOnPage: false
//     });
//   }

//   handleChangingSelectedTransaction = (id) => {
//     this.props.firestore.get({collection: 'transactions', doc: id}).then((transaction) => {
//       const firestoreTransaction = {
//         month: transaction.get("month"),
//         amountDue: transaction.get("amountDue"),
//         amountPaid: transaction.get("amountPaid"),
//         lessonCount: transaction.get("lessonCount"),
//         studentName: transaction.get("studentName"),
//         note: transaction.get("note"),
//         id: transaction.id
//       }
//       this.setState({selectedTransaction: firestoreTransaction });
//     });
//   }

//   handleDeletingTransaction = (id) => {
//     this.props.firestore.delete({ collection: "transactions", doc: id });
//     // const { dispatch } = this.props;
//     // const action = a.deleteTransaction(id);
//     // dispatch(action);
//     this.setState({selectedTransaction: null});
//   }

//   handleEditTransactionClick = () => {
//     this.setState({editingTransaction: true});
//   }

//   handleEditingTransactionInList = () => {
//     // const { dispatch } = this.props;
//     // const action = a.addTransaction(transactionToEdit);
//     // dispatch(action);
//     this.setState({
//       editingTransaction: false,
//       selectedTransaction: null
//     });
//   }



//   render(){
//     let currentlyVisibleState = null;
//     console.log(currentlyVisibleState);
//     let buttonText = null;
//     console.log(this.state);
//     if (this.state.editingStudent) {
//       currentlyVisibleState = <EditStudentForm student={this.state.selectedStudent} onEditStudent={this.handleEditingStudentInList} buttonText = "Return to Student List" />
//       ;
//     } else if (this.state.studentControlSelected && this.state.selectedStudent != null) {
//       // console.log(this.state);
//       currentlyVisibleState =
//         <StudentDetail
//           student={this.state.selectedStudent}
//           onClickingDelete={this.handleDeletingStudent}
//           onClickingEdit={this.handleEditStudentClick}
//           handleStudentStateClick={this.handleStudentStateClick} buttonText="Return to Student List" />
          
//     } else if (this.state.studentFormVisibleOnPage == true) {
//       currentlyVisibleState = <NewStudentForm onNewStudentCreation={this.handleAddingNewStudentToList} buttonText = "Return to Student List"/>;
//       ;
//     } else if (this.state.selectedStudent == null && this.state.studentControlSelected) {
//       currentlyVisibleState = <StudentList studentList={this.props.mainStudentList} onStudentSelection={this.handleChangingSelectedStudent} onMainSelection={this.handleMainClick} handleStudentStateClick={this.handleStudentStateClick} buttonText = "Add Student" />;
//     } else if (this.state.editingTransaction) {
//       currentlyVisibleState = <EditTransactionForm transaction={this.state.selectedTransaction} onEditTransaction={this.handleEditingTransactionInList} buttonText = "Return to Transaction List"/>
//       ;
//     } else if (this.state.selectedTransaction != null) {
//       currentlyVisibleState =
//         <TransactionDetail
//           transaction={this.state.selectedTransaction}
//           onClickingDelete={this.handleDeletingTransaction}
//           onClickingEdit={this.handleEditTransactionClick} handleTransactionStateClick={this.handleTransactionStateClick} buttonText = "Return to Transaction List"/>
          
        
//       } else if (this.state.transactionFormVisibleOnPage) {
//         currentlyVisibleState = <NewTransactionForm onNewTransactionCreation={this.handleAddingNewTransactionToList} buttonText = "Return to Transaction List" />;
//         ;
//       } else if (!this.state.selectedTransaction && this.state.transactionControlSelected) {
//       currentlyVisibleState = <TransactionList transactionList={this.props.mainTransactionList} onTransactionSelection={this.handleChangingSelectedTransaction} onMainSelection={this.handleMainClick} handleTransactionStateClick={this.handleTransactionStateClick} buttonText = "Add Transaction"/>
//     } else {
//       // console.log("oops")
//       currentlyVisibleState = <Main onStudentControlSelection={this.handleStudentClick} onTransactionControlSelection={this.handleTransactionClick} />
//     }
//     return (
//       <React.Fragment>
//         {currentlyVisibleState}
        
//       </React.Fragment>
//     );
//   }

// }


// MainControl.propTypes = {
//   mainStudentList: PropTypes.object,
//   mainTransactionList: PropTypes.object,
//   // studentFormVisibleOnPage: PropTypes.bool,
//   // transactionFormVisibleOnPage: PropTypes.bool
// };

// const mapStateToProps = state => {
//   return {
//     mainStudentList: state.mainStudentList,
//     mainTransactionList: state.mainTransactionList,
//     // studentFormVisibleOnPage: state.studentFormVisibleOnPage,
//     // transactionFormVisibleOnPage: state.transactionFormVisibleOnPage
//   }
// }

// MainControl = connect(mapStateToProps)(MainControl);
// export default withFirestore(MainControl);