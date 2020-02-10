/*
* LectOld #2-4 state의 특징
* http://bit.ly/2LxVXsf
* -------
*
* ./src/components/CounterOld.js
* ./lect2016/Old24State 에서 랜더링
**/

import React from 'react';


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0}

    // 함수를 정의하면, 꼭!! 생성자에서 바인딩을 해줘야 함.
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  };

  // 콜백함수 정의
  handleClick() {
    this.setState({
      value: this.state.value + 1
    });
  }


  handleReset() {
    this.setState({
      value: 0
    });
  }

  // 랜더링에 JSX
  render() {
    return (
      <div>
        <div>* Components = <b>Counter01.js</b></div>
        
        <h1>01.Simple Tick Counter</h1>
        <h2> value: {this.state.value}</h2>
        <button onClick={this.handleClick}> TICK COUNTER PLUS!</button> &nbsp;
        <button onClick={this.handleReset}> RESET to '0'</button>
      </div>
    );
  }
}


export default Counter;
