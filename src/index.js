/*
* App(조립) 을 받아서 랜더링(index) 만 해준다.
* -------------
*
* components(부품) --> App(조립) --> index.js(DOM 랜더링) --> index.html
* 구조가 간단하면 바로, App(조립) --> index(DOM 랜더링)
*
**/

// * APP 불러와서 랜더링하기
// *   (1) import ReacDom / ReacDom.render() 취소
// *   (2) export defaul App; 추가
// *   (3) dir변경 ./componets --> ../componets

import React from 'react';
import ReactDom from 'react-dom';
import * as serviceWorker from './static/serviceWorker';

import App from './components/EmojiApp';
// import App from './components/CounterApp';
// import App from './components/PropsClassApp';
// import App from './lect2016/Lect03-1App';
// import App from './lect2018/Lect02-1App';
// import App from './photoAlbum/App';


ReactDom.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
