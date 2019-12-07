/*
* 강좌 9 - Props
* App (조립)레벨 - (Parent)
* ----
* PropsClass(콤포넌트) -> propClassApp(조립) -> index.js
*     (child)                 (parent)         (랜더링)
**/

import React, {Fragment} from 'react';
import PropsClass from './PropsClass';

import AoA1 from '../_static/image/aoaCartoon1.png';
import AoA2 from '../_static/image/aoaCartoon2.png';
import nobody from '../_static/image/nobody.png';
import Freddie from '../_static/image/Freddie.png';

let stage = 0;

class App extends React.Component {
  state = {
    quote: 'Is this the REAL life?',
    imgSource: nobody,       // Nobody
  }

  onClickChange = () => {
    if (stage === 0) {
      this.setState({
        id: 'Proved!',
        name: 'Freddie Mercury',
        phone: '010-1234-0002',
        quote: 'Is this just FANTASY?',
        imgSource: Freddie,       // Mercury
      });
      stage = 1;

    } else if ( stage === 1) {
      this.setState({
        id: 'Proved!',
        name: 'AoA-1',
        phone: '010-1234-0003',
        quote: 'Para-Para-ParaPa-Ya!',
        imgSource: AoA1,       // Mercury
      });
      stage = 2;

    } else if (stage === 2) {
      this.setState({
        id: 'Proved!',
        name: 'AoA-2',
        phone: '010-1234-0004',
        quote: 'I am being disturbed!',
        imgSource: AoA2,       // Mercury
      });
      stage = 0;
    }
  }

  render() {
    return (
      <Fragment>

        <h1>Contact info.</h1>
        <h2>{this.state.quote}</h2>

        <img
          src={this.state.imgSource}
          width='400'
          alt='FreddieOrNobody'
          onClick={this.onClickChange}
        />

        {/*부모에서 props 를 내려줬는데, 내용이 없음! */}
        <PropsClass
          id={this.state.id}
          name={this.state.name}
          phone={this.state.phone}
          //챠일드 프롭스만 내려줌 = 'Is this the REAL life?'
        >
          {this.state.quote}
        </PropsClass>

        <p>
        <button onClick={this.onClickChange}>Stage chage to STAGE[{stage}]</button>
        </p>

      </Fragment>

    );
  }
}


export default App;
