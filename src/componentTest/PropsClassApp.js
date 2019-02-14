/*
* App (조립)레벨 - (Parent)
* ----
* PropsClass(콤포넌트) --> App(조립) --> index
*     (child)               (parent)     (랜더링)
**/

import React from 'react';
import PropsClass from './PropsClass';



class App extends React.Component {
  state = {
    quote: 'Is this the REAL life?',
    imgSource: 'http://bit.ly/2RhW6VW',
  }

  onClickChange = () => {
    this.setState({
      id: 'Proved!',
      name: 'Freddie Mercury',
      phone: '010-1234-0002',
      quote: 'Is this just FANTASY?',
      imgSource: 'http://bit.ly/2RkXXt0'
    });
  }

  render() {
    return (
      <div>
        {/*부모에서 props 를 내려줬는데, 내용이 없음! */}
        <PropsClass
          id={this.state.id}
          name={this.state.name}
          phone={this.state.phone}
          //챠일드 프롭스만 내려줌 = 'Is this the REAL life?'
        >
          {this.state.quote}
        </PropsClass>

          <img
            src={this.state.imgSource}
            width='250'
            alt='FreddieOrNobody'
          />
        <p>
          <button onClick={this.onClickChange}>ChangeIt!</button>
        </p>
        
      </div>


    );
  }
}


export default App;
