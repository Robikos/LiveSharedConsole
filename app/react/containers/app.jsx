import React from 'react';
import Window from '../components/window';
import Input from '../components/input';

class App extends React.Component {
  constructor() {
    super();

    this.typeCommandTrigger = this.typeCommandTrigger.bind(this);

    this.state = {
      content: ''
    };
  }

  typeCommandTrigger(text) {
    this.setState({content: this.state.content + "> " + text + " ----> "});
    $.post(
      '/home/write',
      { command: text },
      data => {
        this.setState({content: this.state.content + data['response']});
      }
    ).bind(this);
  }

  render() {
    return (
      <div className="app">
        <div>
          Welcome to Ruby interactive console
        </div>
        <Window content={ this.state.content } />
        <Input typeCommand={ this.typeCommandTrigger }/>
      </div>
    );
  }
}

export default App;
