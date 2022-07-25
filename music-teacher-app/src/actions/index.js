import * as c from './ActionTypes';

export const deleteStudent = id => ({
  type: c.DELETE_STUDENT,
  id
});

export const deleteTransaction = id => ({
  type: c.DELETE_TRANSACTION,
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

export const addTransaction = (transaction) => {
  const { month, amountDue, amountPaid, id, lessonCount, studentName, note } = transaction;
  return {
    type: c.ADD_TRANSACTION,
    month: month,
    amountDue: amountDue,
    amountPaid: amountPaid,
    id: id,
    lessonCount: lessonCount,
    studentName: studentName,
    note: note
  }
}
