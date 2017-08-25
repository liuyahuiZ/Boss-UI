import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style';
import theme from '../Style/theme';
import * as arrayUtils from '../../utils/array';

class Textarea extends Component {
  constructor(props) {
    super(props);
    const propValue = this.props.value;
    this.state = {
      value: this.props.value,
      count: propValue.length,
      focus: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  getValue() {
    return this.state.value;
  }

  handleChange(event) {
    if (!this.props.disabled) {
      this.props.onChange(event);
      const length = event.target.value.toString().length;
      const maxLength = this.props.maxLength;
      if (length <= maxLength) {
        this.setState({
          count: length,
          value: event.target.value
        });
      }
    }
  }

  handleFocus() {
    this.setState({ focus: true });
  }

  handleBlur() {
    this.setState({ focus: false });
  }

  render() {
    const { placeholder, maxLength, maxLengthShow, style, disabled, typeStyle } = this.props;
    const { count, value, focus } = this.state;

    let padWidth = 0;
    if (maxLengthShow) {
      padWidth = (maxLength.toFixed(0).length * 20) + 10;
    }
    let containerStyle = Object.assign({}, styles.containerStyle, typeStyle ? styles[typeStyle] : '');
    const textarea = Object.assign({}, styles.textarea, typeStyle ? styles[typeStyle] : '');
    containerStyle = Object.assign({}, containerStyle, style);
    let textareaStyle = Object.assign({}, textarea, disabled && styles.disabled);
    const padStyle = Object.assign({}, styles.padStyle, {
      width: padWidth
    });

    textareaStyle = focus ? arrayUtils.merge([textareaStyle,
      { outline: 0, boxShadow: `0 0 0 2px rgba(${theme.primaryRgb},.3)`, border: `1px solid rgb(${theme.primaryRgb})` }]) : textareaStyle;
    if (this.props.maxLengthShow) {
      return (
        <div style={containerStyle}>
          <textarea
            placeholder={placeholder}
            style={textareaStyle}
            onChange={this.handleChange}
            value={value}
            disabled={disabled}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          <span style={padStyle}>
            {count}/{maxLength}
          </span>
        </div>
      );
    }
    return (
      <div style={containerStyle}>
        <textarea
          placeholder={placeholder}
          style={textareaStyle}
          onChange={this.handleChange}
          value={value}
          disabled={disabled}
        />
      </div>
    );
  }
}

Textarea.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  maxLengthShow: PropTypes.bool,
  style: PropTypes.shape({}),
  typeStyle: PropTypes.string,
  onChange: PropTypes.func,
};

Textarea.defaultProps = {
  value: '',
  placeholder: '',
  disabled: false,
  style: {},
  maxLength: 50,
  maxLengthShow: true,
  typeStyle: '',
  onChange: () => {},
};

export default Textarea;
