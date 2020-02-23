/*
* EmojiSelect - Component
*
* Infomation Selection Component
* Function bind outside = use this
* Arrow define inside = Not use this.
**/

import React, {Component, Fragment} from 'react';
import imgBacon from '../static/image/srcBacon.png'
import imgBrocolli from '../static/image/srcBrocolli.png'
import imgCookie from '../static/image/srcCookie.png'
import imgDonut from '../static/image/srcDonut.png'
import imgHamburger from '../static/image/srcHamburger.png'
import imgHotdog from '../static/image/srcHotdog.png'
import imgDunno from '../static/image/srcDunno.png'

class Select extends Component {
  constructor(props) {
    super(props);
    this.selectItem = this.selectItem.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  selectItem() {
    const answerString = `[OUT] You selected this Item = ${this.props.children}!`
    return answerString
  }

  getImage() {
    switch(this.props.label) {
      case('bacon'):
        return imgBacon;
      case('brocolli'):
        return imgBrocolli;
      case('cookie'):
        return imgCookie;
      case('donut'):
        return  imgDonut;
      case('hamburger'):
        return imgHamburger;
      case('hotdog'):
        return imgHotdog;
      default:
        return imgDunno;
    }
  }

  render() {
    const selectThis = () => {
      const answerString = `{IN] You selected this '${this.props.label}'`
      return answerString
    }

    const selectThat = () => {
      const answerString = `[IN] You selected '${this.props.symbol}' Item That way?!`
      return answerString
    }

    return(
      <Fragment>
      <br />
      <br />
        <img width={400} src={this.getImage()}/>
        <h2>
          <span role={"img"} aria-label={this.props.label}>{this.props.symbol}</span>
          &nbsp;YES! : {this.props.label}!
        </h2>
        <div>
          {this.props.symbol}&nbsp;
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
