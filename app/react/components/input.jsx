import React from 'react';

class Input extends React.Component {
  static get propTypes() {
    return {
      typeCommand: React.PropTypes.func
    };
  }

  constructor() {
    super();

    this.inputText = this.inputText.bind(this);
  }

  inputText() {
    let val = this.refs.command_input.value;
    this.props.typeCommand(val);
    this.refs.command_input.value = "";
  }

  render() {
    return (
      <div>
        <input className="input" ref="command_input" placeholder="Type here..." />
        <button className="ready-btn btn btn-submit" onClick={ this.inputText }>Submit</button>
      </div>
    );
  }
}

export default Input;
