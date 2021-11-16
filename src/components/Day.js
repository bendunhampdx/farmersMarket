import React from "react";
import PropTypes from "prop-types";

function Day(props){
  return (
    <React.Fragment>
      <h3>{props.day} - {props.location}</h3>
      <p><strong>Hours: {props.hours}</strong></p>
      <p><em>Booth: {props.booth}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Day.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Day;
