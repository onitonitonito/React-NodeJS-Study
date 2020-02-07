/*
* 누구든지 하는 리액트 - #6 JSX 기본 문법 알아보기 (i) : Jsx
* https://react-anyone.vlpt.us/02.html
*
**/

import React, {Fragment} from 'react';
// import ReactDom from 'react-dom';


class App extends React.Component {
  render() {
    let greet = 'Hello~<span role="img" aria-label="wave">👋</span> ';
    var depart = 'Bye!'

    return (
      <Fragment>
        <div>{greet}</div>
        <div>{depart}</div>
      </Fragment>
    );

   }
};



// ReactDom.render(<App/>, document.getElementById('root'));
export default App;


/* - JSX타입 문법으로 반환한다.
JSX - JavaScriptEXpression Grammer - JavaScript expression ES6
wrapping with {}
 var a = {
  <div>
    <b>Welcome to <b>React CodeLab</b>
  </div>
**/

/*
function foo() {
  var a = 'Hello~';

  if (true) {
    var a = 'bye';
    consol.log(a);      // bye
  }
  console.log(a)        // bye
}


function bar() {
  let a = 'Hello~';

  if (true) {
    let a = 'bye';
    consol.log(a);      // bye
  }
  console.log(a)        // hello~
}

// var vs. const vs let
// - var = 더이상은 Naver...
// - const = 한번 선언하면 영원히
// - let = 유동적인 값

=== 조건부 랜더링
<div>
  {
    1 + 1 == 2
      ? (<div>맞아요!</div>)
      : (<div>틀려요!</div>)
  }
</div>

=== And 연산자 사용하기 (조건부 랜더링)
const name = 'velopert!';
return (
  <div>
    {
      name == 'velopert!' && <div>'벨로퍼트!'</div>
    }
  </div>
)

=== 함수를바로 선언하고 실행
<div>
  {
    (function() {
      if (value === 1) return <div>1입니다!</div>
      if (value === 2) return <div>2입니다!</div>
      if (value === 3) return <div>3입니다!</div>
      return <div>없다!</div>
    })()   // 감싸주고 바로 그 자리에서 호출!
  }
</div>

=== 또는 함수명없이, 화살표 함수로 선언후 바로 실행.

(() => {
  if (value === 1) return <div>1입니다!</div>
  return <div>1 아닙니다!</div>
})()

**/
