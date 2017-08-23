import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { noop } from '../../utils/base';
import styles from './style';

class TableRowColumn extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }
  onClick(event) {
    if (this.props.onClick) {
      this.props.onClick(event, this.props.columnNumber);
    }
  }

  render() {
    const { children, style, head, title } = this.props;
    const handlers = {
      onClick: this.onClick,
    };

    if (head) {
      return (
        <th
          {...handlers}
          style={Object.assign({}, styles.tableRowColumn, styles.TableHeaderRowColumn, style)}
          title={title}
        >
          {children}
        </th>
      );
    }

    return (
      <td
        {...handlers}
        style={Object.assign({}, styles.tableRowColumn, style)}
        title={title}
      >
        {children}
      </td>
    );
  }
}

TableRowColumn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  columnNumber: PropTypes.number,
  style: PropTypes.shape({}),
  head: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TableRowColumn.defaultProps = {
  onClick: noop,
  children: null,
  columnNumber: 0,
  style: {},
  title: '',
  head: false
};

export default TableRowColumn;
