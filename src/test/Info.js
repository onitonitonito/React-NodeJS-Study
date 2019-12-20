/*
*
* Component 의 기능은?
* - 변수를 가지고 있고,
* - 단독으로 랜더링으로 완성하고 있고
* - App 에서 부를수 있도록 Export 를 해야 하고
**/


import React, { Component, Fragment } from 'react';
import Image from './Image';

let srcPath = '../../src/_static/image/';
let idx = 2;

const infos = [
    {
      name    : 'nobody',
      age     : -1,
      tall    : -1,
      src     : srcPath + 'nobody.png',
      caption : 'nobody is selected! click next!'
    }, {
      name    : 'Freddie Murcury',
      age     : 35,
      tall    : 180,
      src     : srcPath + 'Freddie.png',
      caption : 'Freddie Murcury sing on the stage!'
    }, {
      name    : 'AoA in the Cartoons - part.01',
      age     : 25,
      tall    : 165,
      src     : srcPath + 'aoaCartoon1.png',
      caption : 'DNN creat cartoon from AoA M/V-part.01'
    }, {
      name    : 'AoA in the Cartoons - part.02',
      age     : 25,
      tall    : 165,
      src     : srcPath + 'aoaCartoon2.png',
      caption : 'to refer wesite about Cartoon DNN example'
    },
  ];



class Info extends Component {
  render() {
    return (
      <Fragment>
        <div>My name is '<b>{this.props.name}</b>'</div>
        <div>Age = {this.props.age}</div>
        <div>Tall = {this.props.tall} </div>

        <Image src={this.props.src} /> <br />
        [Fig. {this.props.caption}]
        {this.props.src}
        <br /><br />
        i = 0
      </Fragment>
    );
  }
}


Info.defaultProps = {
  key  : idx,
  name : infos[idx]['name'],
  age  : infos[idx]['age'],
  tall : infos[idx]['tall'],
  src  : infos[idx]['src'],
  caption : infos[idx]['caption'],
}

export default Info;
