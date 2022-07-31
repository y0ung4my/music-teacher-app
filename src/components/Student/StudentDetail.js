import React from "react";
import PropTypes from "prop-types";

function StudentDetail(props){
  const { student, onClickingDelete } = props;

  // console.log(student);
  return (
    <React.Fragment>
      <h1>Student Detail</h1>
      <h3>{student.name} - {student.timeSlot}</h3>
      <p><em>{student.lessonLength}</em></p>
      <p><em>{student.email}</em></p>
      <p><em>{student.phone}</em></p>
      <p><em>{student.note}</em></p>
      <button class="btn btn-secondary"onClick={ props.onClickingEdit }>Update Student</button>
      <button class="btn btn-secondary"onClick={() => onClickingDelete(student.id)}>Delete Student</button>
      {/* <button class="btn btn-secondary"onClick={props.handleStudentStateClick}>{props.buttonText}</button> */}
      <hr/>
    </React.Fragment>
  );
}

StudentDetail.propTypes = {
  student: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default StudentDetail;