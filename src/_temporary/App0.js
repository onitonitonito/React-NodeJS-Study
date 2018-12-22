import React from 'react';
import ReactDOM from 'react-dom';
import CodeLabTest from './components/CodeLabTest';


class App extends React.Component{
	render() {
		return(
      <div>
  			<CodeLabTest/>
  			<div className='box'>
					<b>This is className 'box' but, missing</b>
				</div>
      </div>
		);
	}
}


ReactDOM.render(<App/>,document.getElementById('root'));
export default App;
