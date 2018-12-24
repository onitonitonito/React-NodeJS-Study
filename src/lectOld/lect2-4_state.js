/*
* 강좌2-4편 = state
* -----
*
*
*
*
**/

import React from 'react';
import ReactDOM from 'react-dom';



class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0}

    // 함수를 정의하면 꼭 생성자에서 바인딩을 해줘야 함.
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
        <h4> value: {this.state.value}</h4>
        <button onClick={this.handleClick}>TICK</button>
      </div>
    );
  }
}



class App extends React.Component {
  render() {
    return (
      <Counter/>
    );
  }
};


ReactDOM.render(<App></App>, document.getElementById("root"));
