import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as arrayUtils from '../../utils/array';
import styles from './style';
import '../Style/comstyle.scss';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      tabContentStyle: '',
    };
    this.changeActive = this.changeActive.bind(this);
  }
  componentDidMount() {
    const self = this;
    self.setState({ options: this.props.options });
    self.$$tabHeader.onclick = function (ev) {
      let itm = {};
      if (ev.target.children.length > 0) {
        itm = ev.target.firstChild.dataset;
      } else {
        itm = ev.target.dataset;
      }
      if (itm.content) {
        console.log(itm.content);
        self.changeActive(itm.content);
      }
    };
  }
  changeActive(itm) {
    const arr = this.state.options;
    for (let i = 0; i < arr.length; i++) {
      if (itm === arr[i].tabName) {
        arr[i].isActive = true;
        this.setState({ tabContentStyle: { marginLeft: `${0 - (100 * i)}%` } });
      } else {
        arr[i].isActive = false;
      }
    }
    this.setState({ options: arr });
  }
  render() {
    let containerHead = styles.containerHead;
    let tabContentStyle = styles.tabContent;
    let tabItem = styles.tabItem;
    let activeStyle = styles.tabActive;
    if (this.props.modal && this.props.modal === 'MENULEFT') {
      containerHead = arrayUtils.merge([styles.containerHead,
        styles.floatLeft, styles.leftHeadWidth]);
      tabContentStyle = arrayUtils.merge([styles.tabContent,
        styles.floatLeft, styles.leftContentWidth]);
      tabItem = arrayUtils.merge([styles.tabItem, styles.show]);
      activeStyle = styles.leftTabActive;
    }
    const tabHeader = this.state.options.map((itm) => {
      let tabStyle = '';
      if (itm.isActive) {
        tabStyle = activeStyle;
      }
      const span = (<div
        style={arrayUtils.merge([tabItem, tabStyle])} key={itm.tabName}
        data-content={itm.tabName}
      >{itm.tabName}</div>);
      return span;
    });
    const tabContent = this.state.options.map((itm) => {
      let tabStyle = styles.hide;
      if (itm.isActive) {
        tabStyle = styles.show;
      }
      const span = (<div style={tabStyle} key={itm.tabName}>{itm.content}</div>);
      return span;
    });
    return (
      <div style={styles.container}>
        <div style={containerHead} ref={(r) => { this.$$tabHeader = r; }}>
          {tabHeader}
        </div>
        <div className="trans" style={tabContentStyle}>
          {tabContent}
        </div>
      </div>
    );
  }
}

Tab.propTypes = {
  options: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({})), PropTypes.number]),
  modal: PropTypes.string
};

Tab.defaultProps = {
  options: [],
  modal: ''
};


export default Tab;
