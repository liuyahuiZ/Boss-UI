import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as arrayUtils from '../../utils/array';
import Icon from '../Icon';
import styles from './style';

class LabelGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
  }
  componentDidMount() {
  }

  render() {
    const { options } = this.props;
    const spanMap = options.map((item) => {
      const fontSizeSpan = item.size ? { fontSize: item.size } : '';
      const type = item.type ? styles[`bg${item.type}`] : '';
      const icon = item.icon ? item.icon : '';
      const key = Math.random();
      const spanItem = (<div key={key} style={arrayUtils.merge([styles.span, fontSizeSpan, type])}>
        <Icon iconName={icon} size={'100%'} />{item.text}
      </div>);
      return spanItem;
    });

    return (
      <div style={arrayUtils.merge([styles.container])}>
        {spanMap}
      </div>
    );
  }
}

LabelGroup.propTypes = {
  options: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))]),
};

LabelGroup.defaultProps = {
  options: []
};


export default LabelGroup;
