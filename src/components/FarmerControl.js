import React from "react";
import WeeklySched from "./WeeklySched"
import MonthlyProd from "./MonthlyProd"

class FarmerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <MonthlyProd />;
      buttonText = "Back to Weekly Schedule";
    } else {
      currentlyVisibleState = <WeeklySched />
      buttonText = "View Monthly Produce";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button id="friendButton" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default FarmerControl;