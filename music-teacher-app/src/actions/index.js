import * as c from './ActionTypes';

export const deleteStudent = id => ({
  type: c.DELETE_STUDENT,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addStudent = (student) => {
  const { name, email, phone, id, timeSlot, lessonLength, note } = student;
  return {
    type: c.ADD_STUDENT,
    name: name,
    email: email,
    phone: phone,
    id: id,
    timeSlot: timeSlot,
    lessonLength: lessonLength,
    note: note
  }
}
