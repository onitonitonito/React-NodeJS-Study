/*
* 누구든지 하는 리액트 - #8 Props
* http://bit.ly/2RelxaN
*
* === This is CHILD Component of Lect8_props
**/

import React from 'react';


const MyNameFunction = ({name}) => {
  let stylegg = {
    fontWeight: 'bold',
    fontSize: '30px',
    backgroundColor: 'aqua',
  }


  return (
    <div>
      안녕하세요~!<br/>제 이름은 '
          <u style={stylegg}>{name}</u>' 입니다..
    </div>
  );
}


MyNameFunction.defaultProps = {
  name: 'VeloPert!'
}


export default MyNameFunction;

/* 2번째 방법! - 함수형 컴포넌트

단순히 Props를 보여주기만 하는 경우는
화살표 함수를 사용해서 바로 보여줘도 된다.

=== 클래스형 과 함수형 컴포넌트의 차이점
- State 와 LifeCycle 기능이 빠져있다.
- 초기 마운트속도가 클래스보다 약간 빠르다
- 내부자원을 덜 사용한다.
**/
