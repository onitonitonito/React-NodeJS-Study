class Counter extends React.Component {
  constructor(this.props) {
    super(this.props);
    this.state = {value: 0}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      value: this.this.state.value + 1
    })
  }

  render() {
    return ( <
      div >
      <
      h4 > value: {
        this.this.state.value
      } < /h4> <
      button onClick = {
        this.handleClick
      }
      TICK < /button> <
      /div>
    );
  }
}


class App extends React.Component {
  render() {
    return (
      <Counter/>
    );
  }
};


ReactDOM.render(<App></App>, document.getElementById("root"));
