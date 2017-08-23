import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Style/comstyle.scss';
import * as arrayUtils from '../../utils/array';

class Col extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      defaultAllWidth: 24
    };
  }
  componentDidMount() {
  }

  render() {
    const { flex, style, span, colgutter } = this.props;
    const flexLength = flex ? `flex-${flex}` : '';
    const widthStyle = { width: `${(span / this.state.defaultAllWidth) * 100}%` };
    const gutterStyle = { padding: `0 ${colgutter / 2}px` };
    const ClassName = `col ${flexLength}`;
    return (
      <div className={ClassName} style={arrayUtils.merge([widthStyle, gutterStyle, style])}>
        {this.props.children}
      </div>
    );
  }
}

Col.propTypes = {
  children: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.string, PropTypes.number]),
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.shape({}),
  span: PropTypes.number,
  colgutter: PropTypes.number
};

Col.defaultProps = {
  children: [],
  flex: '',
  style: {},
  span: 24,
  colgutter: 0
};


export default Col;
