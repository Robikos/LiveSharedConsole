import React from 'react';
import Window from '../components/window';
import Input from '../components/input';
import LogoutButton from '../components/logout_button';
import API from '../services/api';

class App extends React.Component {
  constructor() {
    super();

    this.typeCommandTrigger = this.typeCommandTrigger.bind(this);
    this.currentUserName = this.currentUserName.bind(this);
    this.currentRoomId = this.currentRoomId.bind(this);
    this.updateConsole = this.updateConsole.bind(this);

    this.state = {
      content: [],
      current_user: gon.current_user,
      room_id: gon.room_id
    };
  }

  updateConsole(data) {
    this.setState(
      {
        content: this.state.content.concat([data])
      }
    );
  }

  componentDidMount() {
    if (this.state.room_id) {
      AppWebSocket.activeStream = AppWebSocket.cable.subscriptions.create(
        {
          channel: "ConsoleChannel",
          id: gon.room_id
        },
        {
          received(data) {
            this.updateConsole(data);
          },

          updateConsole: this.updateConsole
        }
      );
    }
  }

  typeCommandTrigger(text) {
    AppWebSocket.activeStream.send({ code: text });
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
