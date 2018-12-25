/*
* 누구든지 하는 리액트 - #7 JSX 기본 문법 알아보기 (ii)
* http://bit.ly/2RhsZlB
* https://react-anyone.vlpt.us/03.html
**/

import React from 'react';
// import ReactDom from 'react-dom';
import '../_static/css/LectNew07.css';

class App extends React.Component {
  render() {
    const stylegg = { }
    // JSX 외부에서 커맨드 작성
    return (
      // JSX 외부에서 커맨드 작성
      <div
        className='App'
        style={stylegg}    // 테그내부에서!
      >
      {/* 특별히!, JSX 내부에서 커맨드 작성*/}
          Hello~ CSS stlye~!!!!
      </div>
    );

   }
};



// ReactDom.render(<App/>, document.getElementById('root'));
export default App;


/* 글자에 스타일을 넣는 법
==== 변수로 직접 스타일테그를 넣어준다.
  const stylegg = {
    backgroundColor: 'black',
    padding: '16px',
    color: 'aqua',
    fontSize: '36px',
    fontWeight: 'bold',
  }

  return (
    <div style={stylegg} className='App'>
      Hello~ CSS stlye~!!!!
    </div>
  );

==== 외부에 css화일을 정의하고 불러온다.
import './css/index.css';

<div className='App'>
  Hello~ CSS style~!!
</div>
**/
