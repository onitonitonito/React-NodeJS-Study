/*
* ==== (조립) : PARENT
* (부품) ContactInfo -->
* (조립) ContactApp -->
* (렌더링) index
**/

import React from 'react';
import Contact from './Contact';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword : "",
      // 키워드 인수를 추가(검색 keyword)
      contactData: [
        { name: 'Abbey', phone: '010-0000-0001' },
        { name: 'Billy', phone: '010-0000-0002' },
        { name: 'Ceryl', phone: '010-0000-0003' },
        { name: 'Devis', phone: '010-0000-0004' },
        { name: 'Ellie', phone: '010-0000-0005' },
      ]
    };

    // 매소드 바인딩 반영을 꼭 해야 함!
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    this.setState({ keyword: e.target.value});
  }

  render()  {
    const mapToComponents = (data) => {
      data.sort();
      data = data.filter(
        (contact) => {
            return contact.name.toLowerCase()
              .indexOf(this.state.keyword.toLowerCase()) > -1;
        }
      );

      return data.map((contact, i) => {
        console.log(i, contact)

        return (
          <Contact contact={contact} key={i}> {i+1} </Contact>
        );
      });
    };


    return (
      <div>
        <h1>Contacts</h1>
        <div>{mapToComponents(this.state.contactData)}</div>

        <br/>
        <input
          name="keyword"
          placeholder="Search"
          value={this.state.keyword}
          onChange={this.handleChange}
        />
      </div>
    );
  }

}


export default App;
