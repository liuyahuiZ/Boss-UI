import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ReactDom from 'react-dom';

import Button from '../../Components/Button';
import * as arrayUtils from '../../utils/array';
import styles from './style';

import { TitlePart, RichDetailPart, TablePart } from '../../Parts';

class RichDetailTemplate extends Component {

  static mergeDetail(detailList, respData) {
    return detailList.map((info) => {
      if (info.items) {
        arrayUtils.forEach(info.items, (item) => {
          item.value = respData[item.key];
        });
      } else {
        info.value = respData[info.key];
      }

      return info;
    });
  }

  constructor() {
    super();
    this.state = {
      listData: [],
      isLoading: false,
      searchParams: null
    };
  }
  getValue(arr, key, value) {
    console.log(this);
    let text = '';
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].key === key) {
        if (arr[i].format) {
          text = arr[i].format[value];
        }
      }
    }
    return text;
  }
  getComment(detailData, respData) {
    const AllComment = detailData.map((item) => {
      let mergedDetailList = [];
      if (respData[item.key] && respData[item.key] !== '') {
        mergedDetailList = RichDetailTemplate.mergeDetail(item.data, respData[item.key]);
      } else {
        mergedDetailList = RichDetailTemplate.mergeDetail(item.data, respData);
      }
      let comment = '';
      if (item.templateType === 'table') {
        const showIndex = item.showIndex ? item.showIndex : false;
        comment = (
          <div style={styles.marginB} key={item.key}>
            <TablePart
              title={item.titlePart.title}
              items={respData[item.key]}
              minWidth={'100%'}
              itemFormat={item.data}
              showPage={false}
              showIndex={showIndex}
              ref={(items) => {
                this.table = items;
              }}
            />
          </div>);
      } else if (item.templateType === 'richTitle') {
        comment = (
          <div style={styles.marginB} key={item.key}>
            <RichDetailPart
              detailList={mergedDetailList}
              data={respData[item.key]}
            />
          </div>);
      } else if (item.templateType === 'richRuleTemplate') {
        const ruleArr = [{ ruleType: '1', text: '白名单' }, { ruleType: '2', text: '黑名单' }, { ruleType: '3', text: '欺诈规则' }];
        comment = ruleArr.map((items, idx) => {
          const key = `${idx}-${items.ruleType}`;
          const titlePart = {
            title: items.text,
            note: '',
            border: 'Hide'
          };
          const sellComponent = respData[item.key].map((ite) => {
            const color = ite.hitResult === '是' ? { color: '#FF0505' } : { color: '#2C952C' };
            let itemComponent = '';
            if (ite.ruleType === items.ruleType) {
              itemComponent = (<div style={arrayUtils.merge([styles.halfContainer])}>
                <span style={arrayUtils.merge([styles.text])} >{ite.hitDescription}:</span>
                <div style={arrayUtils.merge([styles.inline, color])}>{ite.hitResult}</div>
              </div>);
            }
            return itemComponent;
          });
          const children = (
            <div>
              <TitlePart titlepart={titlePart} />
              <div key={key} style={arrayUtils.merge([styles.borderAll, styles.paddingContiner])}>
                {sellComponent}
              </div>
            </div>);
          return (<div key={key} >{children}</div>);
        });
      } else if (item.templateType === 'richTemplate') {
        comment = (
          <div style={styles.marginB} key={item.key}>
            <TitlePart titlepart={item.titlePart} />
            <RichDetailPart
              detailList={mergedDetailList}
              data={respData[item.key]}
              modal={'list'}
              display={'half'}
              style={item.style}
            />
          </div>);
      } else {
        comment = (
          <div style={styles.marginB} key={item.key}>
            <TitlePart titlepart={item.titlePart} />
            <RichDetailPart
              detailList={mergedDetailList}
              data={respData[item.key]}
              display={'half'}
              style={item.style}
            />
          </div>
        );
      }
      return comment;
    });
    return AllComment;
  }
  render() {
    const { detailData, respData, btns } = this.props;
    // const mergedDetailList = RichDetailTemplate.mergeDetail(detailData, respData);
    return (
      <div>
        {this.getComment(detailData, respData)}
        <div style={styles.container} >
          {
            btns.map(btn => (
              <Button
                key={btn.text} style={styles.btn} type={btn.type}
                text={btn.text} onClick={btn.action}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

RichDetailTemplate.propTypes = {
  detailData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  respData: PropTypes.shape(),
  btns: PropTypes.arrayOf(PropTypes.shape()),
};

RichDetailTemplate.defaultProps = {
  valid: [],
  btns: [],
  respData: {}
};

const render = function (props) {
  ReactDom.render(
    <RichDetailTemplate
      {...props}
    />,
    document.getElementById('root')
  );
};


export default function renderDetail(props) {
  render(props);
}
