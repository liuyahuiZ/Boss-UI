import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommonCheckbox from '../CommonCheckbox';
import styles from './style';

class Radio extends Component {
  getValue() {
    return this.commonCheckbox.getValue();
  }

  render() {
    const { options, disabled, style, ...other } = this.props;
    const containerStyle = Object.assign({}, styles.container, style);

    return (
      <div style={containerStyle}>
        <CommonCheckbox
          ref={(commonCheckbox) => { this.commonCheckbox = commonCheckbox; }}
          options={options}
          type="radio"
          disabled={disabled}
          {...other}
        />
      </div>
    );
  }
}

Radio.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})),
  disabled: PropTypes.bool,
  style: PropTypes.shape({})
};

Radio.defaultProps = {
  options: [],
  disabled: false,
  style: {}
};

export default Radio;
