/*
* 강좌3-1편 = Templates
* -----
* _env_setting
*
*
*
**/

import React, {Component, Fragment} from 'react';


class App extends Component {
  render() {
    return(
      <Fragment>
        <div>* Components = <b>'Lect03-1App.js'</b></div>
        <h1> Hello!<span role="img" aria-label="wave">👋</span></h1>
      </Fragment>
    );
  }
};

export default App;
