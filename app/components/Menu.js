import React, { Fragment } from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.status
    };
  }

  render() {
    var menus = [
                  <a href="" key="001" >init</a>,
                  <a href="#dashboard" key="002">dashboard</a>,
                  <a href="#test" key="003">test</a>
                ];
    if (this.state.status == 'false') {
      menus = [
                <a href="#dashboard" key="002">dashboard</a>,
                <a href="#test" key="003">test</a>
              ];
    }
    // support on react v.16.2 bable core 7
    //var tests = <React.Fragment>
                  //<div>test</div>
                  //<div>some</div>
                  //<div>black</div>
                //</React.Fragment>;
    return  (
      <sidebar className="sidebar">
        {menus}
      </sidebar>
    );
  }
}

export default Menu;
