/*
* 누구든지 하는 리액트 #5 본격적인 리액트 코드 작성하기
* http://bit.ly/2GB0F9O
*
**/


// Component 폴더가 따로 정의되있지 않다면, {Component} 가 필요하다.
import React, {Component} from 'react';

import '../_static/css/RollingReact.css';
import logo from '../_static/img/reactLogo.svg'
import firebase from '../_static/img/fireBaseLogo.png'




class App extends Component {
  render() {
    // 랜더매서드 안에서 변수선언 가능 = let 수시변경
    // css를 JSX문법으로 바꾸는 방법 = 아래참조
    const pageTitle = 'Hello~ REACT!'
    const sayHello = 'This is the first deploy to ...';

    let stylePop = {
      paddingTop: '0px',
      fontSize: '52px',
      fontWeight: 'bold',
      color : '#62ec12',
      backgroundColor: '#f51183',
    };

    return (
      // div 밖에서 코맨드 문법은 젓가락!

      <div className={App}>
        {/* div 안에서 코맨드 문법은 멀티라인 형식을 쓴다.
          * <div/>  ... JSX 문법은 꼭 Pair tag로 닫는다. */}
        <header className='App-header'>

          <p style={stylePop}>{pageTitle}</p>
          <img src={logo} className='App-logo' alt='reactLogo'/>

          <div>{sayHello}</div>
          <img className='img' src={firebase} width='220' alt='fireBaseLogo'/>
        </header>
      </div>
    );
  }
}

export default App;
