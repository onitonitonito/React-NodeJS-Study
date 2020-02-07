/*
* 누구든지 하는 리액트 - #8 Props
* http://bit.ly/2RelxaN
*
* === This is CHILD Component of Lect8_props
* MyNameClass(Compo) --> Lect8Props(App) --> index
**/

import React from 'react';

const defaultProps = { name: 'VeloPert!' };

class MyNameClass extends React.Component {
  // ==== (1) 클래스 안에서
  // static defaultProps = {
  //   name: '기본이름!'
  // }

  render() {
    let stylegg = {
      fontWeight: 'bold',
      fontSize: '30px',
      backgroundColor: 'aqua',
    }

    return (
      <div>
        안녕하세요~!<span role="img" aria-label="wave">👋</span> <br/>제 이름은 '
            <u style={stylegg}>{this.props.name}</u>' 입니다..
      </div>
    );
  }
}

// ==== (2) 클래스 밖에서
// MyNameClass.defaultProps = defaultProps;

export default MyNameClass;


/* 1.프롭스 기본값 설정하는 방법

==== (1) 클래스 안에서
- 최신 JS코드 = 자동으로 (2)로 변환 해줌
- 결국은 안에서 써도, 똑같은 코드 임.

static defaultProps = {
name: '기본이름!'
}

==== (2) 클래스 밖에서
MyName.defaultProps = {
  name: 'VeloPert!'
}


**/
