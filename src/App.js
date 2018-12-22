import React from 'react';
import ReactDOM from 'react-dom';

import Contact from './components/Contact';


class App extends React.Component {
  render() {
    return (
      <Contact />
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));

export default App;
