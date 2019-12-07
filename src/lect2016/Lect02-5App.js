/*
* 강좌2-5편 = component mapping
* http://bit.ly/2BQODnd
* -----
*
**/

import React from 'react';


class App extends React.Component {
  state = {
    contacts: [
      { name: 'Abert', phone: '010-1234-0001', },
      { name: 'Beron', phone: '010-1234-0002', },
      { name: 'Ceryl', phone: '010-1234-0003', },
      { name: 'Denny', phone: '010-1234-0004', },
    ],
  };

  // 화살함수를 쓰면, 바인딩을 안 해줘도 됨.
  // 이 부분이 많이 헽갈리네~!!;;;
  const mapToConpoments = (data) => {
    return (data.map((contact, i) => {
      return(<ContactInfo contact={contact} key={i} />);
    }
  }

  render() {
    return(<Contac/>);
  }
};


// ReactDOM.render(<App/>, document.getElementById('root'));
export default App;

/*
==== Component Mapping
map() 메소드는 파라미터로 전달된 함수를 통해 배열 내의 각
요소를 처리한 후, 결과를 배열로 생성

arr.map(callback, [thisArg])
  1. callback 새료운 배열의 요소를 생성하는 함수
    - currentValue = 현재 처리되고 있는 요소
    - index = 현재 처리되고 있는 요소의 인덱스값
    - array = 메소드가 불려진 배열

  2. [thisArg] = (선택옵션) callback 내부에서 사용할 this값 설정

==== ES6 문법
let numbers = [1,2,3,4,5];
let results = numbers.map(
    (numbers) => {
    return numbers * numbers;
  }
);

화살함수에 numbers를 맵핑한다.
화살함수 (..) => { ... return()}

**/
