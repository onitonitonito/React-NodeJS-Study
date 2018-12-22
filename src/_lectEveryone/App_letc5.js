/*
* 누구든지 하는 리액트 #5 본격적인 리액트 코드 작성하기
* http://bit.ly/2GB0F9O
*
**/


// Component 폴더가 따로 정의되있지 않다면, {Component} 가 필요하다.
import React, {Component} from 'react';
import logo from './_static/img/reactLogo.svg'



class App extends Component {

  render() {
    let stylegg = {
      color : '#779988',
    }

    return (
      // div 밖에서 코맨드 문법은 젓가락

      <div>
      {/* div 안에서 코맨드 문법은 멀티라인 형식을 쓴다.
        * <div/>  ... JSX 문법은 꼭 Pair tag로 닫는다. */}
        <h1>Hello~ REACT!</h1>
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
