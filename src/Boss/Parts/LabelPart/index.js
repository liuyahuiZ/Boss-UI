import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import * as arrayUtils from '../../utils/array';
import filter from '../../utils/filter';

import styles from './style';

class LabelPart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getValue(detail) {
    this.detail = detail;
    let color = detail.color ? { color: detail.color } : '';
    color = detail.colorFormat ? { color: detail.colorFormat[detail.value] } : color;
    const style = arrayUtils.merge([styles.value, color]);
    if (detail.format && detail.format !== '') {
      if (detail.format === 'html') {
        return (<span style={style} dangerouslySetInnerHTML={{ __html: detail.value }} />);
      }
      return (<span style={style}> {filter(detail.format, detail.value) || '——'} </span>);
    }
    return (<span style={style}> {detail.value || '——'} </span>);
  }
  render() {
    const { detailList, data } = this.props;
    const List = detailList;
    if (data && Object.getOwnPropertyNames(data).length > 0) {
      arrayUtils.mergeList(List, data);
    }
    let comment = '';
    comment = List.map((detail, idx) => {
      const key = `${idx}-${detail.text}`;
      const items = detail.items || [detail];
      if (detail.isShow) {
        const params = detail.isShowParams.map(p => data[p]);
        if (!detail.isShow(...params)) {
          return null;
        }
      }
      const spanStyle = detail.style ? styles.spanStyle : '';
      return (
        <div
          key={key}
          style={arrayUtils.merge([styles.content])}
        >
          <span
            style={arrayUtils.merge([styles.text, spanStyle])}
          >
            {detail.text}：
          </span>
          {
            items.map((item) => {
              const value = this.getValue(item);
              const after = (detail.value && detail.value !== '') && item.after ? <span style={styles.value}> {item.after} </span> : '';
              const remark = (detail.value && detail.value !== '') && item.remark ? <span style={styles.remark}>{item.remark || ''}</span> : '';
              const k = `inner-${item.key}`;

              return (
                <div key={k} style={styles.inlineText}>
                  {value}
                  {after}
                  {remark}
                </div>
              );
            })
          }
        </div>
      );
    });
    return (
      <div style={arrayUtils.merge([styles.container])}>
        {comment}
      </div>
    );
  }
}

LabelPart.propTypes = {
  detailList: PropTypes.arrayOf(PropTypes.shape({})),
  data: PropTypes.shape({})
};

LabelPart.defaultProps = {
  style: {},
  detailList: [],
  data: {}
};

export default LabelPart;
