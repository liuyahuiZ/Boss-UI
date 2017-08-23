import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style';

class Collapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabContentStyle: '',
    };
  }
  componentDidMount() {
  }
  render() {
    const Children = this.props.children;
    return (
      <div style={styles.container}>
        {Children}
      </div>
    );
  }
}

Collapse.propTypes = {
  children: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))]),
};

Collapse.defaultProps = {
  children: [],
};


export default Collapse;
