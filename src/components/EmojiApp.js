/*
*
* How to Set Emoji on React : SOF
* javascript - React, using emojis in a drop down
* Stack Overflow = https://bit.ly/3kgxjMO
*
**/

import React, {Component} from 'react';
import Emoji from './Emoji';

const showLabel = (e)=>{console.log(e.target.value)};
const createPlayers = () => {console.log('create players!')};

class App extends Component {
  render() {
    return (
      <div>
        <div>* Components = <b>'EmojiApp.js'</b></div>

        <h1>Select Emoji on React</h1>

        <form onSubmit={this.createPlayers} ref="form">
            <label htmlFor="goodies">Choose a Goody!&nbsp;</label>
            <select onChange={this.showLabel} name="goodies" id="goodies">
               <Emoji label={"donut"} symbol={"🍩"} />
               <Emoji label="cookie" symbol="🍪" />
               <Emoji label="hotdog" symbol="🌭" />
               <Emoji label="bacon" symbol="🥓" />
               <Emoji label="hamburger" symbol="🍔" />
               <Emoji label="brocolli" symbol="🥦" />
            </select>
            <button type="submit">Play!</button>
        </form>
      </div>
    )
  }
}

export default App;
