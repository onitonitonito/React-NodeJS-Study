/*
* LectOld #2-4 state의 특징
* http://bit.ly/2LxVXsf
* -------
*
* ./src/components/CounterOld.js
* ./lectOld/Old24State 에서 랜더링
**/

import React from 'react';


class CounterOld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0}

    // 함수를 정의하면, 꼭!! 생성자에서 바인딩을 해줘야 함.
    this.handleClick = this.handleClick.bind(this);
  };

  // 콜백함수 정의
  handleClick() {
    this.setState({
      value: this.state.value + 1
    });
  }

  // 랜더링에 JSX
  render() {
    return (
      <div>
        <h1> value: {this.state.value}</h1>
        <button onClick={this.handleClick}> TICK </button>
      </div>
    );
  }
}


export default CounterOld;
