import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { title, children, style } = this.props;

    const containerStyle = Object.assign({}, styles.container, style);
    const titleStyle = Object.assign({}, styles.title);
    return (
      <div style={containerStyle}>
        <div style={titleStyle}>
          {title}
        </div>
        {children}
      </div>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  style: PropTypes.shape({})
};

Container.defaultProps = {
  children: null,
  style: {},
  title: ''
};

export default Container;
