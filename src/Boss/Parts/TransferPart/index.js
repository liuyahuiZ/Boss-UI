/**
 * 穿梭组件，支持多选、排序
 * create by  zhangsen 2017/08/7
 */
import React from 'react';
import { PropTypes } from 'prop-types';
import Icon from '../../Components/Icon';
import '../../Components/Style/style.scss';

const propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})),
  chose: PropTypes.arrayOf(PropTypes.shape({})),
  selected: PropTypes.arrayOf(PropTypes.shape({})),
  minIndex: PropTypes.number
};

const defaultProps = {
  list: [],
  chose: [],
  selected: [],
  minIndex: 0
};

const getChoseData = (chose, itemData) => {
  const selectedData = [];
  chose.forEach((cItem) => {
    const thisIndex = itemData.findIndex(item => item.value === cItem.value);
    if (thisIndex !== -1) {
      selectedData.push(cItem);
    }
  });
  return selectedData;
};

const getItemData = (chose, itemData) => {
  let selectedData = [...itemData];
  let maxIndex = 0;
  let minIndex = itemData.length;

  chose.forEach((cItem) => {
    const thisIndex = selectedData.findIndex(item => item.value === cItem.value);

    if (thisIndex !== -1) {
      console.log(thisIndex);
      maxIndex = thisIndex > maxIndex ? thisIndex : maxIndex;
      minIndex = thisIndex < minIndex ? thisIndex : minIndex;
      selectedData = [
        ...selectedData.slice(0, thisIndex),
        ...selectedData.slice(thisIndex + 1)
      ];
    }
  });
  return { data: selectedData, maxIndex, minIndex };
};

const isSelectes = (val, arr) => {
  let flag = false;
  if (!arr.length) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i].value) {
      flag = true;
      break;
    }
  }
  return flag;
};

/**
 * Creates a new TransferPart.
 * @class
 */

class TransferPart extends React.Component {
  constructor(props) {
    super(props);
    const { list, chose, selected, minIndex } = this.props;
    this.selectItem = this.selectItem.bind(this);
    this.confirmChose = this.confirmChose.bind(this);
    this.sortItem = this.sortItem.bind(this);
    this.state = { list, chose, selected, minIndex };
  }
  selectItem(e, index, _data, isChk, dataType) {
    const { list, chose, selected, minIndex } = this.state;
    if (!e.shiftKey) {
      // 简单点击
      if (!e.ctrlKey) {
        this.setState({ chose: [_data], minIndex: index });
      } else {
        // 按下ctrl
        let tmpChose = chose;
        if (!isChk) {
          // 未被选中
          tmpChose.push(_data);
          this.setState({ chose: tmpChose, minIndex: index });
        } else {
          // 已经选中
          const idx = tmpChose.findIndex(item => item.value === _data.value);
          tmpChose = [...tmpChose.slice(0, idx),
            ...tmpChose.slice(idx + 1),
          ];
          this.setState({ chose: tmpChose });
        }
      }
    } else {
      // 按下shift键
      const thisData = dataType === 'selected' ? selected : list;
      let choseData = [];
      if (index > minIndex) {
        choseData = thisData.slice(minIndex, index + 1);
      } else {
        choseData = thisData.slice(index, minIndex + 1);
      }
      this.setState({ chose: choseData });
    }
  }

  // 数据操作
  confirmChose(actionType, dataType) {
    // console.log('confirmChose',actionType, dataType);
    const { list, selected, chose } = this.state;
    const thisData = dataType === 'selected' ? selected : list;
    const otherType = dataType === 'selected' ? 'list' : 'selected';
    const otherData = otherType === 'selected' ? selected : list;
    if (actionType === 'all') {
      this.setState({ [dataType]: [], [otherType]: [...otherData, ...thisData] });
    } else {
      let tempOtherData = [];
      let tempThisData = [...thisData];
      for (let i = 0; i < chose.length; i++) {
        const itemChose = chose[i];
        const tempIndex = tempThisData.findIndex(item => item.value === itemChose.value);
        if (tempIndex !== -1) {
          tempThisData = [
            ...tempThisData.slice(0, tempIndex),
            ...tempThisData.slice(tempIndex + 1)
          ];
        }
      }
      if (!otherData.length) {
        tempOtherData = [...chose];
      } else {
        tempOtherData = [...chose];
        for (let i = 0; i < tempOtherData.length; i++) {
          const itemTempOtherData = tempOtherData[i];
          const tempIndex = otherData.findIndex(item => itemTempOtherData.value === item.value);
          if (tempIndex !== -1) {
            tempOtherData = [
              ...otherData.slice(0, i),
              ...otherData.slice(i + 1)
            ];
          }
        }
      }
      this.setState({
        [dataType]: [...tempThisData], [otherType]: [...otherData, ...tempOtherData] });
    }
  }

