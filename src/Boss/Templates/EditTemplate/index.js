import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ReactDom from 'react-dom';

import Button from '../../Components/Button';

import styles from './style';
import { EditPart, TitlePart } from '../../Parts';

import * as arrayUtils from '../../utils/array';

class EditTemplate extends Component {
  // 初始化编辑参数（如果是编辑）
  static mergeList(array, obj) {
    if (!obj) {
      return;
    }
    arrayUtils.forEach(array, (item) => {
      if (item.items) {
        arrayUtils.forEach(item.items, (t) => {
          if (obj[t.key]) {
            t.value = obj[t.key];
          }
        });
      } else if (obj[item.key]) {
        item.value = obj[item.key];
      }
    });
  }
  constructor() {
    super();
    this.state = {
      ButtonStatus: false
    };
    this.save = this.save.bind(this);
    this.saveCallback = this.saveCallback.bind(this);
  }
  saveCallback() {
    this.setState({ ButtonStatus: false });
  }

  save() {
    const { checkValid, getData } = this.editPart;
    if (checkValid()) {
      const comdata = getData();
      this.setState({ ButtonStatus: true });
      this.props.save(comdata, this.saveCallback);
    }
  }


  render() {
    const { editItemList, valid, titlepart, respData } = this.props;
    EditTemplate.mergeList(editItemList, respData);
    return (
      <div>
        <TitlePart titlepart={titlepart} />
        <EditPart
          editItemList={editItemList}
          respData={respData}
          valid={valid}
          ref={(ref) => {
            this.editPart = ref;
          }}
        />
        <div style={styles.container} >
          <span style={styles.text} />
          <Button text={'保存'} type={['primary']} disabled={this.state.ButtonStatus} onClick={this.save} />
        </div>
      </div>
    );
  }
}

EditTemplate.propTypes = {
  editItemList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  valid: PropTypes.arrayOf(PropTypes.shape()),
  save: PropTypes.func,
  titlepart: PropTypes.shape(),
  respData: PropTypes.shape(),
};

EditTemplate.defaultProps = {
  valid: [],
  save: () => {},
  titlepart: {},
  respData: {}
};

const render = function (props) {
  ReactDom.render(
    <EditTemplate
      {...props}
    />,
    document.getElementById('root')
  );
};


export default function renderEdit(props) {
  render(props);
}
