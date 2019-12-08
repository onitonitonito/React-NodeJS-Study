/*
* 강좌2-4편 = state
* http://bit.ly/2LxVXsf
* -----
* 강좌코드 = App(조립)단계, 바로 보여줄 수 있음.
**/

import React from 'react';
import Counter2 from '../components/Counter-2';


class App extends React.Component {
  render() {
    return (
      <Counter2 />
    );
  }
}


export default App;

/*
==== State 의 특징
 1. 유동적인 데이터
 2. JSX 내부에 {this.state.stateName} 으로 사용
 3. 초기값 설정이 필수, 생성자 (constructor) 에서
    - this.state. = { vlaue : a, name: b,}; 형식으로 정의
 4. 값을 수정할 때는 this.setState({ ... }) 랜더링 된 다음엔
    this.state = 형식을 절대 사용하지 말것

**/
