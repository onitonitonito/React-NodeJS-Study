/*
* 누구든지 하는 리액트 - #9 state
* http://bit.ly/2GG0Hxf
* -------
*
* ./src/components/Counter.js
* ./lect2018/Lect9 에서 랜더링
*
* (1) 화살표 함수를 사용할때는 그냥 this.state.value를 사용하고
*
* (2) 일반함수를 사용할 때는 constructor 에서 꼭 bind 를 해줘야 함.
*   - constructor 는 props 를 내려받음 ... constructor(props)
*   - 제일 처음으로 supuer(props) 를 상속 함
*   - this.function = this.function.bind(this);
*
* handleIncrease = () => {
*   this.setState({
*     number: this.state.number + 1
*   });
* };
*
* handleDecrease = () => {
*   this.setState({
*     number: this.state.number - 1
*   });
* };
**/

import React from 'react';

class Counter extends React.Component {

  static defaultProps = {
    numMin : 1,
    numMax : 5,
  };

  state = {
    number: this.props.numMin,
    graph  : '■'.repeat(this.props.numMin) + '□'.repeat(this.props.numMax - this.props.numMin),
  };

  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  };


  handleIncrease() {
    if (this.state.number < this.props.numMax) {
      this.setState({
        number: ++this.state.number,
        graph : '■'.repeat(this.state.number) + '□'.repeat(this.props.numMax - this.state.number),
      });
    }
  };

  handleDecrease() {
    if (this.state.number > this.props.numMin) {
      this.setState({
        number: --this.state.number,
        graph : '■'.repeat(this.state.number) + '□'.repeat(this.props.numMax - this.state.number),
      })
    }
  };

  render() {
    return(
      <div>
        <div>* Components = <b>Counter02.js</b></div>
        
        <h1>02.Simple Gauge Counter</h1>
        <div>
          Value ({this.props.numMin}~{this.props.numMax}) {this.state.graph}
        </div>
        <button onClick={this.handleDecrease}> Value Minus (-)</button> &nbsp;
        <input type={"text"} id={"text"} value={this.state.number}/> &nbsp;
         <button onClick={this.handleIncrease}> Value Plus (+)</button>
      </div>
    )
  };
}

export default Counter;
