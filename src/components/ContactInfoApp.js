/*
* ==== 앱(조립)레벨 -- 부모(PARENT)
*
**/

import React, { Component, Fragment } from 'react';
import ContactInfo from './ContactInfo';



class ContactInfoApp extends Component {
  state = {
    contact: [
      { name: 'Abbey', phone: '010-1234-0001' },
      { name: 'Billy', phone: '010-1234-0002' },
      { name: 'Ceryl', phone: '010-1234-0003' },
      { name: 'Denny', phone: '010-1234-0004' },
      { name: 'Ellie', phone: '010-1234-0005' },
      { name: 'Felix', phone: '010-1234-0006' },
    ]
  };


  mapToComponent(contact) {
    return contact.map(this.arrayFunction)
  };


  arrayFunction(contact, i) {
    // console.log(i, contact)
    return <ContactInfo contact={contact} key={i}>{i+1}</ContactInfo>
  };


  render() {
    return (
      <Fragment>
        <h1>contact</h1>
        <table border='1' cellSpacing='0' cellPadding='3'>
          {this.mapToComponent(this.state.contact)}
        </table>
      </Fragment>
    )
  };
}


export default ContactInfoApp;
