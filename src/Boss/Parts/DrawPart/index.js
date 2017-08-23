import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import styles from './style';

class DrawPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: 40,
      PointLocationArr: []
    };
    this.itmClick = this.itmClick.bind(this);
  }
  componentDidMount() {
    this.drawArr();
    const self = this;
    // 委托myCanvas的点击时间
    this.$$myCanvas.onclick = function (ev) {
      // console.log(ev);
      if (!self.props.options.canEdit) {
        return;
      }
      let itm = {};
      if (ev.target.children.length > 0) {
        itm = ev.target.firstChild.dataset;
      } else {
        itm = ev.target.dataset;
      }
      if (itm.content) {
        self.itmClick(JSON.parse(itm.content));
      }
    };
  }
  // 自动渲染
  drawArr() {
    const self = this;
    const pointArr = this.props.options.defaultPointArr;
    this.drawOtherItem(this.props.options.otherPointArr, this.props.options, self);
    for (let i = 0; i < pointArr.length; i++) {
      this.checkInArr(pointArr[i], this.state.PointLocationArr, self);
    }
    this.drawLine(pointArr);
  }
  drawOtherItem(pointArr, options, self) {
    for (let i = 0; i < pointArr.length; i++) {
      const opacity = pointArr[i].opacity ? pointArr[i].opacity : 0.3;
      const bgColor = `rgba(${options.typeFormat[pointArr[i].type]},${opacity})`;
      this.paint(pointArr[i], self, bgColor,
         options.colorGroup.centerDefaultColor);
    }
  }
  // 绘制线
  drawLine(pointArr) {
    const c = this.$$Canvas;
    const { options } = this.props;
    c.width = options.answer.length * this.state.unit;
    c.height = options.question.length * this.state.unit;
    const self = this;
    const cxt = c.getContext('2d');
    cxt.strokeStyle = options.colorGroup.LineColor;
    cxt.fillStyle = options.colorGroup.LineColor;
    cxt.clearRect(0, 0, c.width, c.height);
    for (let i = 0; i < pointArr.length; i++) {
      this.draw(cxt, self, pointArr[i], pointArr[i + 1]);
    }
  }
  change(x) {
    this.x = x;
    return ((x * this.state.unit) + (this.state.unit / 2));
  }
  draw(cxt, self, po1, po2) {
    this.cxt = cxt;
    if (po1 && po2) {
      cxt.lineTo(self.change(po1.Y), self.change(po1.X));
      cxt.lineTo(self.change(po2.Y), self.change(po2.X));
    }
    cxt.stroke();
  }
  // 点击每个坐标
  itmClick(item) {
    const self = this;
    this.pushArr(item, self);
    // console.log(this.state.PointLocationArr);
    this.drawLine(this.state.PointLocationArr);
  }
  pushArr(itm, self) {
    let arr = self.state.PointLocationArr;
    const groupColor = self.props.options.colorGroup;
    if (arr.length === 0) {
      arr.push(itm);
      self.setState({ PointLocationArr: arr });
      self.paint(itm, self, groupColor.bgActiveColor, groupColor.centerActiveColor);
      return arr;
    }
    arr = this.checkInArr(itm, arr, self);
    return arr;
  }
  // 校验是否在 arr数组里
  checkInArr(itm, arr, self) {
    this.itm = itm;
    let status = false;
    let spliceCite = 0;
    const groupColor = self.props.options.colorGroup;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].X === itm.X && arr[i].Y === itm.Y) {
        status = true;
      } else if (arr[i].X === itm.X) {
        this.paint(arr[i], self, groupColor.bgDefaultColor, groupColor.centerDefaultColor);
        arr.splice(i, 1);
        spliceCite = i;
      }
    }
    if (!status) {
      // console.log(itm, arr, arr[arr.length - 1]);
      //  判断超过2层不让点
      if (spliceCite === 0 && arr.length > 0) {
        if ((itm.X - arr[0].X) > 1) {
          console.log('请逐层选择');
          return arr;
        }
      }
      arr.splice(spliceCite, 0, itm);
      self.setState({ PointLocationArr: arr });
      this.paint(itm, self, groupColor.bgActiveColor, groupColor.centerActiveColor);
    }
    return arr;
  }
  // 给坐标点绘色
  paint(itm, self, color, itmColor) {
    this.itm = itm;
    const theDom = self[`$$${itm.X}-${itm.Y}`];
    theDom.style.background = color;
    theDom.firstChild.style.background = itmColor;
  }
  render() {
    const { options } = this.props;
    const questionArr = options.question;
    const answerArr = options.answer;
    const x = questionArr.length;
    const y = answerArr.length - 1;
    const brr = [];
    const self = this;
    for (let i = 0; i < x; i++) {
      brr[i] = [];
      for (let j = 0; j < y; j++) {
        // arr.push({ X: i, Y: j });
        brr[i].push({ X: i, Y: j });
      }
    }
    const panelHeade = answerArr.map((itm) => {
      const span = (<span key={itm} style={styles.itemHeader}>{itm}</span>);
      return span;
    });
    const panelLeft = questionArr.map((itm) => {
      const span = (<span key={itm} style={styles.itemHeader}>{itm}</span>);
      return span;
    });
    const panel = brr.map((itm, index) => {
      const itemCom = itm.map((iem) => {
        const commes = (<span key={`${iem.X}-${iem.Y}`} style={styles.item} ref={(r) => { self[`$$${iem.X}-${iem.Y}`] = r; }} >
          <span style={styles.round} data-content={JSON.stringify(iem)} >
            {iem.X}{iem.Y}</span> </span>);
        return (commes);
      });
      return (<div key={`$${itm.length - index}`} style={styles.lineItem} >{itemCom}</div>);
    });
    return (
      <div style={styles.content}>
        <div style={styles.containerHead}>{panelHeade}</div>
        <div style={styles.containerLeft}>{panelLeft}</div>
        <div style={styles.container} ref={(r) => { this.$$myCanvas = r; }}>
          {panel}
          <canvas style={styles.canvas} ref={(r) => { this.$$Canvas = r; }} />
        </div>
      </div>
    );
  }
}

DrawPart.propTypes = {
  options: PropTypes.shape({
    question: PropTypes.oneOfType([PropTypes.string,
      PropTypes.number, PropTypes.arrayOf(PropTypes.shape({}))]),
    answer: PropTypes.arrayOf(PropTypes.shape({})),
    defaultPointArr: PropTypes.arrayOf(PropTypes.shape({})),
    colorGroup: PropTypes.shape({
      LineColor: PropTypes.string,
      bgActiveColor: PropTypes.string,
      bgDefaultColor: PropTypes.string,
      centerActiveColor: PropTypes.string,
      centerDefaultColor: PropTypes.string,
    }),
    canEdit: PropTypes.bool,
    otherPointArr: PropTypes.arrayOf(PropTypes.shape({}))
  }).isRequired
};

DrawPart.defaultProps = {
  options: {
    question: [],
    answer: [],
    defaultPointArr: [],
    colorGroup: {
      LineColor: 'rgba(255,99,71,0.9)',
      bgActiveColor: 'rgba(255,240,245,0.6)',
      bgDefaultColor: 'rgba(255,240,245,0)',
      centerActiveColor: 'rgba(0,191,255,0.6)',
      centerDefaultColor: 'rgba(245,245,245,1)',
    },
    canEdit: true,
    otherPointArr: []
  }
};

export default DrawPart;
