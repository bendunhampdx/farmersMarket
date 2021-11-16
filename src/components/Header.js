import React from 'react';
import farmImage from './../img/farm.jpeg';

function Header() {
  return (
    <React.Fragment>
      <div class="App-header">
        <h1>Farmers Market</h1>
        <img src={farmImage} id="farmPic" alt="farmers market" />
      </div>
    </React.Fragment>
  );
}

export default Header;