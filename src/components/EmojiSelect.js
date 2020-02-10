/*
* EmojiSelect - Component
*
* Infomation Selection Component
* Function bind outside = use this
* Arrow define inside = Not use this.
**/

import React, {Component, Fragment} from 'react';





class Select extends Component {
  constructor(props) {
    super(props);
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem() {
    const answerString = `You selected this Item = ${this.props.children}!`
    console.log(answerString);
    return answerString
  }

  render() {
    const selectThis = () => {
      const answerString = `You selected this Item ... This Way!`
      console.log(answerString);
      return answerString
    }

    const selectThat = () => {
      const answerString = `You selected '${this.props.symbol}' Item That way?!`
      console.log(answerString);
      return answerString
    }

    return(
      <Fragment>

        <h2>
          <span role={"img"} aria-label={"brocolli"}>{this.props.symbol}</span>
          &nbsp;YES! : {this.props.label}!
        </h2>
        <div>
          {this.props.symbol}
          <b>{this.props.label}</b> is&nbsp;
          <b>{this.props.children}</b> for nutrition!
        </div>

        <div>{this.selectItem()} ... <b>{this.props.label}</b></div>
        <div>{selectThis()} {this.props.symbol}</div>
        <div>{selectThat()}</div>
      </Fragment>
    );
  }

}


export default Select;
