/*
* ==== (부품) : CHILD
* (부품) ContactInfo -->
* (조립) ContactApp -->
* (렌더링) index
**/

import React from 'react';


class Contact extends React.Component {
  render() {
    // console.log('name=', this.props.contact.name);
    // console.log('phone=', this.props.contact.phone);

    return (
      <div>
        <b>{this.props.contact.name}</b> {this.props.contact.phone}
      </div>

    );
  }
}


export default Contact;
