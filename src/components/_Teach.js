/*
* Component Basic
*
**/

import React, {Component, Fragment} from 'react';

class App extends Componet {
// (1) outside function
// function name(*args) {
//   consol.log(`이것을 인쇄하세요 ${*args}`);
// }
  constructor(props) {
    super(props);

    this.name = this.name.bind(this);
    this.that = this.that.bind(this)
  }

  name(*args) {
    consol.log(`이것을 인쇄하세요 ${*args}`);
  }

  render () {
    // (2) inside function
    const name = (*args) => {
      consol.log(`저것을 인쇄하세요 ${*args}`);
    }

    return (
      {/*JSX 문법만 사용가능!*/}
       if 1==2 ? true : flase
      (function() {})();
      ( () => {})();
    );
  }
}


export default App;
