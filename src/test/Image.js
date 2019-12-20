/*
*
* Component 의 기능은?
* - 변수를 가지고 있고,
* - 단독으로 랜더링으로 완성하고 있고
* - App 에서 부를수 있도록 Export 를 해야 하고
**/


import React, { Component, Fragment } from 'react';
// import img from '../_static/image/nobody.png';


class Image extends Component {
  render() {
    return (
      <Fragment>
          <img
            width={350}
            src={this.props.src}
            alt={'default'}
          />
      </Fragment>
    );
  }
}


Image.defaultProps = {
  src  : '../_static/image/nobody.png',
  caption : 'Freddie Murcury sing a song!',
}

export default Image;
