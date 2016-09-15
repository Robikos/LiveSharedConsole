import React from 'react';

class Window extends React.Component {
  static get propTypes() {
    return {
      content: React.PropTypes.array
    };
  }

  render() {
    return (
      <div className="jumbotron window">
        <div>
          {
            this.props.content.map(
              (data, index) => {
                return (
                  <div key={index} className="jumbotron window--inner">
                    <div>User: { data["user"] }</div>
                    <div>Code: { data["code"] }</div>
                    <div>Result: { data["content"] }</div>
                    <br />
                  </div>
                );
              }
            )
          }
        </div>
      </div>
    );
  }
}

export default Window;
