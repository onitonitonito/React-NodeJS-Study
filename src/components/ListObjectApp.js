/*
* 앱(조립ㅣ)레벨
*
**/

import React from 'react';
import ListObject from './ListObject';


class App extends React.Component {
  render() {
    return (
      <ListObject name={this.props}/>
    )
  }
}

App.defaultProps = {
  name: 'App-IDK!',
}


export default App;
