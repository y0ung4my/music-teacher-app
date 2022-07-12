import React from "react";
import PropTypes from "prop-types";
import Student from "./Student";

function StudentList(props){
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.studentList).map((student) =>
        <Student
          whenStudentClicked = { props.onStudentSelection }
          names={student.names}
          location={student.location}
          issue={student.issue}
          formattedWaitTime={student.formattedWaitTime}
          id={student.id}
          key={student.id}/>
      )}
    </React.Fragment>
  );
}



StudentList.propTypes = {
  studentList: PropTypes.object,
  onStudentSelection: PropTypes.func
};

export default StudentList;