/*
* 누구든지 하는 리액트 - 프로젝트 시작하기 : GetStart
* #5 본격적인 리액트 코드 작성하기
* http://bit.ly/2GB0F9O
* https://react-anyone.vlpt.us/02.html
*
**/

// Component 폴더가 따로 정의 되 있지 않다면, {Component} 가 필요하다.

import React, {Component} from 'react';
import logo from '../_static/image/reactLogo.svg'


class App extends Component {

  render() {
    let text = 'Hello~ REACT!<span role="img" aria-label="wave">👋</span>'
    let stylegg = {
      color : '#fab90b',
      backgroundColor: '#443322'
    }

    return (
      // div 밖에서 코맨드 문법은 젓가락

      <div>
      {/* div 안에서 코맨드 문법은 멀티라인 형식을 쓴다.
        * <div/>  ... JSX 문법은 꼭 Pair tag로 닫는다. */}
        <h1 style={stylegg}>{text}</h1>
        <img
          src={logo}
          className='App-logo'
          alt='react-logo'
          width="500"/>
      </div>
    );
  }
}

export default App;
