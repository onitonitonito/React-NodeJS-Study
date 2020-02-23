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
      let imageSymbol;
      let imageLabel = e.target.value;

      switch (imageLabel) {
        case ('donut'):
          imageSymbol = '🍩'; break;

        case ('cookie'):
          imageSymbol = '🍪'; break;

        case ('hotdog'):
          imageSymbol = '🌭'; break;

        case ('bacon'):
          imageSymbol = '🥓'; break;

        case ('hamburger'):
          imageSymbol = '🍔'; break;

        case ('brocolli'):
          imageSymbol = '🥦'; break;

        default:
          imageSymbol = '❓'; break;
      }

      console.log('You select --->',imageLabel, imageSymbol);

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
               <Emoji label={'dunno'} symbol={'❓'} />
            </select> &nbsp;
            <button id={'myId'} type='submit'>Lets Go!</button>
        </form>

        <br />
        <br />

        <Select label={this.state.label} symbol={this.state.symbol}>Good!</Select>

      </Fragment>
    )
  }
}

export default App;
