import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from '../../Components/';
import { Base } from '../../utils/';

class Mix extends Component {
  constructor(props) {
    super(props);
    const optiondata = this.props.option.data;
    this.state = {
      comdata: [...optiondata]
    };
    this.changeData = this.changeData.bind(this);
  }
  getValue() {
    return this.state.comdata;
  }
  changeData() {
    const data = this.state.comdata;
    data.push({ key: Base.genRandomId() });
    this.setState({ comdata: data });
  }
  remove(arr, id) {
    this.arr = arr;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].key === id) {
        arr.splice(i, 1);
      }
    }
    return arr;
  }
  delData(itm) {
    const newOptions = this.state.comdata;
    const newarr = this.remove(newOptions, itm);
    this.setState({ comdata: newarr });
  }
  genInput(com, item) {
    const ref = { ref: (r) => { this[`$$${item.key}`] = r; } };
    com = Object.assign({}, com, ref);
    return (
      <div key={item.key}>
        {com}
        <Button
          text={'-'}
          type={['small']}
          onClick={() => { this.delData(item.key); }}
        />
      </div>
    );
  }
  render() {
    const { option } = this.props;
    const data = this.state.comdata;
    const resumap = data.map((itm) => {
      const passivityCom = this.genInput(option.passivityCom, itm);
      return passivityCom;
    });
    const initiativeCom = (<Button
      {...option.initiativeCom}
      onClick={this.changeData}
    />);
    return (
      <div>
        {initiativeCom}
        {resumap}
      </div>
    );
  }
}

Mix.propTypes = {
  option: PropTypes.shape()
};

Mix.defaultProps = {
  option: {}
};

export default Mix;
