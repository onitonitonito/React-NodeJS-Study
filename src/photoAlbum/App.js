/*
*
* APP 의 기능은 최종 조립입니다.
* Index 에서 부를수 있도록 App 을 Export 하고
**/

import React from 'react';
import Info from './Info';


class App extends React.Component {
  state = {
    idxState : 0
  }

  constructor(props) {
    super(props);
    this.incNum = this.incNum.bind(this);
  };

  incNum() {
    let idx = document.getElementById('iNumber').innerText
    idx = parseInt(idx.split('=')[1]);

    if (idx < 3) {
      idx += 1;
    } else {
      idx = 0;
    }

    this.setState({
      idxState : idx,
    });

    document.getElementById('iNumber').innerText = 'i=' + idx;

    if (this.state.idxState === 3) {
      console.log('idxState = 3');
      console.log('\n\n');

    } else {
      console.log('idxState =', this.state.idxState);

    }
  }

  render() {
    return(
      <div>
        <Info idx={this.state.idxState} />

        <p id={'iNumber'}>i={this.state.idxState}</p>
        <button onClick={this.incNum}>Click to Next Picture!</button>
      </div>
    );
  }
}

export default App;
