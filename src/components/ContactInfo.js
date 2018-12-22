/*
*
*
*
*
**/

import React from 'react';


class ContactInfo extends React.Component {
  render() {
    return (
      <div>
        <b>{this.props.contact.name}</b> {this.props.contact.phone}
      </div>

    );
  }
}


export default ContactInfo;
