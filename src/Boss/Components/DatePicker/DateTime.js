import assign from 'object-assign';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';
import moment from 'moment';
import React from 'react';
import CalendarContainer from './CalendarContainer';

/* eslint-disable */

const TYPES = PropTypes;
const Datetime = createClass({
  propTypes: {
    // value: TYPES.object | TYPES.string,
    // defaultValue: TYPES.object | TYPES.string,
    onFocus: TYPES.func,
    onBlur: TYPES.func,
    onChange: TYPES.func,
    locale: TYPES.string,
    utc: TYPES.bool,
    input: TYPES.bool,
    // dateFormat: TYPES.string | TYPES.bool,
    // timeFormat: TYPES.string | TYPES.bool,
    inputProps: TYPES.object,
    timeConstraints: TYPES.object,
    viewMode: TYPES.oneOf(['years', 'months', 'days', 'time']),
    isValidDate: TYPES.func,
    open: TYPES.bool,
    strictParsing: TYPES.bool,
    closeOnSelect: TYPES.bool,
    closeOnTab: TYPES.bool
  },

  getDefaultProps() {
    const nof = function () {};
    return {
      className: '',
      defaultValue: '',
      inputProps: {},
      input: true,
      onFocus: nof,
      onBlur: nof,
      onChange: nof,
      timeFormat: true,
      timeConstraints: {},
      dateFormat: true,
      strictParsing: true,
      closeOnSelect: false,
      closeOnTab: true,
      utc: false
    };
  },

  getInitialState() {
    const state = this.getStateFromProps(this.props);

    if (state.open === undefined) {
      state.open = !this.props.input;
    }

    state.currentView = this.props.dateFormat ? (this.props.viewMode || state.updateOn || 'days') : 'time';

    return state;
  },


  getUpdateOn(formats) {
    if (formats.date.match(/[lLD]/)) {
      return 'days';
    } else if (formats.date.indexOf('M') !== -1) {
      return 'months';
    } else if (formats.date.indexOf('Y') !== -1) {
      return 'years';
    }

    return 'days';
  },

  getFormats(props) {
    const formats = {
      date: props.dateFormat || '',
      time: props.timeFormat || ''
    };
    const locale = this.localMoment(props.date, null, props).localeData();


    if (formats.date === true) {
      formats.date = locale.longDateFormat('L');
    } else if (this.getUpdateOn(formats) !== 'days') {
      formats.time = '';
    }

    if (formats.time === true) {
      formats.time = locale.longDateFormat('LT');
    }

    formats.datetime = formats.date && formats.time ?
    // `${formats.date} ${formats.time}` :
    `${formats.date}` :
    formats.date || formats.time
    ;

    return formats;
  },

  componentWillReceiveProps(nextProps) {
    const formats = this.getFormats(nextProps);
    let updatedState = {};

    if (nextProps.value !== this.props.value ||
      formats.datetime !== this.getFormats(this.props).datetime) {
      updatedState = this.getStateFromProps(nextProps);
    }

    if (updatedState.open === undefined) {
      if (this.props.closeOnSelect && this.state.currentView !== 'time') {
        updatedState.open = false;
      } else {
        updatedState.open = this.state.open;
      }
    }

    if (nextProps.viewMode !== this.props.viewMode) {
      updatedState.currentView = nextProps.viewMode;
    }

    if (nextProps.locale !== this.props.locale) {
      if (this.state.viewDate) {
        const updatedViewDate = this.state.viewDate.clone().locale(nextProps.locale);
        updatedState.viewDate = updatedViewDate;
      }
      if (this.state.selectedDate) {
        const updatedSelectedDate = this.state.selectedDate.clone().locale(nextProps.locale);
        updatedState.selectedDate = updatedSelectedDate;
        updatedState.inputValue = updatedSelectedDate.format(formats.datetime);
      }
    }

    if (nextProps.utc !== this.props.utc) {
      if (nextProps.utc) {
        if (this.state.viewDate) { updatedState.viewDate = this.state.viewDate.clone().utc(); }
        if (this.state.selectedDate) {
          updatedState.selectedDate = this.state.selectedDate.clone().utc();
          updatedState.inputValue = updatedState.selectedDate.format(formats.datetime);
        }
      } else {
        if (this.state.viewDate) { updatedState.viewDate = this.state.viewDate.clone().local(); }
        if (this.state.selectedDate) {
          updatedState.selectedDate = this.state.selectedDate.clone().local();
          updatedState.inputValue = updatedState.selectedDate.format(formats.datetime);
        }
      }
    }

    this.setState(updatedState);
  },

  onInputChange(e) {
    const value = e.target === null ? e : e.target.value;
    const localMoment = this.localMoment(value, this.state.inputFormat);
    const update = { inputValue: value };

    if (localMoment.isValid()/* && !this.props.value*/) {
      update.selectedDate = localMoment;
      update.viewDate = localMoment.clone().startOf('month');
    } else {
      update.selectedDate = null;
    }

    return this.setState(update, function () {
      return this.props.onChange(localMoment.isValid() ? localMoment : this.state.inputValue);
    });
  },

  getStateFromProps(props) {
    const formats = this.getFormats(props);
    const date = props.value || props.defaultValue;
    let selectedDate;
    let inputValue;

    if (date && typeof date === 'string') {
      selectedDate = this.localMoment(date, formats.datetime);
    } else if (date) {
      selectedDate = this.localMoment(date);
    }

    if (selectedDate && !selectedDate.isValid()) {
      selectedDate = null;
    }
    let viewDate = selectedDate ?
    selectedDate.clone().startOf('month') :
    this.localMoment().startOf('month')
    ;
    if(props.timeType &&  props.timeType === 'EndOfDay'){
      viewDate = selectedDate ?
      selectedDate.clone().endOf('month') :
      this.localMoment().endOf('month')
      ;
    } else if( props.timeType &&  props.timeType === 'StartOfDay') {
      viewDate = selectedDate ?
      selectedDate.clone().startOf('month') :
      this.localMoment().startOf('month')
      ;
    }


    const updateOn = this.getUpdateOn(formats);

    if (selectedDate) { inputValue = selectedDate.format(formats.datetime); } else if (date.isValid && !date.isValid()) { inputValue = ''; } else { inputValue = date || ''; }

    return {
      updateOn,
      inputFormat: formats.datetime,
      viewDate,
      selectedDate,
      inputValue,
      open: props.open
    };
  },
  onInputKey(e) {
    if (e.which === 9 && this.props.closeOnTab) {
      this.closeCalendar();
    }
  },

  showView(view) {
    const me = this;
    return function () {
      me.setState({ currentView: view });
    };
  },

  setDate(type) {
    const me = this;
    const nextViews = {
      month: 'days',
      year: 'months'
    };
    return function (e) {
      me.setState({
        viewDate: me.state.viewDate.clone()[type](parseInt(e.target.getAttribute('data-value'), 10)).startOf(type),
        currentView: nextViews[type]
      });
    };
  },

  addTime(amount, type, toSelected) {
    return this.updateTime('add', amount, type, toSelected);
  },

  subtractTime(amount, type, toSelected) {
    return this.updateTime('subtract', amount, type, toSelected);
  },

  updateTime(op, amount, type, toSelected) {
    const me = this;

    return function () {
      const update = {};
      const date = toSelected ? 'selectedDate' : 'viewDate';

      update[date] = me.state[date].clone()[op](amount, type);

      me.setState(update);
    };
  },

  allowedSetTime: ['hours', 'minutes', 'seconds', 'milliseconds'],
  setTime(type, value) {
    let index = this.allowedSetTime.indexOf(type) + 1;
    const state = this.state;
    const date = (state.selectedDate || state.viewDate).clone();
    let nextType;

    // It is needed to set all the time properties
    // to not to reset the time
    date[type](value);
    for (; index < this.allowedSetTime.length; index++) {
      nextType = this.allowedSetTime[index];
      date[nextType](date[nextType]());
    }

    // if (!this.props.value) {
      this.setState({
        selectedDate: date,
        inputValue: date.format(state.inputFormat)
      });
    // }
    this.props.onChange(date);
  },

  updateSelectedDate(e, close) {
    const target = e.target;
    let modifier = 0;
    const viewDate = this.state.viewDate;
    const currentDate = this.state.selectedDate || viewDate;
    let date;

    if (target.className.indexOf('rdtDay') !== -1) {
      if (target.className.indexOf('rdtNew') !== -1) { modifier = 1; } else if (target.className.indexOf('rdtOld') !== -1) { modifier = -1; }

      date = viewDate.clone()
      .month(viewDate.month() + modifier)
      .date(parseInt(target.getAttribute('data-value'), 10));
    } else if (target.className.indexOf('rdtMonth') !== -1) {
      date = viewDate.clone()
      .month(parseInt(target.getAttribute('data-value'), 10))
      .date(currentDate.date());
    } else if (target.className.indexOf('rdtYear') !== -1) {
      date = viewDate.clone()
      .month(currentDate.month())
      .date(currentDate.date())
      .year(parseInt(target.getAttribute('data-value'), 10));
    }

    date.hours(currentDate.hours())
    .minutes(currentDate.minutes())
    .seconds(currentDate.seconds())
    .milliseconds(currentDate.milliseconds());

    // if (!this.props.value) {
      const open = !(this.props.closeOnSelect && close);
      if (!open) {
        this.props.onBlur(date);
      }

      this.setState({
        selectedDate: date,
        viewDate: date.clone().startOf('month'),
        inputValue: date.format(this.state.inputFormat),
        open
      });
    // } else
    if (this.props.closeOnSelect && close) {
      this.closeCalendar();
    }

    this.props.onChange(date);
  },

  openCalendar() {
    if (!this.state.open) {
      this.setState({ open: true }, function () {
        this.props.onFocus();
      });
    }
  },

  closeCalendar() {
    this.setState({ open: false }, function () {
      this.props.onBlur(this.state.selectedDate || this.state.inputValue);
    });
  },

  handleClickOutside() {
    if (this.props.input && this.state.open && !this.props.open) {
      this.setState({ open: false }, function () {
        this.props.onBlur(this.state.selectedDate || this.state.inputValue);
      });
    }
  },

  localMoment(date, format, props) {
    props = props || this.props;
    const momentFn = props.utc ? moment.utc : moment;
    const m = momentFn(date, format, props.strictParsing);
    if (props.locale) { m.locale(props.locale); }
    return m;
  },

  componentProps: {
    fromProps: ['value', 'isValidDate', 'renderDay', 'renderMonth', 'renderYear', 'timeConstraints'],
    fromState: ['viewDate', 'selectedDate', 'updateOn'],
    fromThis: ['setDate', 'setTime', 'showView', 'addTime', 'subtractTime', 'updateSelectedDate', 'localMoment', 'handleClickOutside']
  },

  getComponentProps() {
    const me = this;
    const formats = this.getFormats(this.props);
    const props = { dateFormat: formats.date, timeFormat: formats.time };

    this.componentProps.fromProps.forEach((name) => {
      props[name] = me.props[name];
    });
    this.componentProps.fromState.forEach((name) => {
      props[name] = me.state[name];
    });
    this.componentProps.fromThis.forEach((name) => {
      props[name] = me[name];
    });

    return props;
  },

  render() {
    const DOM = React.DOM;
    let className = `rdt${this.props.className ?
      (Array.isArray(this.props.className) ?
      ` ${this.props.className.join(' ')}` :
      ` ${this.props.className}`) : ''}`;
    let children = [];
    if (this.props.input) {
      children = [DOM.input(assign({
        key: 'i',
        type: 'text',
        className: 'rdt-input',
        onFocus: this.openCalendar,
        onChange: this.onInputChange,
        onKeyDown: this.onInputKey,
        value: this.state.inputValue,
        style: this.props.style,
        disabled: this.props.disabled
      }, this.props.inputProps))];
    } else {
      className += ' rdtStatic';
    }

    if (this.state.open) {
      className += ' rdtOpen';
    }

    return DOM.div({ className }, children.concat(
      DOM.div(
        { key: 'dt', className: 'rdtPicker' },
        React.createElement(CalendarContainer, {
          view: this.state.currentView,
          viewProps: this.getComponentProps(),
          onClickOutside: this.handleClickOutside
        })
      )
    ));
  }
});

// Make moment accessible through the Datetime class
Datetime.moment = moment;
/* eslint-enable */

export default Datetime;
