import formVisibleReducer from './form-visible-reducer';
import studentListReducer from './student-list-reducer';
import TransactionListReducer from './transaction-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainStudentList: studentListReducer,
  mainTransactionList: TransactionListReducer,
  firestore: firestoreReducer
});

export default rootReducer;