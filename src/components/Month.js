import React from "react";
import PropTypes from "prop-types";

function Month(props){
  return (
    <React.Fragment>
      <div class="month">
        <h3>{props.month}</h3>
        <h3 class="produce">{props.selection.map((produce) =>
          <li>{produce}</li>
        )}</h3>
        {/* <hr /> */}
      </div>
    </React.Fragment>
  );
}


Month.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string,
};

export default Month;
