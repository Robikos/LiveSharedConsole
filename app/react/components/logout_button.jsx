import React from 'react';
import API from '../services/api';

class LogoutButton extends React.Component {
  logout() {
  }

  render() {
    return (
      <div className="logout_button">
        <button onClick={ this.logout() } className="btn btn-primary">Logout!</button>
      </div>
    );
  }
}

export default LogoutButton;
