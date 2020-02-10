/*
* How to Set Emoji on React : SOF
* javascript - React, using emojis in a drop down
* Stack Overflow = https://bit.ly/3kgxjMO
*
**/

// (1) Function : define outside - behind this & use this
// constructor(props) {
//   super(props);
//   this.showLabel = this.showLabel.bind(this);
//   this.createFoodInfomation = this.createFoodInfomation.bind(this);
// }
//
// createFoodInfomation() {
//   console.log(document.myForm.target.value)
//   return true;
// }
//
// showLabel(e) {
//   console.log(e.target.value);
//   return e.target.value;
// }

// (2) Arrow Contant : define - inside / No bind, delete this
// render() {
//   const createFoodInfomation = () => {
//     console.log('createFoodInfomation');
//   }
//
//   const showLabel = (e) => {
//     console.log(e.target.value);
//     return e.target.value;
//   }


import React, {Component,Fragment} from 'react';
import Emoji from './EmojiOptions';
import Select from './EmojiSelect';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label  : 'donut',
      symbol : '🍩'
    }
    this.createFoodInfomation = this.createFoodInfomation.bind(this);

  }

  createFoodInfomation() {
    this.setState({
      label : this.props.label,
      symbol : this.props.symbol
    });
    console.log('createFoodInfomation');
  }

  render() {

    const showLabel = (e) => {
      let imageLabel = e.target.value;
      let imageSymbol;

      if (imageLabel === 'donut') {
        imageSymbol = '🍩';

      } else if (imageLabel === 'cookie') {
        imageSymbol = '🍪';

      } else if (imageLabel === 'hotdog') {
        imageSymbol = '🌭';

      } else if (imageLabel === 'bacon') {
        imageSymbol = '🥓';

      } else if (imageLabel === 'hamburger') {
        imageSymbol = '🍔';

      } else {
        imageSymbol = '🥦';

      }


      console.log(imageLabel, imageSymbol);

      this.setState({
        label  : imageLabel,
        symbol : imageSymbol
      });
    }

    return (
      <Fragment>
        <div>* Components = <b>'EmojiApp.js'</b></div>
        <h1>Select Emoji on React</h1>

        <form id={'myForm'} onSubmit={showLabel}>
            <label htmlFor='goodies'>Choose a Goody! &nbsp; </label>
            <select id='goodies' onChange={showLabel} name='goodies'>
               <Emoji label={'donut'} symbol={'🍩'} />
               <Emoji label={'cookie'} symbol={'🍪'} />
               <Emoji label={'hotdog'} symbol={'🌭'} />
               <Emoji label={'bacon'} symbol={'🥓'} />
               <Emoji label={'hamburger'} symbol={'🍔'} />
               <Emoji label={'brocolli'} symbol={'🥦'} />
            </select> &nbsp;
            <button id={'myId'} type='submit'>Let's Go!</button>
        </form>

        <br />
        <br />

        <Select label={this.state.label} symbol={this.state.symbol}>Good!</Select>

      </Fragment>
    )
  }
}

export default App;
