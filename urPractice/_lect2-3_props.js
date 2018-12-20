import React from 'react';
import ReactDOM from 'react-dom';


class Codelab extends React.Component {
    render() {
      return (
        <div>
          <h1> Hello {this.props.name} </h1>
            <div>{this.props.children}</div>
            <h2>{this.props.number}</h2>
        </div>
      );
    }
  }
  
Codelab.prototype = {
    name: React.PropTypes.string,
    number: React.PropTypes.number.isRequired
};

Codelab.defaultProps = {
    name: 'Unknown'
};

  class App extends React.Component {
    render()  {
       return (
        // <Codelab name="velopert">this contents! shows</Codelab>
        <Codelab name={this.props.name}>{this.props.children}</Codelab>
       )
    }
  }

  
// ReactDOM.render(<App/>, document.getElementById('root'));
  ReactDOM.render(<App name="velopert">I am your child</App>, document.getElementById('root'));

