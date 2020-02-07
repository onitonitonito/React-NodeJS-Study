/*
* 강좌2-1편 = Get Started!
* -----
* 일단 간단한 실습은 코드팬(codePen.io) 에서 O.k
* 환경=Babel, React, ReactDOM
*
* 제일 첫번째 실습화일 = 코드팬 확인OK
**/

import React, {Component, Fragment} from 'react';
// import ReactDOM from 'react-dom';



class App extends Component {
  render() {
    return (
      <Fragment>
      <div>* Components = <b>'Lect02-1App.js'</b></div>
      <h1>This is CodeLab!<span role="img" aria-label="wave">👋</span></h1>
      </Fragment>
    );
  }
}


// class App extends React.Component {
//   render() {
//     return (
//       <App/>
//     );
//   }
// }


// ReactDOM.render(<App/>, document.getElementById('root'));
export default App;
