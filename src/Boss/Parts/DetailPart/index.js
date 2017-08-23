import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style';
import * as arrayUtils from '../../utils/array';
import filter from '../../utils/filter';

class DetailPart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getValue(detail) {
    this.detail = detail;
    if (detail.format && detail.format !== '') {
      if (detail.format === 'html') {
        return (<span style={styles.value} dangerouslySetInnerHTML={{ __html: detail.value }} />);
      }
      return (<span style={styles.value}> {filter(detail.format, detail.value)} </span>);
    }
    return (<span style={styles.value}> {detail.value} </span>);
  }

  render() {
    const { detailList, data, display, style } = this.props;
    const borderStyle = style.border ? styles[`border${style.border}`] : 'borderBottom';
    let contentStyle = styles.container;
    if (display === 'half') {
      contentStyle = styles.halfContainer;
    }
    const comment = detailList.map((detail, idx) => {
      const key = `${idx}-${detail.text}`;
      const items = detail.items || [detail];
      if (detail.isShow) {
        const params = detail.isShowParams.map(p => data[p]);
        if (!detail.isShow(...params)) {
          return null;
        }
      }
      return (
        <div
          key={key}
          style={contentStyle}
        >
          <span
            style={styles.text}
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
                <div key={k} style={styles.inline}>
                  {value}
                  {after}
                  {remark}
                </div>
              );
            })
          }
        </div>
      );
    }
  );
    return (
      <div style={arrayUtils.merge([styles.paddingContiner, borderStyle])}>
        {comment}
      </div>
    );
  }
}

DetailPart.propTypes = {
  detailList: PropTypes.arrayOf(PropTypes.shape({})),
  data: PropTypes.shape({}),
  display: PropTypes.string,
  style: PropTypes.shape({})
};

DetailPart.defaultProps = {
  detailList: [],
  data: {},
  display: '',
  style: {}
};

export default DetailPart;
