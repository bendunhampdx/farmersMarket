import React from "react";
import PropTypes from "prop-types";

function Month(props){
  return (
    <React.Fragment>
      <h3>{props.month}</h3>
      <h3>{props.selection.map((produce) =>
        <li>{produce}</li>
      )}</h3>
      <hr />
    </React.Fragment>
  );
}


Month.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string,
};

export default Month;
