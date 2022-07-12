import React from "react";
import PropTypes from "prop-types";

function StudentDetail(props){
  const { student, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Student Detail</h1>
      <h3>{student.location} - {student.names}</h3>
      <p><em>{student.issue}</em></p>
      <button onClick={ props.onClickingEdit }>Update Student</button>
      <button onClick={()=> onClickingDelete(student.id) }>Close Student</button>
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