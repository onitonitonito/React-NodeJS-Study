/*
* 누구든지 하는 리액트 - #9 state
* http://bit.ly/2GG0Hxf
* -------
*
* ./src/components/Counter.js
* ./lect2018/Lect9 에서 랜더링
*
**/

import React from 'react';


class Counter extends React.Component {
  state = { number: 0, };

  // handleIncrease = () => {
  //   this.setState({
  //     number: this.state.number + 1
  //   });
  // };
  //
  // handleDecrease = () => {
  //   this.setState({
  //     number: this.state.number - 1
  //   });
  // };

  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  };

  handleIncrease() {
    console.log(this.state.number);
    this.setState({
      number: this.state.number + 1
    });
  };

  handleDecrease() {
    console.log(this.state.number);
    this.setState({
      number: this.state.number - 1
    })
  };

  render() {
    return(
      <div>
        <h1>Simple Counter</h1>
        <div>Value: {this.state.number}</div>
        <button onClick={this.handleDecrease}> - </button>
        <button onClick={this.handleIncrease}> + </button>
      </div>
    )
  };
}



export default Counter;

/*
(1) 화살표 함수를 사용할때는 그냥 this.state.value를 사용하고

(2) 일반함수를 사용할 때는 constructor 에서 꼭 bind 를 해줘야 함.
  - constructor 는 props 를 내려받음 ... constructor(props)
  - 제일 처음으로 supuer(props) 를 상속 함
  - this.function = this.function.bind(this);

**/
