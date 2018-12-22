import React from 'react';
import ContactInfo from './ContactInfo';


class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactData: [{
        name: 'Abey',
        phone: '010-0000-0001',
      }, {
        name: 'Bert',
        phone: '010-0000-0002',
      }, {
        name: 'Corney',
        phone: '010-0000-0003',
      }, {
        name: 'Devis',
        phone: '010-0000-0004',
      }, {
        name: 'Ellis',
        phone: '010-0000-0005',
      }]
    };
  }

  render()  {
    const mapToComponents = (data) => {
      console.log(data);
      return data.map((contact, i) => {
        return (<ContactInfo contact={contact} key={i}/>);
      });
    };

    return (
      <div>
        <h1>Contacts</h1>
        <div>{mapToComponents(this.state.contactData)}</div>
      </div>
    );
  }

}


export default Contact;
