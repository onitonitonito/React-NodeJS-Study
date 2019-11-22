/*
* ==== 컴포넌드(부품)레벨 -- 자식(CHILD)
*
**/

import React, { Component } from 'react';



class ContactInfo extends Component {
  render() {
    return (
      <tr>
        <td> {this.props.children} </td>
        <td><b> {this.props.contact.name} </b></td>
        <td> {this.props.contact.phone}</td>
      </tr>
    );
  }
}



export default ContactInfo;
