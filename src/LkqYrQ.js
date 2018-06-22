/* JSX - JavaScriptEXpression Grammer - JavaScript expression ES6
wrapping with {}
 var a = {
  <div>
    <b>Welcome to <b>React CodeLab</b>
  </div>
*/

class CodeLabTest extends React.Component{
	render() {
		let text= 'CodeLabTest Text Test';
		let stylegg = {
			color: 'black',
			backgroundColor: 'aqua'
		};

		return (
			{/*<div style={stylegg}>{text}</div>*/}
      <div>{text}</div>	}
}


class App extends React.Component{
	render() {
		return(
			<CodeLabTest/>
			<div className='box'>React CodeLabTest ClassName</div>
		);
	}
}

ReactDOM.render(<App/>,document.getElementById('root'));
