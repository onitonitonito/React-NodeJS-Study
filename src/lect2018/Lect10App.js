/*
* 누구든지 하는 리액트 - #10 Life Cycle API (i) - LifeCycle
* http://bit.ly/2GGT5KK
* -------
*
**/

import React from 'react';
import ReactDom from 'react-dom';


class App extends React.Component {
  render() {
    return (
      <div>코드없이 도표보며, <b>설명</b>만 합니다.</div>
    );
  }
};


export default App;


/*
Life Cycle API
-----------------------------------------------
  (1) 나타날때
  (2) 업데이트 될 때
  (3) 사라질 때
-----------------------------------------------
Mounting --- ---
--- Updating ---
--- --- Unmounting
-----------------------------------------------
--- [NewProps] [setState()] [forceUpdate()] ---
-----------------------------------------------
constructor
getDerivedStateFromProps
--- shouldComponentUpdate = true(render) / false(-)
render -->
--- getSnapshotBeforeUpdate
React update DOM and refs -->
-----------------------------------------------
componentDidMount
--- componentDidUpdate
--- --- componentWillUnmount
-----------------------------------------------

**/
