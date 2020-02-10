/*
* EmojiOptions
* use for EmojiApp.js
*
*
**/

import React from 'react';


const Emoji = props => (
  <option
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
    value={props.label}
  >
  {props.symbol} {props.label}
  </option>
)


export default Emoji;
