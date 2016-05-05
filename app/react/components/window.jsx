import React from 'react';

class Window extends React.Component {
  static get propTypes() {
    return {
      content: React.PropTypes.string
    };
  }

  render() {
    return (
      <div className="window">
        { this.props.content }
      </div>
    );
  }
}

export default Window;
