/*
*
* APP 의 기능은 최종 조립입니다.
* Index 에서 부를수 있도록 App 을 Export 하고
**/

import React from 'react';
import Info from './Info';
import Image from './Image';
import logoPath from '../_static/image/logoReact.png'

class App extends React.Component {

  render() {
    return(
      // <Test name={'Lee'} age={17} tall={190} />
      <div>
      <h1><img width={80} src={logoPath}/> Hello~! React!</h1>

      <Info/><br />

      <button>Click to Next Picture!</button>

      </div>
    );
  }
}

export default App;
