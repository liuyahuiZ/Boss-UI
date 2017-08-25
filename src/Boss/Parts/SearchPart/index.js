import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Button, Container, Toaster } from '../../Components';
import isValid from '../../utils/validFuncs';
import styles from './style';
import * as arrayUtils from '../../utils/array';
import genInput from '../factory';

const showError = (msg) => { console.log(msg); };

export default class SearchPart extends Component {
  constructor() {
    super();
    this.state = { searchStatus: false };
    this.search = this.search.bind(this);
    this.genInput = genInput.bind(this);
    this.getSearchData = this.getSearchData.bind(this);
    this.getData = this.getData.bind(this);
    this.checkValid = this.checkValid.bind(this);
  }
  getSearchData() {
    const { conditions } = this.props;
    const data = {};
    arrayUtils.forEach(conditions, (condition) => {
      if (condition.items) {
        arrayUtils.forEach(condition.items, (item) => {
          const $$dom = this[`$$${item.key}`];
          const value = $$dom.getValue ? $$dom.getValue() : $$dom.value;
          data[item.key] = item.format ? item.format(value) : value;
        });
      } else {
        const $$dom = this[`$$${condition.key}`];
        const value = $$dom.getValue ? $$dom.getValue() : $$dom.value;
        data[condition.key] = condition.format ? condition.format(value) : value;
      }
    });

    return data;
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
    const { conditions } = this.props;
    const data = {};
    arrayUtils.forEach(conditions, (item) => {
      arrayUtils.forEach(item.items, (it) => {
        data[it.key] = this.getDomData(it, true);
      });
    });

    return data;
  }
  // 表单验证
  // 每一项：
  // getValue: 获取输入值
  // valid: string/function/reg
  // errorMsg: 报错文字
  isValid() {
    const { conditions } = this.props;
    let hasShowError = false;
    return arrayUtils.every(conditions, (item) => {
      const { valid, errorMsg } = item;
      const $$dom = this[`$$${item.key}`];
      const value = $$dom.getValue ? $$dom.getValue() : $$dom.value;
      const res = isValid(value, valid);

      if (!hasShowError && !res && errorMsg) {
        showError(errorMsg);
        hasShowError = true;
      }
      return res;
    });
  }
  checkItemValid(item) {
    const { valid } = item;
    const $$dom = this[`$$${item.key}`];
    const value = $$dom.getValue ? $$dom.getValue() : $$dom.value;
    return isValid(value, valid);
  }
  checkValid() {
    const { conditions, valid } = this.props;
    // 单个校验
    const listValid = arrayUtils.every(conditions, (item) => {
      const children = arrayUtils.every(item.items, (it) => {
        const res = this.checkItemValid(it);

        if (!res && it.errorMsg) {
          Toaster.toaster({ type: 'error', content: it.errorMsg }, true);
        }

        return res;
      });
      if (!children) {
        // console.log('children', children);
      }

      // 行内校验
      let innerres = true;

      if (item.valid && !item.hasNoChild) {
        innerres = this.checkItemValid(item);

        if (!innerres && item.errorMsg) {
          Toaster.toaster({ type: 'warning', content: item.errorMsg }, true);
        }
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

    return wholeValid;
  }
  mergeList(array, obj) {
    this.array = array;
    if (!obj) {
      return;
    }
    arrayUtils.forEach(array, (item) => {
      if (item.items) {
        arrayUtils.forEach(item.items, (t) => {
          t.value = obj[t.key];
        });
      } else {
        item.value = obj[item.key];
      }
    });
  }
  search() {
    const { beforeSearch, onSearch, conditions } = this.props;
    // if (!this.isValid()) {
    //   return;
    // }
    if (this.checkValid()) {
      if (beforeSearch) {
        beforeSearch();
      }
      const data = this.getSearchData();
      onSearch(data);
      this.mergeList(conditions, data);
    }
  }

  renderButtons() {
    const { buttons } = this.props;
    if (!buttons) {
      return (
        <Button
          text="查询"
          type={['large', 'primary']}
          style={styles.button}
          onClick={this.search}
          disabled={this.state.searchStatus}
        />
      );
    }
    return buttons.map(button =>
      <Button
        key={`${button.text}`}
        text={button.text}
        type={['large', `${button.type}`]}
        style={styles.button}
        onClick={() => {
          if (button.func === 'search') {
            if (button.validFunc) {
              // console.log(button.validFunc());
              if (button.validFunc()) {
                this.search();
              } else {
                Toaster.toaster({ type: 'error', content: button.errorMsg, time: 3000 });
              }
            } else {
              this.search();
            }
          } else if (this.checkValid()) {
            const data = this.getSearchData();
            button.func(data);
          }
        }}
        disabled={this.state.searchStatus}
      />
    );
  }

  render() {
    const { conditions, title } = this.props;
    return (
      <div>
        <Container
          style={styles.container}
          title={title}
        >
          {
            conditions.map(condition => (
              <div
                style={Object.assign({}, styles.line, condition.wrapStyle)}
                key={condition.key}
                ref={(dom) => {
                  this[`$$wrap-${condition.key}`] = dom;
                }}
              >
                <span
                  style={styles.label}
                >
                  {condition.text}：
                </span>
                {
                  (condition.items || [condition]).map(item =>
                    <span key={item.key}>
                      {
                        this.genInput(item)
                      }
                      <span style={styles.after}>{item.after || ''}</span>
                    </span>
                  )
                }
              </div>
            ))
          }
          <br />
        </Container>
        <div
          style={styles.buttons}
        >
          {
            this.renderButtons()
          }
        </div>
      </div>
    );
  }
}

SearchPart.propTypes = {
  title: PropTypes.string,
  conditions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    key: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    format: PropTypes.func,
  })),
  buttons: PropTypes.arrayOf(PropTypes.shape({})),
  beforeSearch: PropTypes.func,
  onSearch: PropTypes.func,
  valid: PropTypes.arrayOf(PropTypes.shape({}))
};

SearchPart.defaultProps = {
  title: '查询列表',
  method: 'get',
  conditions: [],
  buttons: null,
  beforeSearch: () => {},
  onSearch: () => {},
  valid: []
};
