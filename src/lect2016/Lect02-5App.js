/*
* 강좌2-5편 = component mapping
* http://bit.ly/2BQODnd
* -----
*
* ==== 앱(조립)레벨 -- 부모(PARENT)
* use './components/ContactInfo.js'
*
**/

import React, { Component, Fragment } from 'react';
import ContactInfo from '../components/ContactInfo';

class App extends Component {
  state = {
    contact: [
      { name: 'Abbey', phone: '010-1234-0001' },
      { name: 'Billy', phone: '010-1234-0002' },
      { name: 'Ceryl', phone: '010-1234-0003' },
      { name: 'Denny', phone: '010-1234-0004' },
      { name: 'Ellie', phone: '010-1234-0005' },
      { name: 'Felix', phone: '010-1234-0006' },
    ]
  };


  arrayFunction(contact, i) {
    console.log(i, contact)
    return <ContactInfo contact={contact} key={i}>{i+1}</ContactInfo>
  };


  mapToComponent(contact) {
    return contact.map(this.arrayFunction)
  };


  render() {
    // border : '1',
    // cellSpacing : '0',
    // cellPadding : '3'

    let styleTableAll = {
        // width: '70%',
        width: '300px',
        backgroundColor : '#f4eaf0',
        // border: '1px solid gray',
        borderTop: '1px solid gray',
        borderBottom: '1px solid gray',

        padding: '10px',
        textAlign: 'center',
        borderCollapse: 'collapse',
      };

    return (
      <Fragment>
        <div>* Components = <b>'Lect02-5App.js'</b></div>
        <h1>contact info</h1>

        <table style={styleTableAll}>
          <thead>
            <tr>
              <th>n</th>
              <th>NAME</th>
              <th>PHONE-NUMBER</th>
            </tr>
          </thead>

          <tbody style={styleTableAll}>
            {this.mapToComponent(this.state.contact)}
          </tbody>
        </table>

      </Fragment>
    )
  };
}


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
