import React from 'react';

class App extends React.Component {
  render() {
    return  (
        <p>Hi, {this.props.name} </p>
    );
  }
}

export default App;
