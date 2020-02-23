/*
*
* Component 의 기능은?
* - 변수를 가지고 있고,
* - 단독으로 랜더링으로 완성하고 있고
* - App 에서 부를수 있도록 Export 를 해야 하고
*
* (1) 화살표 함수를 사용할때는 그냥 this.state.value를 사용하고
*
* (2) 일반함수를 사용할 때는 constructor 에서 꼭 bind 를 해줘야 함.
*   - constructor 는 props 를 내려받음 ... constructor(props)
*   - 제일 처음으로 supuer(props) 를 상속 함
*   - this.function = this.function.bind(this);
**/


import React, { Component, Fragment } from 'react';

import logoPath from '../static/image/logoReact.png'

import img0 from '../static/image/nobody.png';
import img1 from '../static/image/Freddie.png';
import img2 from '../static/image/aoaCartoon1.png';
import img3 from '../static/image/aoaCartoon2.png';

class Info extends Component {
  state = {
      infos : [
          {
          name    : 'nobody',
          age     : -1,
          tall    : -1,
          src     : img0,
          caption : 'nobody is selected! click next!'
        }, {
          name    : 'Freddie Murcury',
          age     : 35,
          tall    : 180,
          src     : img1,
          caption : 'Freddie Murcury sing on the stage!'
        }, {
          name    : 'AoA in the Cartoons - part.01',
          age     : 25,
          tall    : 165,
          src     : img2,
          caption : 'DNN creat cartoon from AoA M/V-part.01'
        }, {
          name    : 'AoA in the Cartoons - part.02',
          age     : 25,
          tall    : 165,
          src     : img3,
          caption : 'to refer wesite about Cartoon DNN example'
        }
      ],
    };

  render() {
    return (
      <Fragment>
        <h1><img width={80} src={logoPath} alt={''}/> Hello~! React!</h1>
        <div>My name is <b>'{this.state.infos[this.props.idx].name}'</b></div>
        <div>Age = {this.state.infos[this.props.idx].age}</div>
        <div>Tall = {this.state.infos[this.props.idx].tall}</div>
        <br />

        <img
          width={300}
          src={this.state.infos[this.props.idx].src}
          alt={'default'}
        /><br />

        [Fig.{this.props.idx} {this.state.infos[this.props.idx].caption}]
        <br /><br />
      </Fragment>
    );
  }
}

export default Info;
