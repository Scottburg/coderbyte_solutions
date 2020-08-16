// We provided some simple React template code. Your goal is to modify the component so that the counter
//  correctly displays and it increments by one whenever the button is pressed. You are free to add
//   classes and styles, but make sure you leave the element ID's as they are.

import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  render() {
    return (
      <div id="mainArea">
        <p>
          button count: <span>{this.state.count}</span>
        </p>
        <button id="mainButton" onClick={this.handleClick}>
          Increase
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
