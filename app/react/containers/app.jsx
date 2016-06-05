import React from 'react';
import Window from '../components/window';
import Input from '../components/input';

class App extends React.Component {
  constructor() {
    super();

    this.typeCommandTrigger = this.typeCommandTrigger.bind(this);
    this.currentUserName = this.currentUserName.bind(this);

    this.state = {
      content: '',
      current_user: gon.current_user
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

  currentUserName() {
    return this.state.current_user.email;
  }

  render() {
    return (
      <div className="app">
        <div>
          Welcome to Ruby interactive console, dear { this.currentUserName() }
        </div>
        <Window content={ this.state.content } />
        <Input typeCommand={ this.typeCommandTrigger }/>
      </div>
    );
  }
}

export default App;
