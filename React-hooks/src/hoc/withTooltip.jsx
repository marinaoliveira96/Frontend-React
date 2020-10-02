import React from 'react';

function withTooltip(Component) {
  return class withTooltip extends React.Component {
    state = { showTooltip: false };

    MouseOver = () => this.setState({ showTooltip: true });

    MouseOut = () => this.setState({ showTooltip: false });

    render() {
      return (
        <div onMouseOver={this.MouseOver} onMouseOut={this.MouseOut}>
          <Component {...this.props} showTooltip={this.state.showTooltip} />
        </div>
      );
    }
  };
}

export default withTooltip;
