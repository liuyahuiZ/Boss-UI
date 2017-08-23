import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as arrayUtils from '../../utils/array';
import styles from './style';
import '../Style/style.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      tabContentStyle: '',
      width: 600,
      height: 300,
      dotNum: 0,
      startX: 0,
      aboveX: 0,
      lock: false
    };
    this.changeActive = this.changeActive.bind(this);
  }
  componentDidMount() {
    const self = this;
    const arr = this.props.options;
    self.setState({ options: arr });
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
    if (this.props.autoPlay) {
      self.move();
    }
    if (this.props.dragAble) {
      self.drag(self, arr);
    }
  }
  drag(self, arr) {
    let dotNum = self.state.dotNum;
    const content = self.$$tabContent;
    this.arr = arr;
    content.addEventListener('mousedown', (e) => {
      e.preventDefault();
      self.setState({ startX: e.pageX });
      self.setState({ lock: true });
      //  console.log('startX:',touch.pageX)
    }, false);
    content.addEventListener('mousemove', (e) => {
      e.preventDefault();
      if (self.state.lock) {
        // console.log(e.pageX, self.state.startX, content.style.marginLeft);
        // const marginLeft = parseInt(content.style.marginLeft.replace('px', ''), 10);
        const marginLeft = 0 - (self.state.dotNum * self.state.width);
        const charge = e.pageX - self.state.startX;
        // console.log(charge);
        // console.log(marginLeft, charge, marginLeft + charge);
        self.setState({ aboveX: charge });
        self.setState({ tabContentStyle: { marginLeft: `${(marginLeft + charge)}px` } });
      }
    }, false);
    content.addEventListener('mouseup', (e) => {
      e.preventDefault();
      if (self.state.aboveX > 150) {
        dotNum -= 1;
      } else if (self.state.aboveX < -150) {
        dotNum += 1;
      }
      if (dotNum <= 0 || dotNum > arr.length) dotNum = 0;
      self.changeActive(arr[dotNum].tabName);
      self.setState({ lock: false });
    }, false);
    content.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      console.log(touch.pageX, self);
      self.setState({ startX: touch.pageX });
      //  console.log('startX:',touch.pageX)
    }, false);
  }
  move() {
    const arr = this.props.options;
    let dotNum = this.state.dotNum;
    setInterval(() => {
      this.changeActive(arr[dotNum].tabName);
      dotNum += 1;
      if (dotNum === arr.length) {
        dotNum = 0;
      }
    }, 4000);
  }
  changeActive(itm) {
    const arr = this.state.options;
    for (let i = 0; i < arr.length; i++) {
      if (itm === arr[i].tabName) {
        arr[i].isActive = true;
        this.setState({ dotNum: i });
        this.setState({ tabContentStyle: { marginLeft: `${0 - (this.state.width * i)}px` } });
      } else {
        arr[i].isActive = false;
      }
    }
    this.setState({ options: arr });
  }
  render() {
    const containerHead = styles.containerHead;
    const tabContentStyle = this.state.tabContentStyle;
    const height = { height: `${this.state.height}px` };
    const width = this.state.width;
    const itmWidth = { width: `${width}px` };
    const contentWidth = { width: `${this.state.options.length * width}px` };

    const tabHeader = this.state.options.map((itm) => {
      let span = '';
      if (this.props.showDotsText) {
        const tabStyle = itm.isActive ? styles.tabActive : '';
        span = (<div
          style={arrayUtils.merge([styles.tabItem, tabStyle])} key={itm.tabName}
          data-content={itm.tabName}
        >{itm.tabName}</div>);
      } else {
        const dotStyle = itm.isActive ? styles.dotActive : '';
        span = (<div
          style={arrayUtils.merge([styles.dot, dotStyle])} key={itm.tabName}
          data-content={itm.tabName}
        />);
      }
      return span;
    });
    const tabContent = this.state.options.map((itm) => {
      const span = (<div
        style={arrayUtils.merge([styles.tabContentItem, styles.floatLeft, itmWidth, height])}
        key={itm.tabName}
      > {itm.content}</div>);
      return span;
    });
    return (
      <div style={styles.container}>
        <div
          style={arrayUtils.merge([containerHead, itmWidth])}
          ref={(r) => { this.$$tabHeader = r; }}
        >
          {tabHeader}
        </div>
        <div className="trans" style={arrayUtils.merge([styles.tabContent, styles.floatLeft, itmWidth, height])}>
          <div className="trans" ref={(r) => { this.$$tabContent = r; }} style={arrayUtils.merge([styles.tabContent, tabContentStyle, styles.floatLeft, contentWidth, height])} >
            {tabContent}</div>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  options: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({})), PropTypes.number]),
  showDotsText: PropTypes.bool,
  autoPlay: PropTypes.bool,
  dragAble: PropTypes.bool,
};

Carousel.defaultProps = {
  options: [],
  showDotsText: false,
  autoPlay: false,
  dragAble: false
};


export default Carousel;
