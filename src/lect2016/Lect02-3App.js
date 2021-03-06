/*
* 강좌2-3편 = Props
* http://bit.ly/2rScHBl
* ----- APP -----
*
* 프롭스는 자식에게 물려주고, ReadOnly 이기 때문에
* 프롭스를 전달하려면 중간에 App 을 하나 더 만든다.
* 앱에서 index.js로 전달해서 랜더링을 한다.
* CodeLab(comp) --> Old23Props(App) --> index.js
**/

import React, { Fragment } from 'react';
import CodeLab from '../components/CodeLab';
import Counter2 from '../components/Counter02';


// Component(부품) --> App(조립) --> index(DOM 랜더링)
class App extends React.Component {
  static defaultProps = {
    name: 'VeloCity',
    children: 'baby.. baby..! <--App 레벨변경!'
  }

  render()  {
    return (
      <Fragment>
        <CodeLab name={this.props.name} number={7}/>
        <br />
        <br />
        <br />
        <Counter2 numMin={3} numMax={12}/>
      </Fragment>
    );
  }
}


// props와 child 를 가로채서, App에 다시 던진다.
// Old23Props 전달--> Old23PropsApp 전달--> App (최종랜더링)



export default App;


/*

<CodeLab name="velopert">
  this contents! shows
</CodeLab>

**/
