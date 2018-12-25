import React from 'react';
import ReactDom from 'react-dom';
import App from './lectNew/Lect11LifeCycle2';


ReactDom.render(
  <App/>,
  document.getElementById('root')
);



/*
APP 불러와서 랜더링하기

(1) import ReacDom / ReacDom.render() 취소
(2) export defaul App; 추가
(3) dir변경 ./componets --> ../componets

**/
