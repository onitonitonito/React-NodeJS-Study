/*
* 누구든지 하는 리액트 - #6 JSX
* http://bit.ly/2GDIGiY
*
**/

/* - JSX타입 문법으로 반환한다.
JSX - JavaScriptEXpression Grammer - JavaScript expression ES6
wrapping with {}
 var a = {
  <div>
    <b>Welcome to <b>React CodeLab</b>
  </div>
**/


import React, {Fragment} from 'react';
import ReactDom from 'react-dom';


class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div>Hello~</div>
        <div>Bye!</div>
      </Fragment>
    );
  }
};


ReactDom.render(<App/>, document.getElementById('root'));
// export default App;
