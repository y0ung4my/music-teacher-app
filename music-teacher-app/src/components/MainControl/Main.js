import React from "react";
import PropTypes from "prop-types";

function Main(props) {
  
    return (
      <React.Fragment>
        <hr />
        <button class="btn btn-secondary"onClick={props.onStudentControlSelection}>Students</button>
        <button class="btn btn-secondary"onClick={props.onTransactionControlSelection }>Transactions</button>
      </React.Fragment>
    );
  } 


Main.propTypes = {
  onStudentControlSelection: PropTypes.func,
  onTransactionControlSelection: PropTypes.func
};

export default Main;