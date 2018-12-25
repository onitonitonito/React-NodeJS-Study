/*
* 누구든지 하는 리액트 - #8 Props
* http://bit.ly/2RelxaN
* -------
* ./src/compoments/MyNameClass.js
* ./src/compoments/MyNameFunction.js
*
**/

import React from 'react';
// import ReactDom from 'react-dom';

// 기본 cwd = src/ 부터 시작한다.
// src 바깥으로 나가는 것은 지원하지 않는다.
import MyNameClass from '../components/MyNameClass';
// import MyNameFunction from './components/MyNameFunction';


class App extends React.Component {
  render() {
    return (
      <MyNameClass />     // VeloPert!
      // <MyNameFunction name='InfLearn!' /> // InfLearn!
      // name 값이 없을 때엔, Child 값을 사용한다.
    );
  }
};



// ReactDom.render(<App/>, document.getElementById('root'));
export default App;


/* props = 부모compo --> 자식compo 에서 데이터 전달
<Child value='value' />
---
프롭스는 부모가 내려주는 읽기전용 값
스테이트는 자기자신이 첨부터 가지고 있는 값

(1) 1번쟤 방법! - 클래스형 컴포넌트
(2) 2번째 방법! - 함수형 컴포넌트

단순히 Props를 보여주기만 하는 경우는
화살표 함수를 사용해서 바로 보여줘도 된다.

=== 클래스형 과 함수형 컴포넌트의 차이점
- State 와 LifeCycle 기능이 빠져있다.
- 초기 마운트속도가 클래스보다 약간 빠르다
- 내부자원을 덜 사용한다.
**/
