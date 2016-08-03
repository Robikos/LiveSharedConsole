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
        <code>
          { this.props.content }
        </code>
      </div>
    );
  }
}

export default Window;
