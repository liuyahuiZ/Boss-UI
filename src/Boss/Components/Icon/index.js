import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as arrayUtils from '../../utils/array';
import '../Style/font.css';
import styles from './style';

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
  }
  componentDidMount() {
  }

  render() {
    const { iconName, size, iconColor, iconPadding, style } = this.props;
    const fontSize = { fontSize: size };
    const color = { color: iconColor };
    const padding = iconPadding ? { padding: iconPadding } : styles.iconPadding;
    return (
      <i
        className={`ion-${iconName}`}
        style={arrayUtils.merge([fontSize, color, padding, style])}
      />
    );
  }
}

Icon.propTypes = {
  iconName: PropTypes.string,
  size: PropTypes.string,
  iconColor: PropTypes.string,
  iconPadding: PropTypes.string,
  style: PropTypes.shape()
};

Icon.defaultProps = {
  iconName: '',
  size: 0,
  iconColor: '#666',
  iconPadding: '',
  style: {}
};


export default Icon;
