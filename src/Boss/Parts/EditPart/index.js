import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style';
import { Toaster } from '../../Components/';
import { isArray } from '../../utils/base';
import isValid from '../../utils/validFuncs';
import * as arrayUtils from '../../utils/array';
import genInput from '../factory';

class EditPart extends Component {
  static checkRequired(valid, conditionValid) {
    if (!isArray(valid)) {
      valid = [valid];
    }

    if (conditionValid || valid.indexOf('required') > -1) {
      return (
        <span style={styles.require}>*</span>
      );
    }

    return null;
  }
  constructor(props) {
    super(props);
    this.state = {};
    this.getData = this.getData.bind(this);
    this.checkValid = this.checkValid.bind(this);
    this.genInput = genInput.bind(this);
  }
  getDomData(item, format) {
    const $$dom = this[`$$${item.key}`];
    const value = $$dom.getValue ? $$dom.getValue() : $$dom.value;

    if (format && item.format && value !== '') {
      return item.format(value);
    }

    return value;
  }
  getData() {
    const { editItemList } = this.props;
    const data = {};
    arrayUtils.forEach(editItemList, (item) => {
      arrayUtils.forEach(item.items, (it) => {
        data[it.key] = this.getDomData(it, true);
      });
    });

    return data;
  }

  checkItemValid(item) {
    const { valid } = item;
    const $$dom = this[`$$${item.key}`];
    const value = $$dom.getValue ? $$dom.getValue() : $$dom.value;
    return isValid(value, valid);
  }
  checkValid() {
    const { editItemList, valid } = this.props;

    // 单个校验
    const listValid = arrayUtils.every(editItemList, (item) => {
      const children = arrayUtils.every(item.items, (it) => {
        const res = this.checkItemValid(it);

        if (!res && it.errorMsg) {
          Toaster.toaster({ type: 'error', content: it.errorMsg }, true);
        }

        return res;
      });
      if (!children) {
        return false;
      }

      // 行内校验
      let innerres = true;

      if (item.valid && !item.hasNoChild) {
        const childValues = item.items.map(i => this.getDomData(i));
        innerres = item.valid(...childValues);
      }
      if (!innerres) {
        Toaster.toaster({ type: 'error', content: item.errorMsg });
      }

      return innerres;
    });

    if (!listValid) {
      return false;
    }

    // 全局校验
    const wholeValid = arrayUtils.every(valid, (item) => {
      const params = item.params.map((key) => {
        const $$dom = this[`$$${key}`];
        return $$dom.getValue ? $$dom.getValue() : $$dom.value;
      });
      const validFunc = item.func;

      const validRes = validFunc(...params);

      if (!validRes) {
        Toaster.toaster({ type: 'error', content: item.errorMsg });
      }
      return validRes;
    });

    if (valid && !wholeValid) {
      return false;
    }
    return true;
  }
  render() {
    const { editItemList, respData } = this.props;
    arrayUtils.mergeList(editItemList, respData);
    return (
      <div>
        {
          editItemList.map((editItem, idx) => {
            const key = `${idx}-${editItem.text}`;
            if (!editItem.items) {
              const item = Object.assign({}, editItem, { text: '' });
              editItem.items = [item];
              editItem.hasNoChild = true;
            }

            const dispStyle = {};

            if (editItem.isShow) {
              const params = editItem.isShowParams.map(p => respData[p]);
              if (!editItem.isShow(...params)) {
                dispStyle.display = 'none';
              }
            }

            return (
              <div
                key={key}
                ref={(dom) => {
                  this[`$$wrap-${editItem.key}`] = dom;
                }}
                style={Object.assign({}, styles.container, editItem.wrapStyle, dispStyle)}
              >
                <span style={styles.text} >
                  {
                    EditPart.checkRequired(editItem.valid, editItem.conditionValid)
                  }
                  <span style={editItem.textStyle}>
                    {editItem.text}：
                  </span>
                </span>
                {
                  editItem.items.map((item, innerIdx) => {
                    const innerkey = `inner-${innerIdx}`;
                    return (
                      <div style={styles.inline} key={innerkey}>
                        <span style={item.textStyle}>{item.text}</span>
                        {
                          this.genInput(item)
                        }
                        <span style={styles.after}>{item.after || ''}</span>
                        <span style={styles.remark}>{item.remark || ''}</span>
                      </div>
                    );
                  })
                }
              </div>
            );
          })
        }
      </div>
    );
  }
}

EditPart.propTypes = {
  editItemList: PropTypes.arrayOf(PropTypes.shape({})),
  valid: PropTypes.arrayOf(PropTypes.shape()),
  respData: PropTypes.shape({}),
};

EditPart.defaultProps = {
  valid: [],
  respData: {}
};


EditPart.defaultProps = {
  editItemList: []
};

export default EditPart;
