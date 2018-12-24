/*
* 강좌2-5편 = component mapping
* -----
*
*
*
*
**/

import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  render() {
    return(
      <div>Hello</div>
    );
  }
};


ReactDOM.render(<App/>, document.getElementById('root'));
// export default App;