  // 调整顺序
  sortItem(dir, type) {
    const { chose, selected } = this.state;
    const selectedChose = getChoseData(chose, selected);
    // console.log('sortItem', selectedChose, selected);
    let selectedData = [];
    const selectData = getItemData(selectedChose, selected);
    const itemData = selectData.data;
    const maxIndex = selectData.maxIndex;
    const minIndex = selectData.minIndex;

    if (dir === 'up') {
      if (type === 'top') {
        selectedData = [...selectedChose, ...itemData];
      } else if (minIndex > 1) {
        selectedData = [
          ...itemData.slice(0, minIndex - 1),
          ...selectedChose,
          ...itemData.slice(minIndex - 1)
        ];
      } else {
        selectedData = [...selectedChose, ...itemData];
      }
    } else {
      selectedData = type === 'bottom' ? [...itemData, ...selectedChose] : selectedData = maxIndex < itemData.length ? [...itemData.slice(0, maxIndex + 1),
        ...selectedChose,
        ...itemData.slice(maxIndex + 1)
      ] : [...itemData, ...selectedChose];
    }
    this.setState({ selected: selectedData });
  }
  render() {
    const { list, chose, selected } = this.state;
    const selectedChose = getChoseData(chose, selected);
    const listChose = getChoseData(chose, list);
    return (
      <div className="transfer-block clear-fix">
        <div className="transfer-items">
          <ul onDoubleClick={() => { if (listChose.length) this.confirmChose('chose', 'list'); }}>
            {!list.length ? '' :
              list.map((item, index) =>
                <li key={index.toString()}>
                  <a
                    className={!isSelectes(item.value, chose) ? '' : 'select'}
                    onClick={(e) => { this.selectItem(e, index, { ...item }, (isSelectes(item.value, chose)), 'list'); }}
                  >
                    {item.value}
                  </a>
                </li>
              )
            }
          </ul>
        </div>
        <div className="transfer-btns">
          <span className="btn" onClick={() => { if (listChose.length) this.confirmChose('chose', 'list'); }}><Icon iconName={'arrow-right-c'} size={'120%'} /></span>
          <span className="btn" onClick={() => { if (list.length) this.confirmChose('all', 'list'); }} ><Icon iconName={'arrow-right-a'} size={'120%'} /></span>
          <span className="btn" onClick={() => { if (selectedChose.length) this.confirmChose('chose', 'selected'); }}><Icon iconName={'arrow-left-c'} size={'120%'} /></span>
          <span className="btn" onClick={() => { if (selected.length) this.confirmChose('all', 'selected'); }}><Icon iconName={'arrow-left-a'} size={'120%'} /></span>
        </div>
        <div className="transfer-items">
          <ul onDoubleClick={() => { if (selectedChose.length) this.confirmChose('chose', 'selected'); }}>
            {!selected.length ? '' :
              selected.map((item, index) =>
                <li key={index.toString()}>
                  <a
                    className={!isSelectes(item.value, chose) ? '' : 'select'}
                    onClick={e => this.selectItem(e, index, { ...item }, (isSelectes(item.value, chose)), 'selected')}
                  >
                    {item.value}
                  </a>
                </li>
              )
            }
          </ul>
        </div>
        <div className="transfer-btns">
          <span className="btn" onClick={() => this.sortItem('up', 'top')}><Icon iconName={'arrow-up-a'} size={'120%'} /></span>
          <span className="btn" onClick={() => this.sortItem('up')}><Icon iconName={'arrow-up-c'} size={'120%'} /></span>
          <span className="btn" onClick={() => this.sortItem('down')}><Icon iconName={'arrow-down-c'} size={'120%'} /></span>
          <span className="btn" onClick={() => this.sortItem('down', 'bottom')}><Icon iconName={'arrow-down-a'} size={'120%'} /></span>
        </div>
      </div>
    );
  }
}

TransferPart.propTypes = propTypes;
TransferPart.defaultProps = defaultProps;

export default TransferPart;
