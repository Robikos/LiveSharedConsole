import React from 'react';
import Window from '../components/window';
import Input from '../components/input';
import LogoutButton from '../components/logout_button';
import API from '../services/api';

class Application extends React.Component {
  constructor() {
    super();

    this.typeCommandTrigger = this.typeCommandTrigger.bind(this);
    this.typeCommandCallback = this.typeCommandCallback.bind(this);
    this.currentUserName = this.currentUserName.bind(this);

    this.state = {
      content: '',
      current_user: gon.current_user
    };
  }

  typeCommandTrigger(text) {
    this.setState({content: this.state.content + "> " + text + " ----> "});
    API.writeCode(text).then(this.typeCommandCallback);
  }

  typeCommandCallback(data) {
    this.setState({content: this.state.content + data['response']});
  }

  currentUserName() {
    return this.state.current_user.email;
  }

  render() {
    return (
      <div className="applololo">
        <LogoutButton />
        <div>
          Welcome to Ruby interactive console, dear { this.currentUserName() }
        </div>
        <Window content={ this.state.content } />
        <Input typeCommand={ this.typeCommandTrigger }/>
      </div>
    );
  }
}

export default Application;
