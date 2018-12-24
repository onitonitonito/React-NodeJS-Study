/*
* 강좌2-3편 = Props
* -----
* 일단 간단한 실습은 코드팬(codePen.io) 에서 O.k
* 환경=Babel, React, ReactDOM
*
* 제일 첫번째 실습화일 = 코드팬 확인OK
**/

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class CodeLab extends React.Component {
    render() {
      return (
        <div>
          <h1> Hello {this.props.name} </h1>
            <div>{this.props.children}</div>
            <h2>{this.props.number}</h2>
        </div>
      );
    }
  }


CodeLab.protoType = {
  name: PropTypes.string,
  number: PropTypes.number.isRequired
};

CodeLab.defaultProps = {
  name: 'Unknown',
  number: 13
};



// <CodeLab name="velopert">this contents! shows</CodeLab>
class App extends React.Component {
    render()  {
       return (
        <CodeLab name={this.props.name} number='7'>
          {this.props.children}
        </CodeLab>
      );
    }
  }

App.defaultProps = {
  name: 'Velocity',
  children: 'baby..baby'
}

ReactDOM.render(
  <App name='VeloPert!'>Unknown?</App>,
  document.getElementById('root')
);


// refer to: https://facebook.githun.id/react/docs/reusable-components.html
/*

class AppTwo extends React.Component {
  render() {
    return(
      <div>
        {this.props.value}
        {this.props.secondValue}
        {this.props.thirdValue}
      </div>
    );
  }
};

AppTwo.prototype = {
  value: PropTypes.string,
  secondValue: PropTypes.number,
  thirdValue: PropTypes.any.isRequred
};

ReactDOM.render(
  <AppTwo name='velopert'>I am your children</App>,
  document.getElementById('root'));
**/
