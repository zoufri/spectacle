import React, { Component, PropTypes } from "react";

class SlideSet extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

SlideSet.defaultProps = {
  hasSlideChildren: true
};

SlideSet.propTypes = {
  children: PropTypes.array,
  hasSlideChildren: PropTypes.bool
};

SlideSet.contextTypes = {
  store: PropTypes.object
};

export default SlideSet;
