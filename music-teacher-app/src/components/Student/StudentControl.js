import React from 'react';
import NewStudentForm from './NewStudentForm';
import StudentList from './StudentList';
import StudentDetail from './StudentDetail';
import EditStudentForm from './EditStudentForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from '../../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';

class StudentControl extends React.Component {

  constructor(props) {
    super(props);
    // console.log(props); 
    this.state = {
      selectedStudent: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedStudent != null) {
      this.setState({
        selectedStudent: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
      }
    }

  handleAddingNewStudentToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedStudent = (id) => {
    this.props.firestore.get({collection: 'students', doc: id}).then((student) => {
      const firestoreStudent = {
        name: student.get("name"),
        email: student.get("email"),
        phone: student.get("phone"),
        timeSlot: student.get("timeSlot"),
        lessonLength: student.get("lessonLength"),
        note: student.get("note"),
        id: student.id
      }
      this.setState({selectedStudent: firestoreStudent });
    });
  }

  handleDeletingStudent = (id) => {
    this.props.firestore.delete({ collection: "students", doc: id });
    // const { dispatch } = this.props;
    // const action = a.deleteStudent(id);
    // dispatch(action);
    this.setState({selectedStudent: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingStudentInList = () => {
    // const { dispatch } = this.props;
    // const action = a.addStudent(studentToEdit);
    // dispatch(action);
    this.setState({
      editing: false,
      selectedStudent: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditStudentForm student = {this.state.selectedStudent} onEditStudent = {this.handleEditingStudentInList} />
      buttonText = "Return to Student List";
    } else if (this.state.selectedStudent != null) {
      currentlyVisibleState = 
      <StudentDetail 
        student = {this.state.selectedStudent} 
        onClickingDelete = {this.handleDeletingStudent} 
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Student List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewStudentForm onNewStudentCreation={this.handleAddingNewStudentToList}  />;
      buttonText = "Return to Student List";
    } else {
      currentlyVisibleState = <StudentList onStudentSelection={this.handleChangingSelectedStudent} />;
      buttonText = "Add Student";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button class="btn btn-secondary" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

StudentControl.propTypes = {
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

StudentControl = connect(mapStateToProps)(StudentControl);
export default withFirestore(StudentControl);