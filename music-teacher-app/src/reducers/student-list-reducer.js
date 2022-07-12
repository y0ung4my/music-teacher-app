import * as c from './../actions/ActionTypes';


export default (state = {}, action) => {
  const { name, email, phone, id, timeSlot, lessonLength, note } = action;
  switch (action.type) {
    case c.ADD_STUDENT:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          email: email,
          phone: phone,
          id: id,
          timeSlot: timeSlot,
          lessonLength: lessonLength,
          note: note
        }
      });
    case c.DELETE_STUDENT:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};