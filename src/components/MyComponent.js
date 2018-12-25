import React, { Component } from 'react';


class MyComponent extends Component {
  state = { value: 0,};

  static getDerivedStateFromProps(nextProps, prevState) {
    // <p>getDerivedStateFromProps(nextProps, prevState) 에서..</p>
    // <p>Props와 State 값이 다를경우, Props의 값을 따라간다.</p>
    // Props=5 를 받았고, State = 0 을 가졌지만, 5로 통일한다.
    if (prevState.value !== nextProps.value) {
      return { value: nextProps.value, };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 버튼을 누르다가, 10이 되면, 업데이트 안하고 skip
    // 또 한번 버튼을 누르면 스킵되서, 11로 넘어간다.
    if (nextProps.value === 10) return false;
    return true;
  }

  componentDidUpdate(prevProps, PrevState) {
    if (this.props.value !== prevProps.value ) {
      console.log('Value 값이 바뀌었다!', this.props.value);
    }
  }

  componentWillUnmount() {
    console.log('Good Bye~! : componentWillUnmount');
  }

  // missing 값이 undefined 됬는데, something 값을 어떻게 불러오겠다는거냐?
  // TypeError: Cannot read property 'something' of undefined

  render() {
    return (
      <div>
        {this.props.missing.something}
        <p>
          getDerivedStateFromProps(nextProps, prevState) 에서..<br />
          Props와 State 값이 다를경우, Props의 값을 따라 간다.
        </p>
        <p> props : {this.props.value}</p>
        <p> state : {this.state.value}</p>
      </div>
  )
  };
}

export default MyComponent;
