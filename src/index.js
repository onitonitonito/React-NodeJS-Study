/*
* App(조립) 을 받아서 랜더링(index) 만 해준다.
* -------------
*
* components(부품) --> App(조립) --> index(DOM 랜더링)
* 구조가 간단하면 바로, App(조립) --> index(DOM 랜더링)
**/

import React from 'react';
import ReactDom from 'react-dom';

import App from './componentTest/PropsClassApp';


ReactDom.render(<App/>,document.getElementById('root'));



/*
APP 불러와서 랜더링하기

(1) import ReacDom / ReacDom.render() 취소
(2) export defaul App; 추가
(3) dir변경 ./componets --> ../componets

**/
