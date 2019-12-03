/*
* 누구든지 하는 리액트 - #10 Life Cycle API (ii) - LifeCycle2
* http://bit.ly/2Re5fyN
* -------
*
* 누구든지 하는 리액트 = https://react-anyone.vlpt.us/05.html
**/

import React, { Component } from 'react';
import MyComponent from '../components/MyComponent';
// import ReactDom from 'react-dom';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor!');

    this.handleClick = this.handleClick.bind(this);
  };

  state = {
    counter: 5,
    error: '앱에 에러가 났어요!',
  };

  componentDidMount() {
    console.log('componentDidMount!');
    console.log(this.myDiv.getBoundingClientRect().height);
  };

  // API를 통해서 서버로 오류 내용을 날리기
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
    this.setState({ error: true });
  };

  handleClick() {
    this.setState({
      counter: this.state.counter + 1,
    })
  };

  render() {
    if (this.state.error) {
      // <div ref={ref => this.myDiv = ref}>에러가 났어요!</div>
      return (
        <div ref={ref => this.myDiv = ref}>{this.state.error}</div>
      )
    }

    return (
      <div ref={ref => this.myDiv = ref}>
        <h2>안녕하세요 리액트!</h2>
        { this.state.counter < 10 && <MyComponent value={this.state.counter} />}
        <button onClick={this.handleClick}> ClickMe! </button>
      </div>
    );
  };
}



// ReactDom.render(<App/>, document.getElementById('root'));
export default App;


/*
Life Cycle API (2)


[Dep] componetWillMount() {
  // React v16.3 부터 해당 API는 deprecated ... 더이상 쓰지 않는다
}

componentDidMount() {
  // 외부 라이브러리 연동 : D3, masonry, etc
  // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
  // DOM 에 관련된 작업: 스크롤 설정, 크기, 읽어오기 등
}

[Dep] componentWillReceiveProps(nextProps) {
  // this.props 는 아직 바뀌지 않은 상태
  // React v16.3 부터 해당 API는 deprecated ... 더이상 쓰지 않는다
}


[NEW] static getDerivedStateFromProps(nextProps, prevState) {
  // componentWillReceiveProps 가 deprecated 되면서 새로 생긴 매서드
  // 여기서는 setState 를 하는 것이 아니라
  // 특정 Props 가 바뀔때 설정하고, 설정하고 싶은 state 값을
  // 리턴하는 형태로 사용됩니다.
  /*

  if (nextProps.value !== prevState.value) {
    return { value: nextProps.value};
  }

  return null;
  // null 리턴은 '따로 업데이트 할 것이 없다'는 의미!
  ../
}

shouldComponentUpdate(nextProps, IndexState) {
  // return false 하면 업데이트를 안함.
  // shouldCompnent는 그냥 특정 조건일때,업데이트을 막아주는 함수역할.
  // return this.props.checked !== nextProps.checked
  return true;
}


[New] getSnapshotBeforeUpdate() {
  // 이 API가 발생하는 시점은 다음과 같음.
  // 1. render()
  // 2. getSnapshotBeforeUpdate()
  // 3. 실제 DOM 에서 변화가 발생
  // 4. componentDidUpdate()
  // DOM 에 변화가 일어나기 직전의 DOM상태를 가져오고, 여기서 반환한 값은
  // componentDidUpdate 에서 3번째 파라미터로 받아올수 있음
}

componentDidUpdate(prevProps, prevState, snapshot) {
  // 이 API는 render()를 호출 이후 발생함.
  // 이 시점에선 this.props와 this.state 가 바뀌어 있습니다.
  // 그리고 파라미터를 통해 이전의 값인 prevProps와 prevState를 조회할수 있음.
  // 그리고 getSnapshotBeforeUpdate 에서 반환한 snapshot 값는 세번째 값을 참조.
}

componentDidCatch () {
  // 에러가 발생했을때 잡아줄려면, 부모 콤포넌트에서 잡아주야 한다.
  // MyComponent 의 윗쪽, App 콤포넌트에서 설정해 줘야 한다.
}

**/
