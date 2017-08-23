import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Style/comstyle.scss';
import * as arrayUtils from '../../utils/array';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
  }
  componentDidMount() {
  }

  render() {
    const { justify, align, style, gutter } = this.props;
    const styleJustyfy = justify ? `flex-justify-${justify}` : '';
    const styleAlign = align ? `flex-items-${align}` : '';
    const ClassName = `row flex-wrap ${styleJustyfy} ${styleAlign}`;
    const gutterStyle = { margin: `0 ${0 - (gutter / 2)}px` };
    const Children = this.props.children;
    let child = '';
    if (Children.length > 1) {
      child = Children.map((val) => {
        const dom = React.cloneElement(val, { colgutter: gutter });
        return dom;
      });
    } else {
      child = React.cloneElement(Children, { colgutter: gutter });
    }
    return (
      <div className={ClassName} style={arrayUtils.merge([style, gutterStyle])}>
        {child}
      </div>
    );
  }
}

Row.propTypes = {
  children: PropTypes.oneOfType([PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.shape({})), PropTypes.func]),
  justify: PropTypes.string,
  align: PropTypes.string,
  style: PropTypes.shape({}),
  gutter: PropTypes.number
};

Row.defaultProps = {
  children: [],
  justify: '',
  align: '',
  style: {},
  gutter: 0
};


export default Row;
