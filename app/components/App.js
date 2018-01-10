import React from 'react';
import Menu from './Menu';

class App extends React.Component {
  render() {
    return  (
        <div>
          <Menu status="false" className="abc"/>
          <p>Hi, {this.props.name} test React version: {React.version}</p>
          <div id="container"></div>
        </div>
    );
  }
}

export default App;
