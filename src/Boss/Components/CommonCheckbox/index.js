import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Base } from '../../utils/';
import styles from './style';

class CommonCheckbox extends Component {

  constructor(props) {
    super(props);
    this.inputs = [];

    this.handleChange = this.handleChange.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  getValue() {
    return this.inputs.filter(input => input.checked).map(input =>
      this.props.options.filter(opt => opt.value.toString() === input.value)[0].value
    );
  }

  handleChange(event) {
    if (!this.props.disabled) {
      this.props.onChange(event, this);
    }
  }

  render() {
    const { options, type, disabled, style } = this.props;
    const optionNode = [];

    const name = Base.genRandomId();

    const labelStyle = Object.assign({}, styles.label);
    const checkboxStyle = Object.assign({}, styles.checkbox);
    for (let i = 0, length = options.length; i < length; i++) {
      const id = Base.genRandomId();
      const inputDisabled = disabled || options[i].disabled;
      // console.log({options[i].value})
      optionNode.push(
        <label
          style={Object.assign({}, labelStyle, inputDisabled && styles.disabled)}
          htmlFor={id}
          key={i}
        >
          <input
            ref={(input) => { this.inputs.push(input); }}
            type={type}
            style={checkboxStyle}
            value={options[i].value}
            id={id}
            name={name}
            defaultChecked={options[i].checked}
            disabled={inputDisabled}
            onChange={this.handleChange}
          />
          {options[i].text}
        </label>
      );
    }
    return (
      <div style={{ style }}>
        {optionNode}
      </div>
    );
  }
}

CommonCheckbox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})),
  disabled: PropTypes.bool,
  type: PropTypes.string,
  style: PropTypes.shape({}),
  onChange: PropTypes.func
};

CommonCheckbox.defaultProps = {
  options: [],
  disabled: false,
  style: {},
  type: 'radio',
  onChange: () => {}
};

export default CommonCheckbox;
