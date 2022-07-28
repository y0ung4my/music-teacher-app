import React from "react";
import PropTypes from "prop-types";
import Student from "./Student";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function StudentList(props) {
  
  useFirestoreConnect([
    { collection: 'students' }
  ]);

  const students = useSelector(state => state.firestore.ordered.students);

  if (isLoaded(students)) {
    return (
      <React.Fragment>
        <hr />
        {students.map((student) => {
          return <Student
            whenStudentClicked={props.onStudentSelection}
            name={student.name}
            email={student.email}
            phone={student.phone}
            timeSlot={student.timeSlot}
            lessonLength={student.lessonLength}
            note={student.note}
            id={student.id}
            key={student.id} />
        })}
        <button class="btn btn-secondary"onClick={props.onMainSelection}>Back to Main</button>
        <button class="btn btn-secondary"onClick={props.handleStudentStateClick}>{props.buttonText}</button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}



StudentList.propTypes = {
  onStudentSelection: PropTypes.func,
  onMainSelection: PropTypes.func,
  handleStudentStateClick: PropTypes.func
};

export default StudentList;