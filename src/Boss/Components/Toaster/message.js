import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './style';
import '../Style/toaster.css';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.hide = this.hide.bind(this);
    this.clearTime = this.clearTime.bind(this);
  }
  hide(index) {
    this.props.callbackRM(index);
  }
  timeHide(index, timeout) {
    const self = this;
    self.timmer = setTimeout(() => {
      self.hide(index);
    }, timeout);
  }
  clearTime() {
    clearTimeout(this.timmer);
  }
  render() {
    const self = this;
    const options = self.props.options;
    const leftCon = Object.assign({}, styles.leftCon);
    const rightX = Object.assign({}, styles.rightX);
    const resumap = options.map((itm) => {
      const selfStye = Object.assign({}, styles[itm.msgtype]);
      if (itm.msgtype !== 'error') {
        self.timeHide(itm.id, itm.time);
      }
      return (
        <div className="megStyle" style={selfStye} key={itm.id} onMouseOver={() => { self.clearTime(); }}>
          <div style={leftCon}>{itm.text}</div>
          <span style={rightX} onClick={() => { self.hide(itm.id); }}>x</span>
        </div>
      );
    });
    return (
      <div style={styles.megGroup} >
        <ReactCSSTransitionGroup
          transitionName="carousel"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {resumap}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

Message.propTypes = {
  callbackRM: PropTypes.func
  // style: PropTypes.shape({})
};

Message.defaultProps = {
  options: [],
  callbackRM: {}
};

export default Message;
