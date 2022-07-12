import formVisibleReducer from './form-visible-reducer';
import studentListReducer from './student-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainStudentList: studentListReducer
});

export default rootReducer;