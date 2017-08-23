import React from 'react';
import createClass from 'create-react-class';
import onClickOutside from 'react-onclickoutside';
/* eslint-disable */

const DOM = React.DOM;
const DateTimePickerYears = onClickOutside(createClass({


  updateSelectedYear(event) {
    this.props.updateSelectedDate(event);
  },

  alwaysValidDate() {
    return 1;
  },

  handleClickOutside() {
    this.props.handleClickOutside();
  },
  renderYears(year) {
    let years = [];
    const irrelevantMonth = 0;
    const irrelevantDate = 1;
    const rows = [];
    const renderer = this.props.renderYear || this.renderYear;
    const selectedDate = this.props.selectedDate;
    const isValid = this.props.isValidDate || this.alwaysValidDate;
    let classes;
    let props;
    let currentYear;
    let isDisabled;
    let noOfDaysInYear;
    let daysInYear;
    let validDay;
    let i = -1;


    year -= 1;
    while (i < 11) {
      classes = 'rdtYear';
      currentYear = this.props.viewDate.clone().set(
        { year, month: irrelevantMonth, date: irrelevantDate });

        // Not sure what 'rdtOld' is for, commenting out for now as it's not working properly
        // if ( i === -1 | i === 10 )
        // classes += ' rdtOld';

      noOfDaysInYear = currentYear.endOf('year').format('DDD');
      daysInYear = Array.from({ length: noOfDaysInYear }, (e, i) => i + 1);

      validDay = daysInYear.find((d) => {
        const day = currentYear.clone().dayOfYear(d);
        return isValid(day);
      });

      isDisabled = (validDay === undefined);

      if (isDisabled) { classes += ' rdtDisabled'; }

      if (selectedDate && selectedDate.year() === year) { classes += ' rdtActive'; }

      props = {
        key: year,
        'data-value': year,
        className: classes
      };

      if (!isDisabled) {
        props.onClick = (this.props.updateOn === 'years' ?
        this.updateSelectedYear : this.props.setDate('year'));
      }

      years.push(renderer(props, year, selectedDate && selectedDate.clone()));

      if (years.length === 4) {
        rows.push(DOM.tr({ key: i }, years));
        years = [];
      }

      year += 1;
      i += 1;
    }

    return rows;
  },
  renderYear(props, year) {
    return DOM.td(props, year);
  },

  render() {
    const year = parseInt(this.props.viewDate.year() / 10, 10) * 10;

    return DOM.div({ className: 'rdtYears' }, [
      DOM.table({ key: 'a' }, DOM.thead({}, DOM.tr({}, [
        DOM.th({ key: 'prev', className: 'rdtPrev', onClick: this.props.subtractTime(10, 'years') }, DOM.span({}, '‹')),
        DOM.th({ key: 'year', className: 'rdtSwitch', onClick: this.props.showView('years'), colSpan: 2 }, `${year}-${year + 9}`),
        DOM.th({ key: 'next', className: 'rdtNext', onClick: this.props.addTime(10, 'years') }, DOM.span({}, '›'))
      ]))),
      DOM.table({ key: 'years' }, DOM.tbody({}, this.renderYears(year)))
    ]);
  },
}));
/* eslint-enable */

export default DateTimePickerYears;
