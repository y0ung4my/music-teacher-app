import * as c from './../actions/ActionTypes';


export default (state = {}, action) => {
  const { month, amountDue, amountPaid, id, lessonCount, studentName, note } = action;
  switch (action.type) {
    case c.ADD_TRANSACTION:
      return Object.assign({}, state, {
        [id]: {
          month: month,
          amountDue: amountDue,
          amountPaid: amountPaid,
          id: id,
          lessonCount: lessonCount,
          studentName: studentName,
          note: note
        }
      });
    case c.DELETE_TRANSACTION:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};