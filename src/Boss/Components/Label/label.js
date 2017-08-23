import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as arrayUtils from '../../utils/array';
import Icon from '../Icon';
import styles from './style';

class Label extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
  }
  componentDidMount() {
  }

  render() {
    const { size, text } = this.props;
    const fontSizeSpan = size ? { fontSize: size } : '';

    return (
      <div style={arrayUtils.merge([styles.span, fontSizeSpan])}>
        <Icon iconName={'edit'} size={'120%'} />{text}
      </div>
    );
  }
}

Label.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
};

Label.defaultProps = {
  size: '',
  text: '',
};


export default Label;
