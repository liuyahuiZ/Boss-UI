import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './selectStyle';
import Icon from '../Icon';
import * as arrayUtils from '../../utils/array';
import theme from '../Style/theme';
import '../Style/style.css';

class Selects extends Component {
  constructor(props) {
    super(props);
    const { value, options } = this.props;
    this.state = {
      value: value || (options && options[0] && options[0].value),
      focus: false,
      text: (options && options[0] && options[0].text),
      filterText: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.focus = this.focus.bind(this);
  }

  componentDidMount() {
    const self = this;
    const { onChange, options } = this.props;
    self.$$options.onclick = function (ev) {
      let itm = {};
      if (ev.target.children.length > 0) {
        itm = ev.target.firstChild.dataset;
      } else {
        itm = ev.target.dataset;
      }
      if (itm.content) {
        const content = JSON.parse(itm.content);
        self.setState({
          value: content.value,
          text: content.text
        });
        onChange(ev, self, content.value);
        self.focus();
      }
    };
    self.$$selects.onblur = function () {
      self.setState({ focus: false });
    };
    for (let i = 0; i < options.length; i++) {
      if (options[i].default) {
        self.setState({
          value: options[i].value,
          text: options[i].text
        });
      }
    }
  }
  getValue() {
    return this.state.value;
  }

  handleChange(event) {
    console.log(event.target.value);
    const value = event.target.value;
    setTimeout(() => {
      this.setState({
        filterText: value
      });
    }, 500);
  }
  focus() {
    if (this.props.disabled) return;
    let status = this.state.focus;
    if (status) {
      status = false;
    } else {
      status = true;
    }
    this.setState({ focus: status });
  }
  render() {
    const { style, options, disabled, filter } = this.props;
    const containerStyle = Object.assign({}, styles.container, style);
    const disabledStyle = disabled ? styles.disabled : '';
    const optionStyle = this.state.focus ? styles.show : styles.hide;
    const selectActive = this.state.focus ? arrayUtils.merge([styles.active,  { outline: 0, boxShadow: `0 0 0 2px rgba(${theme.primaryRgb},.3)`, border: `1px solid rgb(${theme.primaryRgb})` }]) : '';
    // const selectActive = this.state.focus ? { outline: 0, boxShadow: `0 0 0 2px rgba(${theme.primaryRgb},.3)`, border: `1px solid rgb(${theme.primaryRgb})` } : '';
    const filtInput = filter ?
    (<div style={arrayUtils.merge([styles.filter, optionStyle])}>
      <Icon iconName={'ios-search-strong'} size={'80%'} />
      <input type="text" style={styles.filterInput} onChange={this.handleChange} /></div>)
    : '';
    const tabIndex = filter ? '' : 0;
    const optionNode = options.map((itm, id) => {
      const filterText = this.state.filterText;
      const key = `${itm.value}-${id}`;
      let node = (<div
        style={styles.node}
        key={key} data-content={JSON.stringify({ value: itm.value, text: itm.text })}
      >{itm.text}</div>);
      // console.log(filterText, itm.text, (itm.text).indexOf(filterText))
      if (filterText && filterText !== '') {
        if ((itm.text).indexOf(filterText) < 0) {
          node = '';
        }
      }
      return node;
    });
    return (
      <div
        style={containerStyle}
        ref={(r) => { this.$$selects = r; }}
        tabIndex={tabIndex}
        className="selects"
      >
        <div
          style={arrayUtils.merge([styles.select, selectActive, disabledStyle])}
          onClick={() => { this.focus(); }}
        >
          <div style={styles.text}>{this.state.text}</div>
          <span style={styles.icon}>
            <Icon iconName={'chevron-down'} size={'80%'} />
          </span>
        </div>
        <div className="options" style={arrayUtils.merge([styles.content, optionStyle])} ref={(r) => { this.$$options = r; }}>
          {filtInput}
          <div style={arrayUtils.merge([styles.options])}>{optionNode}</div>
        </div>
      </div>
    );
  }
}

Selects.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  style: PropTypes.shape({}),
  onChange: PropTypes.func,
  filter: PropTypes.bool
};

Selects.defaultProps = {
  value: '',
  disabled: false,
  options: [],
  style: {},
  onChange: () => {},
  filter: false
};

export default Selects;
