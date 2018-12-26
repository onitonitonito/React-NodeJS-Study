/*
* 컴포넌드(부품)레벨
*
**/

import React from 'react';


class ListObject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numners : 12,
      name: 'IDK!',
    }

    this.NumberList = this.NumberList.bind(this);
  }

  NumberList() {
    return(
      <ul>{this.state.numners}</ul>
    );
  }

  render() {
    console.log('numbers=', this.state.numbers);
    console.log('name=', this.state.name);

    return (
      <div> {this.NumberList} List Component</div>
    )
  }
}


ListObject.defaultProps = {
   name: 'default-name!'
}


export default ListObject;
