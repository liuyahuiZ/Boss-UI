import React from 'react';
import createClass from 'create-react-class';
import DaysView from './DaysView';
import MonthsView from './MonthsView';
import YearsView from './YearsView';
import TimeView from './TimeView';
/* eslint-disable */
const CalendarContainer = createClass({
  viewComponents: {
    days: DaysView,
    months: MonthsView,
    years: YearsView,
    time: TimeView
  },

  render() {
    return React.createElement(this.viewComponents[this.props.view], this.props.viewProps);
  }
});
/* eslint-enable */

export default CalendarContainer;
