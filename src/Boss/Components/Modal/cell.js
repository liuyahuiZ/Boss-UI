import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './style';
import * as arrayUtils from '../../utils/array';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.hide = this.hide.bind(this);
  }
  hide(index) {
    this.props.callbackRM(index);
  }
  render() {
    const self = this;
    const options = this.props.options;
    const leftCon = Object.assign({}, styles.leftCon);
    const rightX = Object.assign({}, styles.rightX);
    const buttons = options.buttons.map((im) => {
      const rbutton = (<Button
        text={im.title}
        type={im.type}
        onClick={() => { im.callbk(options.id, self.hide); }}
        style={styles.marginRight}
        key={im.title}
      />);
      return rbutton;
    });
    const btnConStyle = options.btnConStyle ? `textAlign${options.btnConStyle}` : '';
    return (
      <div style={styles.box} >
        <div style={arrayUtils.merge([styles.continer, styles[options.type]])}>
          <div style={arrayUtils.merge([styles.title, styles[options.style]])} >
            <div style={leftCon}>{options.title}</div>
            <span style={rightX} onClick={() => { self.hide(options.id); }}>x</span>
          </div>
          <div style={styles.content}>{options.content}</div>
          <div style={arrayUtils.merge([styles.foot, styles[btnConStyle]])}>
            {buttons}
          </div>
        </div>
      </div>
    );
  }
}

Cell.propTypes = {
  callbackRM: PropTypes.func,
  options: PropTypes.shape({})
};

Cell.defaultProps = {
  options: [
    'type': 'middle',
    'style': 'normal'
  ],
  callbackRM: () => {}
};

export default Cell;
