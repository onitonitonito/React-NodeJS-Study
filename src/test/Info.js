/*
*
* Component 의 기능은?
* - 변수를 가지고 있고,
* - 단독으로 랜더링으로 완성하고 있고
* - App 에서 부를수 있도록 Export 를 해야 하고
**/


import React, { Component, Fragment } from 'react';

class Info extends Component {
  render() {
    return (
      <Fragment>
        <div>My name is '<b>{this.props.name}</b>'</div>
        <div>age = {this.props.age}</div>
        <div>tall = {this.props.tall} </div>
      </Fragment>
    );
  }
}


Info.defaultProps = {
  name : 'Freddie',
  age  : 35,
  tall : 180,
}

export default Info;
