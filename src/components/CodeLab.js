/*
* 누구든지 하는 리액트 #5 본격적인 리액트 코드 작성하기
* http://bit.ly/2GB0F9O
*
**/


// DOM은 index.js 에서 App을 import 받아서 렌더링한다.
import React from 'react';


class CodeLab extends React.Component {
  render() {
    let text = "Hi, I am codlab";
    let stylegg = {
      color: 'blck',
      backgroundColor: 'aqua'
    }

    return (
      // test will be done!

      <div style={stylegg}>
      {/* This is Comment */}
      '{text}' ... CodeLab Done! {/*coment inside*/}
      </div>
    );
  }
}

export default CodeLab;
