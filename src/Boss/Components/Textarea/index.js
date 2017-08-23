import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style';

class Textarea extends Component {
  constructor(props) {
    super(props);
    const propValue = this.props.value;
    this.state = {
      value: this.props.value,
      count: propValue.length
    };
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    const { placeholder, maxLength, maxLengthShow, style, disabled, typeStyle } = this.props;
    const { count, value } = this.state;

    let padWidth = 0;
    if (maxLengthShow) {
      padWidth = (maxLength.toFixed(0).length * 20) + 10;
    }
    styles.containerStyle = Object.assign({}, styles.containerStyle, styles[typeStyle]);
    styles.textarea = Object.assign({}, styles.textarea, styles[typeStyle]);
    const containerStyle = Object.assign({}, styles.containerStyle, style);
    const textareaStyle = Object.assign({}, styles.textarea, disabled && styles.disabled);
    const padStyle = Object.assign({}, styles.padStyle, {
      width: padWidth
    });
    if (this.props.maxLengthShow) {
      return (
        <div style={containerStyle}>
          <textarea
            placeholder={placeholder}
            style={textareaStyle}
            onChange={this.handleChange}
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
  onChange: () => {}
};

Textarea.defaultProps = {
  value: '',
  placeholder: '',
  disabled: false,
  style: {},
  maxLength: 50,
  maxLengthShow: true,
  typeStyle: '',
  onChange: () => {}
};

export default Textarea;
