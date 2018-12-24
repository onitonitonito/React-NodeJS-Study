/*
* 강좌2-2편 = JSX의 특징
* -----
* 일단 간단한 실습은 코드팬(codePen.io) 에서 O.k
* 환경=Babel, React, ReactDOM
*
* 제일 첫번째 실습화일 = 코드팬 확인OK
**/

import React from 'react';
import ReactDOM from 'react-dom';


class CodeLab extends React.Component {
  render() {
    return (
      <div> CodeLab </div>
    );
  }
}



class App extends React.Component {
  render() {
    return (
      <CodeLab/>
    );
  }
}

ReactDOM.render( <App/> , document.getElementById('root'));
