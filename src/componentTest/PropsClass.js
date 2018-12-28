/*
* Component (부품)레벨 - (Child)
* ----
* PropsClass(콤포넌트) --> App(조립) --> index
*     (child)               (parent)     (랜더링)
**/

import React, { Component, Fragment } from 'react';

const defaultProps = {
  name: 'NoBody!',
  phone: '010-1234-0001',
  id: 'Id is not provided!',
  // 여기서 'quote' 프롭스는 의미없음!
  // Why? 부모(앱)레벨에서는 'quote' === props.children
  //    자식(콤포)레벨에서는 그냥, 기본 프롭스 값으로 인식!
  quote: '--MEANINGLESS!--',
};


class PropsClass extends Component {
  showConsole() {
    console.log('id=', this.props.id);
    console.log('name=', this.props.name);
    console.log('phone=', this.props.phone);
    console.log('child=', this.props.children);
    console.log('quote=', this.props.quote);
  }

  render() {
    this.showConsole()
    // if (this.props.children === this.props.quote) && this.props.children = this.props.quote;

    return (
      <Fragment>
        <div>
          <h1>Contact info.</h1>
          {/* 차일드 프롭스는 받았음*/}
          <h2>{this.props.children}</h2>

          {/* 그런데 부모에게 받은 프롭스는 없음 = 디폴트 프롭스 채택!*/}
          <p><b>{this.props.name}</b></p>
          <p>{this.props.phone}</p>
          <p>{this.props.id}</p>
        </div>
      </Fragment>
    );
  }
}

PropsClass.defaultProps = defaultProps;

export default PropsClass;
