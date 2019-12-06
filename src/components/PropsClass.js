/*
* Component (부품)레벨 - (Child)
* ----
* PropsClass(콤포넌트) --> App(조립) --> index
*     (child)               (parent)     (랜더링)
**/

import React, { Component, Fragment } from 'react';

// 여기서 'quote' 프롭스는 의미없음!
// Why? 부모(앱)레벨에서는 'quote' === props.children
//    자식(콤포)레벨에서는 그냥, 기본 프롭스 값으로 인식!

const defaultProps = {
  id: 'Id is not provided!',
  name: 'NoBody!',
  phone: '010-1234-0001',
  quote: '--MEANINGLESS!--',
};


class PropsClass extends Component {
  showConsole() {
    console.log('\n\nquote=', this.props.quote);
    console.log('id=', this.props.id);
    console.log('name=', this.props.name);
    console.log('phone=', this.props.phone);
    console.log('child=', this.props.children);
  }

  render() {
    this.showConsole()
    // if (this.props.children === this.props.quote) && this.props.children = this.props.quote;

    return (
      <Fragment>
        <div>

          {/* 차일드 프롭스는 받았음*/}
          <p><b>props(child), qoute</b>: {this.props.children}</p>

          {/* 그런데 부모에게 받은 프롭스는 없음 = 디폴트 프롭스 채택!*/}
          <p><b>User ID</b> : {this.props.id}</p>
          <p><b>Name</b>        : {this.props.name}</p>
          <p><b>Phone</b>       : {this.props.phone}</p>
        </div>
      </Fragment>
    );
  }
}

PropsClass.defaultProps = defaultProps;

export default PropsClass;
