import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as arrayUtils from '../../utils/array';
// import styles from './style';
import '../Style/switch.css';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentStyle: false
    };
    this.changeActive = this.changeActive.bind(this);
    this.setShow = this.setShow.bind(this);
  }
  componentDidMount() {
    if (this.props.checked) {
      this.setShow();
    }
  }
  setShow() {
    this.setState({ contentStyle: true });
  }
  changeActive() {
    const { contentStyle } = this.state;
    if (contentStyle === false) {
      this.setState({ contentStyle: true });
    } else {
      this.setState({ contentStyle: false });
    }
    setTimeout(() => {
      this.props.onchange(this.state.contentStyle);
    }, 100);
  }
  render() {
    const { checkedText, unCheckText, bgColor } = this.props;
    const { contentStyle } = this.state;
    const bgStyle = contentStyle === true ? { backgroundColor: bgColor } : '';
    const switchs = contentStyle === true ? 'switch switch-checked' : 'switch';
    const switchInner = contentStyle === true ? (<span className="switch-inner">{unCheckText}</span>) : (<span className="switch-inner">{checkedText}</span>);
    return (
      <div
        className={switchs}
        style={arrayUtils.merge([bgStyle])} onClick={() => { this.changeActive(); }}
      >
        {switchInner}
      </div>
    );
  }
}

Switch.propTypes = {
  checkedText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  unCheckText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  checked: PropTypes.bool,
  bgColor: PropTypes.string,
  onchange: PropTypes.func
};

Switch.defaultProps = {
  checkedText: '开',
  unCheckText: '关',
  checked: false,
  bgColor: '',
  onchange: () => {}
};


export default Switch;
