import React from 'react';
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


export default App;
