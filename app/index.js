var React = require("react");
var ReactDOM = require("react-dom");
var App = require("./components/App").default;

const element = <div>
                  <h1>Hello, world</h1>
                  <App name="Ana" />
                </div>;
ReactDOM.render(
  element,
  document.getElementById('app')
);
