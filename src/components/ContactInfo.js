import React from 'react';


class ContactInfo extends React.Component {
  render() {
    return (
      <div>
        {this.props.contact.name} : 
        {this.props.contact.phone}
      </div>

    );
  }
}


export default ContactInfo;
