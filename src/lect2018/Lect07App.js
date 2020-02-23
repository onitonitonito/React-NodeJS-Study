/*
* 누구든지 하는 리액트 - #7 JSX 기본 문법 알아보기 (ii) : Jsx 문법2
* http://bit.ly/2RhsZlB
* https://react-anyone.vlpt.us/03.html

글자에 스타일을 넣는 법
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

import React, {Component, Fragment} from 'react';
import '../static/css/LectNew07.css';

class App extends Component {
  render() {
    const stylegg = {
      backgroundColor: 'black',
      padding: '11px',
      color: 'coral',
      fontSize: '35px',
      fontWeight: 'bold',
     }

    return (
      // div 밖에서 코맨드 문법은 젓가락
      <Fragment>
      {/* 특별히!, JSX 내부에서 커맨드 작성*/}
        <div
          className='App'
          style={stylegg} // 테그내부에서!
        >
          Hello~ CSS stlye~!!<span role="img" aria-label="wave">👋</span> 
        </div>
      </Fragment>
    );

  }
};


// ReactDom.render(<App/>, document.getElementById('root'));
export default App;
