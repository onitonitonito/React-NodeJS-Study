/*
* 강좌2-2편 = JSX의 특징
* -----
* 일단 간단한 실습은 코드팬(codePen.io) 에서 O.k
* 환경=Babel, React, ReactDOM
*
* 제일 첫번째 실습화일 = 코드팬 확인OK
**/

import React, { Component } from 'react';
import logo from '../_static/image/logoNodeJS.png';
// import ReactDOM from 'react-dom';
// React.Component --> Component 로 변경할 수 있다.


class App extends Component {
  render() {
    return (
      // JSX(<div>)밖에서의 코맨드라인
      <div>
        {/* JSX 안에서(<div>)는 이렇게 써야 함!*/}
        <h1>CodeLab</h1>
        <img
          // 다만, 태그 안에서는 젓가락을 쓸 수 있다!
          src={logo}              // img src는 콤포넌트로 받을 것!
          width='250'
          alt='NodeJSlogoScreen'  // img는 alt를 꼭!써야한다(안쓰면 에러!)
        />
        <p>This is CodeLab! JSX style</p>
        <p>* JSX (JavaScript Expression)</p>
      </div>
    );
  }
}


// class App extends React.Component {
//   render() {
//     return (
//       <CodeLab/>
//     );
//   }
// }

// ReactDOM.render( <App/> , document.getElementById('root'));
export default App;
