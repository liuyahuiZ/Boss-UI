import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style';
import * as arrayUtils from '../../utils/array';
import filter from '../../utils/filter';
import { Button } from '../../Components';

class RichDetailPart extends Component {
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
      return (<span style={style}> {filter(detail.format, detail.value)} </span>);
    }
    return (<span style={style}> {detail.value} </span>);
  }

  render() {
    const { detailList, data, display, modal, style } = this.props;
    const borderStyle = style.border ? styles[`border${style.border}`] : 'borderBottom';
    let contentStyle = styles.container;
    if (display === 'half') {
      contentStyle = styles.halfContainer;
    }
    let comment = '';
    if (modal === 'list') {
      if (!data) return '';
      comment = data.map((detail, idx) => {
        const key = `${idx}-${detail.ruleType}`;
        if (!detailList) return '';
        const children = detailList.map((itm, id) => {
          const itmKey = `${id}-${itm.key}`;
          let value = detail[itm.key];
          let color = itm.color ? { color: itm.color } : '';
          let inlineRich = styles.inline;
          color = itm.colorFormat ? { color: itm.colorFormat[detail[itm.key]] } : color;
          if (itm.format) {
            value = itm.format[detail[itm.key]];
          } else if (itm.content) {
            value = (<Button
              key={itm.content.text}
              text={itm.content.text}
              onClick={() => { itm.content.func(detail); }}
              type={itm.content.modal}
            />);
          } else if (typeof (value) === 'object' && value !== null && value.length && value.length > 0) {
            inlineRich = styles.inlineRich;
            value = value.map((itmV, ids) => {
              const itmkey = `${ids}-itm`;
              const itmValue = (<div
                key={itmkey} style={styles.inlineText}
              >
                {ids + 1}. {itmV}
              </div>);
              return itmValue;
            });
          }
          const com = (<div
            key={itmKey}
            style={arrayUtils.merge([contentStyle])}
          >
            <span
              style={arrayUtils.merge([styles.text])}
            >
              {itm.text}：
            </span>
            <div style={arrayUtils.merge([inlineRich, color])}>
              {value}
            </div>
          </div>);
          return com;
        });
        return (<div key={key} style={styles.iemContent}>{children}</div>);
      });
    } else {
      comment = detailList.map((detail, idx) => {
        const key = `${idx}-${detail.text}`;
        const items = detail.items || [detail];
        if (detail.isShow) {
          const params = detail.isShowParams.map(p => data[p]);
          if (!detail.isShow(...params)) {
            return null;
          }
        }
        const titleStyle = detail.style ? styles.titleStyle : '';
        const spanStyle = detail.style ? styles.spanStyle : '';
        return (
          <div
            key={key}
            style={arrayUtils.merge([contentStyle, titleStyle])}
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
    }
    return (
      <div style={arrayUtils.merge([styles.paddingContiner, borderStyle])}>
        {comment}
      </div>
    );
  }
}

RichDetailPart.propTypes = {
  detailList: PropTypes.arrayOf(PropTypes.shape({})),
  data: PropTypes.arrayOf(PropTypes.shape({})),
  display: PropTypes.string,
  modal: PropTypes.string,
  style: PropTypes.shape({})
};

RichDetailPart.defaultProps = {
  detailList: [],
  data: [],
  display: '',
  modal: '',
  style: {}
};

export default RichDetailPart;
