import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import isValid from '../../utils/validFuncs';
import styles from './style';
import '../Style/input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    let propValue = this.props.value;

    if (propValue === null || propValue === undefined) {
      propValue = '';
    }
    this.state = {
      count: propValue.length,
      value: propValue
    };
    this.handleChange = this.handleChange.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    });
  }

  getValue() {
    if (this.props.type === 'number'
      && this.state.value !== ''
      && this.state.value !== undefined) {
      return +this.state.value;
    }
    return this.state.value;
  }

  setValue(_value) {
    this.setState({ value: _value });
  }

  handleFocus(event) {
    if (!this.props.disabled) {
      this.props.onFocus(event);
    }
  }

  handleBlur(event) {
    if (!this.props.disabled) {
      this.props.onBlur(event);
    }
  }

  computeStyle() {
    const { maxLength } = this.props;
    return maxLength;
  }


  handleChange(event) {
    const { disabled, type, max, maxLength, min, valid, onChange } = this.props;
    const value = event.target.value;
    if (!disabled) {
      if (value !== '') {
        if (valid && !isValid(value, valid)) {
          return;
        }
        if (type === 'number' && (max < value || min > value)) {
          return;
        }
      }
      const length = value.toString().length;
      if (length <= maxLength) {
        this.setState({
          count: length,
          value
        });

        onChange(event, this, value);
      }
    }
  }


  render() {
    const { placeholder, maxLength, maxLengthShow, disabled, style, typeStyle } = this.props;
    const { count, value } = this.state;
    let padWidth = 0;
    if (maxLengthShow) {
      padWidth = (maxLength.toFixed(0).length * 20) + 10;
    }

    const containerStyle = Object.assign({}, styles.containerStyle, styles[typeStyle], style);
    const inputStyle = Object.assign({}, styles.inputStyle, disabled && styles.disabled, {
      padding: `0 ${padWidth + 10}px 0 10px`
    });
    const padStyle = Object.assign({}, styles.padStyle, {
      width: padWidth
    });

    if (this.props.maxLengthShow) {
      return (
        <div style={containerStyle}>
          <input
            placeholder={placeholder}
            onChange={this.handleChange}
            style={inputStyle}
            value={value}
            disabled={disabled}
          />
          <span style={padStyle}>
            {count}/{maxLength}
          </span>
        </div>
      );
    }
    return (
      <div style={containerStyle}>
        <input
          placeholder={placeholder}
          onChange={this.handleChange}
          style={inputStyle}
          value={value}
          disabled={disabled}
        />
      </div>
    );
  }
}

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.shape({}),
  maxLength: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  disabled: PropTypes.bool,
  valid: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({}), PropTypes.func]),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  maxLengthShow: PropTypes.bool,
  typeStyle: PropTypes.string
};

Input.defaultProps = {
  value: '',
  style: {},
  type: 'text',
  max: Infinity,
  min: -Infinity,
  placeholder: '',
  maxLength: 50,
  maxLengthShow: true,
  valid: '',
  disabled: false,
  typeStyle: '',
  onFocus: () => {},
  onBlur: () => {},
  onChange: () => {},
};

export default Input;
