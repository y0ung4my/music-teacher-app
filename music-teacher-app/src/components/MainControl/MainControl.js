import React from 'react';
import Main from './Main';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import StudentControl from "../Student/StudentControl";
import TransactionControl from "../Transaction/TransactionControl"
import { withFirestore, isLoaded } from 'react-redux-firebase';

class MainControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props); // CONSOLE LOG
    this.state = {
      studentControlSelected: null,
      billingControlSelected: null
      
    };
  }

  handleStudentClick = () => {
      this.setState({
        billingControlSelected: false,
        studentControlSelected: true
      });
  }
  
  handleTransactionClick = () => {
    this.setState({
      billingControlSelected: true,
      studentControlSelected: false
      });
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.studentControlSelected) {      
      currentlyVisibleState = <StudentControl />;
    } else if (this.state.billingControlSelected) {
      currentlyVisibleState = <TransactionControl />;
    } else {
      currentlyVisibleState = <Main onStudentControlSelection={this.handleStudentClick} onTransactionControlSelection={this.handleTransactionClick} />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

MainControl.propTypes = {
  studentControlSelected: PropTypes.bool,
  studentControlSelected: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    studentControlSelected: state.studentControlSelected,
    studentControlSelected: state.studentControlSelected
  }
}

MainControl = connect(mapStateToProps)(MainControl);
export default MainControl;