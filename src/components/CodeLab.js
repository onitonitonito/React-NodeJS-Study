import React from 'react';


class CodeLab extends React.Component {
  render() {
    let text = "Hi, I am codlab";
    let stylegg = {
      color: 'blck',
      backgroundColor: 'aqua'
    }

    return (
      // test will be done!

      <div style={stylegg}>
      {/* This is Comment */}
      '{text}' ... CodeLab Done! {/*coment inside*/}
      </div>
    );
  }
}

export default CodeLab;
