/*
* 강좌2-3편 = Props
* http://bit.ly/2rScHBl
* ----- COMPONENT -----
*
* 프롭스는 자식에게 물려주고, ReadOnly 이기 때문에
* 프롭스를 전달하려면 중간에 App 을 하나 더 만든다.
* 앱에서 index.js로 전달해서 랜더링을 한다.
* CodeLab(comp) --> Old23Props(App) --> index.js
**/

import React from 'react';
import PropTypes from 'prop-types';


class CodeLab extends React.Component {
    render() {
      return (
        <div>
          <h1> Hello, '{this.props.name}' </h1>
            <div>{this.props.children}</div>
            <h2>{this.props.number}</h2>
        </div>
      );
    }
  }

// 최초 프롭스에 대한 유형정의 (PtotoTypes)
// 프롭스의 유형이 무엇인지 Type 을 명확히 명시.

CodeLab.protoType = {
  name: PropTypes.string,
  number: PropTypes.number.isRequired
};


// props와 child 를 가로채서, App에 다시 던진다.
// Old23Props 전달--> Old23PropsApp 전달--> App (최종랜더링)

CodeLab.defaultProps = {
  name: 'Unknown',
  number: 13,
  children: 'Children... children.. ! <-- Comp 레벨변경!',
};


export default CodeLab;

// ReactDOM.render(<App name='VeloPert!'>Unknown?</App>,document.\
// getElementById('root'));

/*
* ==== 프롭스 (Props) 란?
*   1. components 내부의 Immutable Data
*   2. JSX 내부에 {this.props.propsName} 으로 적용한다.
*   3. 컴포넌트 사용시, Tag 안에서 <div propsName='value' 형식으로 사용.
*   4. this.props.children 은 기본적으로 갖고있다.
*   5. <Cpnt>태그'여기'사이에 있는 값이 들어간다.</Cpnt>
*
* // React documentation 참조: Props & State
* http://bit.ly/2SkBIkl
*
* class AppTwo extends React.Component {
*   render() {
*     return(
*       <div>
*         {this.props.value}
*         {this.props.secondValue}
*         {this.props.thirdValue}
*       </div>
*     );
*   }
* };
*
* AppTwo.prototype = {
*   value: PropTypes.string,
*   secondValue: PropTypes.number,
*   thirdValue: PropTypes.any.isRequred
* };
*
* ReactDOM.render(
*   <AppTwo name='velopert'>I am your children</App>,
*   document.getElementById('root'));
**/
