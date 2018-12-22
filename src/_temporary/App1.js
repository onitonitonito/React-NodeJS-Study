import React from 'react';
import ReactDOM from 'react-dom';

import CodeLab from './components/CodeLab';


class App extends React.Component {
  render() {
    return (
      <CodeLab/>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));

export default App;
