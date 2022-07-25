import React from "react";
import PropTypes from "prop-types";

function Main(props) {
  
    return (
      <React.Fragment>
        <hr />
        <button onClick={props.onStudentControlSelection}>Students</button>
        <button onClick={ props.onTransactionControlSelection }>Transaction</button>
      </React.Fragment>
    );
  } 


Main.propTypes = {
  onStudentControlSelection: PropTypes.func,
  onTransactionControlSelection: PropTypes.func
};

export default Main;