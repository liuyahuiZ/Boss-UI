import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ReactDom from 'react-dom';

import Button from '../../Components/Button';
import * as arrayUtils from '../../utils/array';
import styles from './style';

import { DetailPart, TitlePart } from '../../Parts';

class DetailTemplate extends Component {

  static mergeDetail(detailList, respData) {
    return detailList.map((info) => {
      // console.log(info);
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
    this.state = {};
  }

  render() {
    const { detailList, titlepart, respData, btns } = this.props;
    const mergedDetailList = DetailTemplate.mergeDetail(detailList, respData);
    return (
      <div>
        <TitlePart titlepart={titlepart} />
        <DetailPart
          detailList={mergedDetailList}
          data={respData}
        />
        <div style={styles.container} >
          <span style={styles.text} />
          {
            btns.map(btn => (
              <Button key={btn.text} style={styles.btn} text={btn.text} onClick={btn.action} />
            ))
          }
        </div>
      </div>
    );
  }
}

DetailTemplate.propTypes = {
  detailList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  respData: PropTypes.shape(),
  btns: PropTypes.arrayOf(PropTypes.shape()),
  titlepart: PropTypes.shape()
};

DetailTemplate.defaultProps = {
  valid: [],
  btns: [],
  titlepart: {},
  respData: {}
};

const render = function (props) {
  ReactDom.render(
    <DetailTemplate
      {...props}
    />,
    document.getElementById('root')
  );
};


export default function renderDetail(props) {
  render(props);
}
