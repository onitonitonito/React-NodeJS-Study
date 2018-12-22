/* JSX - JavaScriptEXpression Grammer - JavaScript expression ES6
wrapping with {}
 var a = {
  <div>
    <b>Welcome to <b>React CodeLab</b>
  </div>
*/

import React from 'react';

class CodeLabTest extends React.Component{
	render() {
		let text= 'This is CodeLabTest Component in \'Aaua!\'';
		let stylegg = {
			color: 'black',
			backgroundColor: 'aqua'
		};

		return (
      <div style={stylegg}>
				{/*<div style={stylegg}>{text}</div>*/}
				{text}
			</div>
		);
	}
}


export default CodeLabTest;
