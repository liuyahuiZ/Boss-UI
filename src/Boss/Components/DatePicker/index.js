import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Datetime from './DateTime';
import '../Style/datetime.css';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.handleChange = this.handleChange.bind(this);
  }
  setValue(_value) {
    this.setState({ value: _value });
  }
  getValue() {
    return this.state.value;
  }
  handleChange = (moment) => {
    this.props.onChange(moment);
    // this.setState({ value: moment.format('YYYY-MM-DD HH:mm:ss') });
    this.setState({ value: +moment });
  }
  render() {
    const { dateFormat, viewMode, placeholder, isValidDate } = this.props;

    const inputProps = {
      readOnly: true,
      placeholder
    };
    return (
      <Datetime
        {...this.props}
        viewMode={viewMode}
        dateFormat={dateFormat}
        onChange={this.handleChange}
        inputProps={inputProps}
        isValidDate={isValidDate}
      />
    );
  }
}

DatePicker.propTypes = {
  value: PropTypes.number,
  dateFormat: PropTypes.string,
  onChange: PropTypes.func,
  viewMode: PropTypes.oneOf(['years', 'months', 'days', 'time']),
  placeholder: PropTypes.string,
  isValidDate: PropTypes.func
};

DatePicker.defaultProps = {
  dateFormat: 'YYYY-MM-DD',
  viewMode: 'days',
  placeholder: '',
  onChange: () => {},
  isValidDate: () => true,
  value: null
};

export default DatePicker;
