import formVisibleReducer from './form-visible-reducer';
import studentListReducer from './student-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainStudentList: studentListReducer,
  firestore: firestoreReducer
});

export default rootReducer;