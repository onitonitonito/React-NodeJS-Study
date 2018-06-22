class CodeLab extends React.Component {
  render() {
    let stylegg = {
      color: 'blck',
      backgroundColor: 'aqua'
    }
    let text = "Hi, I am codlab";
    return (
      {/* This is Comment */}
      <div style={stylegg}>
        '{text}' ... CodeLab Done!
      </div>
    );
  }
}


class App extends React.Component {
  render() {
    return (
      <CodeLab/>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));

// JSX Grammer
// var a = {
//  <div>
//    <b>Welcome to <b>React CodeLab</b>
//  </div>
// }
