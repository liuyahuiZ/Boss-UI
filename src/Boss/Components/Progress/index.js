import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as arrayUtils from '../../utils/array';
import styles from './style';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
  }
  componentDidMount() {
  }

  render() {
    const { percent, barColor, radius } = this.props;
    const borderRadius = { borderRadius: radius };
    const barWidth = { width: `${percent}%`, backgroundColor: barColor, borderRadius: radius };
    return (
      <div style={arrayUtils.merge([styles.container, borderRadius])}>
        <div style={arrayUtils.merge([styles.bar, barWidth])} />
      </div>
    );
  }
}

Progress.propTypes = {
  percent: PropTypes.number,
  barColor: PropTypes.string,
  radius: PropTypes.number
};

Progress.defaultProps = {
  percent: 0,
  barColor: 'rgb(65, 150, 252)',
  radius: 0
};


export default Progress;
