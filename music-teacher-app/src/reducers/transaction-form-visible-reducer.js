import * as c from '../actions/ActionTypes';
// c is used for brevity, stands for constants

export default (state = false, action) => {
  // console.log(action.type)
  switch (action.type) {
    case c.TOGGLE_TRANSACTION_FORM:
      return !state;
    default:
      return state;
  }
};