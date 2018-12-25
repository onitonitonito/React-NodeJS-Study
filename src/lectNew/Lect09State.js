/*
* 누구든지 하는 리액트 - #9 state
* http://bit.ly/2GG0Hxf
* -------
*
**/

import React from 'react';
// import ReactDom from 'react-dom';

import Counter from '../components/Counter';


class App extends React.Component {
  render() {
    return (
      <Counter />
    );
  }
};



// ReactDom.render(<App/>, document.getElementById('root'));
export default App;


/* 프롭스(Props)와 스테이트(State)의 차이
props = 부모compo --> 자식compo 에서 데이터 전달
<Child value='value' />
---

프롭스는 부모가 내려주는 읽기전용 값
스테이트는 컴포넌트 자신이 첨부터 가지고 있는 값
스테이트 값이 바뀔때 마다, Re-Rendering 을 해 줌.
변경할 때는 setState() 함수를 사용한다.

**/
