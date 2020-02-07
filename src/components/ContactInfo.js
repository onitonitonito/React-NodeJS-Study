/*
* ==== 컴포넌드(부품)레벨 -- 자식(CHILD)
*
* - use for './components/ContactInfoApp.js'
* - use for '../Lect2017/Lect02-5.js'
*
**/

import React, { Component } from 'react';

class ContactInfo extends Component {
  static defaultProps = {
    children : 'Component-Level',
    contact : {
      name  : 'LEE',
      phone : '010-1234-1234',
    },
  }

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
