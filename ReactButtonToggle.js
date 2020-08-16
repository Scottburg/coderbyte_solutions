// We provided some simple React template code. Your goal is to modify the component
//  so that you can properly toggle the button to switch between an ON state and an OFF
//  state. When the button is on and it is clicked, it turns off and the text within it
//   changes from ON to OFF and vice versa. Make use of component state for this challenge.

import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((state) => ({ toggle: !state.toggle }));
  }

  render() {
    let toggle = true;
    return (
      <button onClick={this.handleClick}>
        {this.state.toggle ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('root'));
