import React from 'react';
import Window from '../components/window';
import Input from '../components/input';
import LogoutButton from '../components/logout_button';
import API from '../services/api';

import { connect } from 'react-redux';
import { sendCode, receiveResult } from '../actions/index.js';

class App extends React.Component {
  constructor() {
    super();

    this.typeCommandTrigger = this.typeCommandTrigger.bind(this);
    this.currentUserName = this.currentUserName.bind(this);
    this.currentRoomId = this.currentRoomId.bind(this);
    this.updateConsole = this.updateConsole.bind(this);
  }

  updateConsole(data) {
    this.props.receiveResult(data);
  }

  componentDidMount() {
    if (this.props.room_id) {
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
    sendCode(text);
  }

  currentUserName() {
    return this.props.current_user.email;
  }

  currentRoomId() {
    return this.props.room_id;
  }

  render() {
    return (
      <div className="app__outer">
        <div className="app">
          <div>
            Welcome to Ruby interactive console in room { this.currentRoomId() }, dear { this.currentUserName() }
          </div>
          <Window content={ this.props.content } />
          <Input typeCommand={ this.typeCommandTrigger }/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.content || [],
    current_user: gon.current_user,
    room_id: gon.room_id
  };
};

const mapDispatchToProps = dispatch => ({
  receiveResult: (data) => dispatch(receiveResult(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
