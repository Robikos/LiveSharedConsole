import React from 'react';
import Window from '../components/window';
import Input from '../components/input';
import LogoutButton from '../components/logout_button';
import API from '../services/api';

class App extends React.Component {
  constructor() {
    super();

    this.typeCommandTrigger = this.typeCommandTrigger.bind(this);
    this.typeCommandCallback = this.typeCommandCallback.bind(this);
    this.currentUserName = this.currentUserName.bind(this);

    this.state = {
      content: '',
      current_user: gon.current_user,
      room_id: gon.room_id
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

  currentRoomId() {
    return this.state.room_id;
  }

  render() {
    return (
      <div className="app">
        <LogoutButton />
        <div>
          Welcome to Ruby interactive console in room { this.currentRoomId() }, dear { this.currentUserName() }
        </div>
        <Window content={ this.state.content } />
        <Input typeCommand={ this.typeCommandTrigger }/>
      </div>
    );
  }
}

export default App;
