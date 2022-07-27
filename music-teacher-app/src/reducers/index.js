import studentFormVisibleReducer from './student-form-visible-reducer.js';
import transactionFormVisibleReducer from './student-form-visible-reducer.js';
import studentListReducer from './student-list-reducer';
import transactionListReducer from './transaction-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  // studentFormVisibleOnPage: studentFormVisibleReducer,
  // transactionFormVisibleOnPage: transactionFormVisibleReducer,
  mainStudentList: studentListReducer,
  mainTransactionList: transactionListReducer,
  firestore: firestoreReducer
});

export default rootReducer;