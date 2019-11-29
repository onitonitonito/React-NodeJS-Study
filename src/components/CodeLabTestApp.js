import React, { Fragment } from 'react';
import CodeLab from './CodeLab';


class App extends React.Component{
	render() {
		return(
			<Fragment>
      <div>
  			<CodeLab/>
  			<div className='box'>
					<b>This is className 'box' but, missing</b>
				</div>
      </div>
			</Fragment>
		);
	}
}


export default App;
