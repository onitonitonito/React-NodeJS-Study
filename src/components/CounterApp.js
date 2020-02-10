/*
* 누구든지 하는 리액트 - #9 state : State
* http://bit.ly/2GG0Hxf
* -------
* Lect2018 Lect09App 과 동일한 내용
*
* Counter01 = + / - min,max
* Counter02 = tick counter
*
*
*
**/

import React from 'react';
import Counter1 from './Counter01';
import Counter2 from './Counter02';

class App extends React.Component {
  render() {
    return (
      <div>
      <Counter1 />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Counter2 numMin={5} numMax={20} />
      </div>
    );
  }
};

export default App;
