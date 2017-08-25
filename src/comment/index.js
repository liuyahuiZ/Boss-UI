import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'boss';
import styles from './common/style';
import icons from './common/icon';

class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
        confirmDirty: false,
    };
  }
    
    render() {
// { Components, Parts, utils }
const dom = {};
const {
  Button,
  Input,
  DatePicker,
  Textarea,
  Select,
  Selects,
  Radio,
  Checkbox,
  Container,
  Toaster,
  Modal,
  RichEditor,
  Dynamic,
  Loader,
  Tab,
  Grid,
  Row,
  Col,
  Progress,
  FileUp,
  Icon,
  LabelGroup,
  Tree,
  Carousel,
  Collapse,
  Panel,
  Switch
} = Components;

const { SearchPart, TablePart, DrawPart, EditPart, TransferPart } = Parts;

const marginStyle = {
  margin: '10px'
};

const checkboxOptions = [{ value: 1, text: 'haha', checked: true }, { value: 2, text: 'haha2' }, { value: 3, text: 'haha3', disabled: true }];

const click = function (event) {
  console.log('onclick');
  console.log(event);
  console.log(dom);
  // marginStyle.margin = '40px';
};

const onchange = function (date) {
  console.log(date);
};

const switchChange = (date) => {
  console.log(date);
};
const searches = [{
  type: 'text',
  key: 'tel',
  errorMsg: '手机号错误',
  text: '贷款产品编号',
  style: { width: '200px' }
}, {
  type: 'text',
  key: 'name',
  valid: 'number',
  errorMsg: '手机号错误',
  text: '贷款产品名称',
  style: { width: '200px' }
}, {
  type: 'select',
  key: 'type',
  valid: 'number',
  errorMsg: '手机号错误',
  text: '贷款产品类型',
  value: -1,
  style: { width: '200px' },
  options: [{
    value: '', text: '请选择'
  }, {
    value: 1, text: 2
  }, {
    value: 2, text: 3
  }]
}, {
  type: 'select',
  key: 'channel',
  valid: 'number',
  errorMsg: '手机号错误',
  text: '贷款银行渠道',
  options: [{
    value: 1, text: 12
  }, {
    value: 2, text: 13
  }]
}, {
  type: 'timePickerRange',
  key: 'time',
  valid: 'number',
  errorMsg: '手机号错误',
  text: '贷款创建时间',
}];

const listData = [{
  no: '001',
  name: '很大',
  money: 12.111,
  date: 1494175550738,
  status: 0
}, {
  no: '002',
  money: 13,
  name: '很大',
  date: 1494275850738,
  status: 1
}, {
  no: '003',
  money: 13.1,
  name: '很大',
  date: 1494574850738,
  status: 1
}];

const listFormat = [{
  key: 'no',
  title: '贷款产品编号'
}, {
  key: 'name',
  title: '贷款产品名称'
}, {
  key: 'type',
  title: '贷款产品类型',
  format: ['fixed', 2],
}, {
  key: 'channel',
  title: '银行渠道',
  format: ['fixed', 2],
}, {
  key: 'repaymentMethod',
  title: '还款方式',
  format: ['fixed', 2],
}, {
  key: 'money',
  title: '产品期限类型',
  format: ['fixed', 2],
}, {
  key: 'money',
  title: '产品总配额',
  format: ['fixed', 2],
}, {
  key: 'date',
  title: '贷款创建时间',
  format: ['date', 'yyyy-MM-dd hh:mm:ss']
}, {
  key: 'status',
  title: '贷款产品状态',
  format: {
    0: '成功',
    1: '失败'
  }
}];

const operations = [{
  type: 'add',
  url: 'aa.html',
  auth: 'aa',
}, {
  type: 'delete',
  func: (idx, item) => {
    console.log('delete', idx, item);
  },
  auth: 'bb',
}, {
  text: '自定义',
  func: (idx, item) => {
    console.log('自定义', idx, item);
  },
  auth: 'cc',
}, {
  text: 'edit',
  func: (idx, item) => {
    console.log('隐藏', idx, item);
  },
  auth: 'edit',
}];

const drawOptions = {
  question: ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'],
  answer: ['', 'a1', 'a2', 'a3', 'a4', 'a5'],
  defaultPointArr: [{ X: 0, Y: 1 }, { X: 1, Y: 2 }, { X: 2, Y: 2 }, { X: 3, Y: 3 },
    { X: 4, Y: 3 }, { X: 5, Y: 4 }, { X: 6, Y: 2 }],
  otherPointArr: [],
  colorGroup: {
    LineColor: 'rgba(255,99,71,0.9)',
    bgActiveColor: 'rgba(255,240,245,0.7)',
    bgDefaultColor: 'rgba(255,240,245,0)',
    centerActiveColor: 'rgba(0,191,255,0.6)',
    centerDefaultColor: 'rgba(245,245,245,1)',
  },
  canEdit: true
};
const drawOptions1 = {
  question: ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'],
  answer: ['', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6'],
  defaultPointArr: [{ X: 0, Y: 1 }, { X: 1, Y: 2 }, { X: 2, Y: 2 }, { X: 3, Y: 3 },
    { X: 4, Y: 3 }, { X: 5, Y: 5 }, { X: 6, Y: 2 }],
  typeFormat: {
    approve: '5,167,98',
    doubt: '243,215,153',
    reject: '255,97,87',
  },
  otherPointArr: [{ X: 1, Y: 1, type: 'approve' }, { X: 1, Y: 3, type: 'doubt' }, { X: 2, Y: 4, type: 'reject' }, { X: 3, Y: 4, type: 'reject' },
      { X: 4, Y: 4, type: 'doubt' }, { X: 5, Y: 4, type: 'doubt' }, { X: 6, Y: 3, type: 'approve' }],
  colorGroup: {
    LineColor: 'rgba(166,99,71,0.9)',
    bgActiveColor: 'rgba(127,255,170,0.6)',
    bgDefaultColor: 'rgba(255,240,245,0)',
    centerActiveColor: 'rgba(0,191,255,0.6)',
    centerDefaultColor: 'rgba(245,245,245,1)',
  },
  canEdit: false
};
const drawOptions2 = {
  question: ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'],
  answer: ['', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6'],
  defaultPointArr: [],
  typeFormat: {
    approve: '5,167,98',
    doubt: '243,215,153',
    reject: '255,97,87',
  },
  otherPointArr: [{ X: 1, Y: 1, type: 'approve', opacity: 0.6 }, { X: 1, Y: 2, type: 'approve', opacity: 0.5 }, { X: 1, Y: 3, type: 'doubt' }, { X: 2, Y: 4, type: 'reject' }, { X: 3, Y: 4, type: 'reject' },
      { X: 4, Y: 4, type: 'doubt' }, { X: 5, Y: 4, type: 'doubt' }, { X: 6, Y: 3, type: 'approve' }],
  colorGroup: {
    LineColor: 'rgba(166,99,71,0.9)',
    bgActiveColor: 'rgba(127,255,170,0.6)',
    bgDefaultColor: 'rgba(255,240,245,0)',
    centerActiveColor: 'rgba(0,191,255,0.6)',
    centerDefaultColor: 'rgba(245,245,245,1)',
  },
  canEdit: false
};
const tabOptions = [{ tabName: 'first', content: (<DrawPart options={drawOptions} />), isActive: true },
 { tabName: 'second', content: (<div>23<Button text="确定" type={['primary']} style={marginStyle} /></div>), isActive: false },
 { tabName: 'thired', content: 3, isActive: false }];
const editItemList = [{
  key: 'channelBankId',
  text: '银行渠道',
  type: 'select',
  options: [{ value: '', text: '请选择' }, { value: 'jingu', text: '金谷农商行' }],
  valid: 'required',
  errorMsg: '请选择银行渠道',
}, {
  key: 'loanProductType',
  text: '贷款产品类型',
  type: 'select',
  options: [{
    value: '', text: '请选择'
  }, {
    value: '01', text: '个人小额信贷'
  }],
  valid: 'required',
  errorMsg: '请选择贷款产品类型',
}, {
  key: 'loanProductName',
  text: '贷款产品名称',
  valid: 'required',
  errorMsg: '请输入贷款产品名称',
  format: v => utils.string.trim(v),
}, {
  key: 'effectDayType',
  text: '起息条件类型',
  type: 'select',
  value: '',
  options: [{
    text: '请选择', value: ''
  }, {
    text: '放款成功', value: '1'
  }, {
    text: '签约成功', value: '2'
  }],
  valid: 'required',
  errorMsg: '请选择起息条件类型',
}, {
  key: 'effectDay',
  text: '起息日',
  value: '',
  type: 'select',
  options: [{
    text: '请选择', value: ''
  }].concat(
    utils.array.from({ length: 11 }, (a, b) => b)
    .map(i => ({ text: i, value: i }))
  ),
  valid: 'required',
  errorMsg: '请选择起息日',
}, {
  key: 'openLoanTime',
  text: '起始放贷时间',
  type: 'date',
  dateFormat: 'YYYY-MM-DD HH:mm',
  valid: val => (val && +new Date(val) >= +new Date()),
  errorMsg: '起始放贷时间不得小于当前时间',
}, {
  key: 'closeLoanTime',
  text: '结束放贷时间',
  type: 'date',
  dateFormat: 'YYYY-MM-DD HH:mm',
  valid: val => (val && +new Date(val) >= +new Date()),
  errorMsg: '结束放贷时间不得小于当前时间',
}];
const self = this;
function save(ids, callbks) {
  const { checkValid, getData } = self.editPart;
  if (checkValid()) {
    callbks(ids);
    const comdata = getData();
    console.log(comdata);
  }
}
const iconsMap = icons.map((item) => {
  const icon = (<Icon iconName={item.name} size={'150%'} />);
  return icon;
});
const labelMap = [{ text: '123', icon: 'android-happy', type: 'gray' },
{ text: '123', icon: 'android-happy', type: 'primary' },
{ text: '123', icon: 'ios-checkmark', type: 'success' },
{ text: '123', icon: 'ios-information', type: 'warning' },
{ text: '123', icon: 'ios-alarm-outline', type: 'normal' },
{ text: '123', icon: 'android-settings', type: 'error' }];
const carouselMap = [{ tabName: 'first', content: (<div>23123</div>), isActive: true },
 { tabName: 'second', content: (<div>123</div>), isActive: false },
 { tabName: 'thired', content: (<img alt="text" src="http://47.88.2.72:2016/getphotoPal/2017-3-28/14906636798813.jpg" />), isActive: false }];
const transferOptions = {
  list: [
    { name: 'item1', value: '1,2,3,4,5,6,7' },
    { name: 'item1', value: '2,1,3,4,5,6,7' },
    { name: 'item1', value: '3,2,1,4,5,6,7' },
    { name: 'item1', value: '4,3,2,1,5,6,7' },
    { name: 'item1', value: '5,4,3,2,1,6,7' },
    { name: 'item1', value: '6,5,4,3,2,1,7' },
    { name: 'item1', value: '7,6,5,4,3,2,1' }
  ]
};
const componentsOption = [
  { tabName: 'Buttons',
    content: (
      <Row>
        <Col span={24}>
          <Button
            text="确定"
            type={['primary']}
            style={marginStyle}
          />
          <Button
            text="确定"
            onClick={click}
            style={marginStyle}
          />
          <Button
            text="确定"
            style={marginStyle}
            disabled
          />
          <Button
            text="确定"
            style={marginStyle}
            type={['primary', 'small']}
            disabled
          />
          <Button
            text="确定"
            style={marginStyle}
            type={['primary', 'large']}
          />
          <Button
            text="确定"
            style={marginStyle}
            type={['primary', 'small']}
          />
        </Col>
        <Col span={24}>
          <Button
            text="确定"
            style={marginStyle}
            type={['link', 'large']}
          />
          <Button
            text="确定"
            style={marginStyle}
            type={['link', 'small']}
          />
          <Button
            text="确定"
            style={marginStyle}
            type={['link', 'small']}
            disabled
          />
        </Col>
      </Row>),
    isActive: false
  }, { tabName: 'Input',
    content: (
      <div>
        <Input
          placeholder="我是placeholder"
          style={marginStyle}
          maxLength={10}
          maxLengthShow={false}
          disabled
        />
        <Input
          ref={(input) => { dom.input = input; }}
          placeholder="我是placeholder"
          style={marginStyle}
          maxLength={10}
        />
        <Input
          value="我是value"
          style={marginStyle}
          maxLength={100}
        />
        <Input
          placeholder="请输入"
          style={marginStyle}
          typeStyle="half"
          maxLength={100}
        />
        <br />
        <Textarea
          value="我是文本"
          style={marginStyle}
          maxLengthShow={false}
          disabled
        />
        <Textarea
          placeholder="我是placeholder"
          style={marginStyle}
        />
        <Textarea
          value="我是value"
          style={marginStyle}
          maxLength={100}
        />
        <Textarea
          value="我是value"
          style={marginStyle}
          maxLength={100}
          typeStyle="half"
        />
        <RichEditor />
        <Dynamic
          WrappedComponent={Button}
          text="提交"
        />
      </div>
    ),
    isActive: false
  }, { tabName: 'Select',
    content: (
      <div>
        <Select
          style={marginStyle}
          options={[{ value: 1, text: 'haha' }, { value: 2, text: 'haha2' }]}
          disabled
        />
        <Select
          style={marginStyle}
          options={[{ value: 1, text: 'haha' }, { value: 2, text: 'haha2' }]}
        />
        <Selects
          style={marginStyle}
          options={[{ value: 1, text: 'haha' }, { value: 2, text: 'haha2123123123123123123123123123123' },
          { value: 3, text: 'haha' }, { value: 4, text: 'haha2' },
          { value: 6, text: 'haha' }, { value: 5, text: 'haha2' },
          { value: 7, text: 'haha' }, { value: 8, text: 'haha2' },
          { value: 9, text: 'haha' }, { value: 10, text: 'haha2' }]}
        />
        <Selects
          style={marginStyle}
          options={[{ value: 1, text: 'haha' }, { value: 2, text: 'haha2123123123123123123123123123123' },
          { value: 3, text: 'haha' }, { value: 4, text: 'haha2' },
          { value: 6, text: 'haha' }, { value: 5, text: 'haha2' },
          { value: 7, text: 'haha' }, { value: 8, text: 'haha2' },
          { value: 9, text: 'haha' }, { value: 10, text: 'haha2' }]}
          filter
        />
        <Selects
          style={{ width: '200px', margin: '10px' }}
          options={[{ value: 1, text: 'haha' }, { value: 2, text: 'haha2' },
          { value: 3, text: 'haha3' }, { value: 4, text: 'haha4' }]}
        />
        <Selects
          style={{ width: '300px', margin: '10px' }}
          options={[{ value: 1, text: 'haha' }, { value: 2, text: 'haha2' },
          { value: 3, text: 'haha3' }, { value: 4, text: 'haha4' }]}
          disabled
        />
      </div>
    ),
    isActive: false
  }, { tabName: 'Radio & Checkbox',
    content: (
      <div>
        <Radio
          options={[{ value: 1, text: 'haha' }, { value: 2, text: 'haha2', checked: true }]}
          onChange={click}
        />
        <br />
        <Checkbox
          ref={(checkbox) => { dom.checkbox = checkbox; }}
          options={checkboxOptions}
          onChange={click}
        />
      </div>
    ),
    isActive: false
  }, { tabName: 'Toaser & Confirm',
    content: (
      <Row justify={'flex-start'} align={'center'}>
        <Col span={24}>Toaser</Col>
        <Col span={24}>
          <Button
            text="success"
            type={['primary']}
            style={marginStyle}
            onClick={() => { Toaster.toaster({ type: 'success', content: 'this is a success', time: 2000 }); }}
          />
          <Button
            text="error"
            type={['primary']}
            style={marginStyle}
            onClick={() => { Toaster.toaster({ type: 'error', content: 'this is a error' }); }}
          />
          <Button
            text="normal"
            type={['primary']}
            style={marginStyle}
            onClick={() => { Toaster.toaster({ type: 'normal', content: 'this is a normal' }); }}
          />
          <Button
            text="warning"
            type={['primary']}
            style={marginStyle}
            onClick={() => { Toaster.toaster({ type: 'warning', content: 'this is a warning' }); }}
          />
        </Col>
        <Col span={24}>Confirm</Col>
        <Col span={24}>
          <Button
            text="confirm"
            type={['primary']}
            style={marginStyle}
            onClick={() => { Modal.confirm({ title: 'warning', content: 'this is a warning', type: 'small' }, () => { alert('this is sure callback'); }, () => { alert('this is cancle callback'); }); }}
          />
          <Button
            text="alert"
            type={['primary']}
            style={marginStyle}
            onClick={() => { Modal.alert({ title: 'warning', content: 'this is a warning', type: 'middle' }, () => { console.log('alert'); }); }}
          />
          <Button
            text="mult open"
            type={['primary']}
            style={marginStyle}
            onClick={() => {
              Modal.alert({ title: 'warning',
                content: (<div><a onClick={() => { Modal.confirm({ title: 'warning', content: 'this is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warning' }, () => { console.log('this is callback'); }, () => { console.log('this is cancle callback'); }); }} >click to do a new Alert</a></div>),
                type: 'large',
                style: 'primary',
              },
                () => { console.log('nult callback'); });
            }}
          />
          <Button
            text="form open"
            type={['primary']}
            style={marginStyle}
            onClick={() => {
              Modal.formConfirm({ title: 'Form Open',
                content: (
                  <EditPart
                    editItemList={editItemList}
                    ref={(ref) => {
                      self.editPart = ref;
                    }}
                  />
                ),
                style: 'primary',
                btnConStyle: 'center',
                btnSure: {
                  text: '复审通过',
                  type: ['primary']
                },
                btnCancle: {
                  text: '复审不通过',
                }
              },
              (id, callback) => { save(id, callback); },
              (id, callback) => { callback(id); console.log('this is cancle callback'); });
            }}
          />
        </Col>
        <Col span={24}>
          <Button
            text="small"
            type={['primary']}
            style={marginStyle}
            onClick={() => { Modal.confirm({ title: 'warning', content: 'this is a warning', type: 'small', style: 'primary' }, () => { alert('this is sure callback'); }, () => { alert('this is cancle callback'); }); }}
          />
          <Button
            text="middle"
            type={['primary']}
            style={marginStyle}
            onClick={() => { Modal.alert({ title: 'warning', content: 'this is a warning', type: 'middle', style: 'primary' }, () => { console.log('alert'); }); }}
          />
          <Button
            text="large"
            type={['primary']}
            style={marginStyle}
            onClick={() => {
              Modal.alert({ title: 'warning',
                content: (<div><a onClick={() => { Modal.confirm({ title: 'warning', content: 'this is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warning' }, () => { console.log('this is callback'); }, () => { console.log('this is cancle callback'); }); }} >click to do a new Alert</a></div>),
                type: 'large',
                style: 'primary'
              },
                () => { console.log('nult callback'); });
            }}
          />
        </Col>
        <Col span={24}>Loading</Col>
        <Col span={24}>
          <Button
            text="Loader show"
            type={['primary']}
            style={marginStyle}
            onClick={() => {
              Loader.show();
            }}
          />
          <Button
            text="Loader Hide"
            type={['primary']}
            style={marginStyle}
            onClick={() => {
              Loader.hide();
            }}
          />
        </Col>
      </Row>
    ),
    isActive: false
  }, { tabName: 'SearchPart',
    content: (
      <Row>
        <Col span={24}>
          <SearchPart
            title="查询列表"
            url="http://www.baidu.com/"
            conditions={searches}
          />
          <TablePart
            title="查询结果"
            items={listData}
            minWidth={1200}
            itemFormat={listFormat}
            operations={operations}
          />
        </Col>
        <Col>
          <SearchPart
            title="查询列表"
            url="http://www.baidu.com/"
            conditions={searches}
          />
          <TablePart
            title="查询结果"
            items={listData}
            minWidth={1200}
            itemFormat={listFormat}
            operations={operations}
            operationsFix
            showIndex
          />
        </Col>
      </Row>
    ),
    isActive: false
  }, { tabName: 'DatePicker',
    content: (
      <div>
        <Container
          title="其他"
          style={{
            margin: '0px 0px',
          }}
        >
          <br />
          <DatePicker
            onChange={onchange}
            format="YYYY-MM-DD"
            placeholder="请选择日期"
          />
          <DatePicker
            onChange={onchange}
            format="HH:mm:ss"
            viewMode="time"
            placeholder="请选择时间"
          />
          <DatePicker onChange={onchange} format="YYYY" viewMode="years" placeholder="请选择年份" />
          <DatePicker onChange={onchange} format="MM" viewMode="months" placeholder="请选择月份" />
        </Container>
      </div>
    ),
    isActive: false
  }, { tabName: 'DrawPart',
    content: (
      <Row justify={'flex-start'} align={'flex-start'}>
        <Col span={12}><DrawPart options={drawOptions} /></Col>
        <Col span={12}><DrawPart options={drawOptions1} /></Col>
        <Col span={12}><DrawPart options={drawOptions2} /></Col>
      </Row>
    ),
    isActive: false
  }, { tabName: 'Tab',
    content: (
      <div>
        <Tab options={tabOptions} />
        <Tab options={tabOptions} modal={'MENULEFT'} />
      </div>
    ),
    isActive: false
  }, { tabName: 'Grid',
    content: (
      <Grid />
    ),
    isActive: false
  }, { tabName: 'Progress',
    content: (
      <Row justify={'flex-start'} align={'flex-start'}>
        <Col span={24}>
          <Progress percent={30} barColor={'#F96C43'} radius={10} />
          <Progress percent={57} barColor={'#76BFDC'} radius={10} />
          <Progress percent={99} barColor={'#FF6157'} radius={10} />
        </Col>
        <Col span={12}>
          <Progress percent={40} barColor={'#79D46D'} radius={10} />
          <Progress percent={80} />
        </Col>
      </Row>
    ),
    isActive: false
  }, { tabName: 'FileUp',
    content: (
      <FileUp />
    ),
    isActive: false
  }, { tabName: 'Icons',
    content: (
      <Row justify={'flex-start'} align={'flex-start'}>
        <Col span={24}>
          {iconsMap}
        </Col>
        <Col span={12}>
          <Icon iconName={'ion-edit'} size={'120%'} />
        </Col>
      </Row>
    ),
    isActive: false
  }, { tabName: 'Label',
    content: (
      <Row justiy={'flex-start'} align={'flex-start'}>
        <Col span={24}>
          <LabelGroup options={labelMap} />
        </Col>
      </Row>
    ),
    isActive: false
  }, { tabName: 'Tree',
    content: (
      <Tree />
    ),
    isActive: false
  }, { tabName: 'Carousel',
    content: (
      <Row gutter={16}>
        <Col span={24} >
          <Carousel options={carouselMap} showDotsText={false} dragAble />
        </Col>
        <Col span={24}>
          <Carousel options={carouselMap} showDotsText autoPlay />
        </Col>
      </Row>
    ),
    isActive: false
  }, { tabName: 'Collapse',
    content: (
      <Row gutter={16}>
        <Col span={24} >
          <Collapse >
            <Panel title={'title1'}>
              <Collapse >
                <Panel title={'title1'}>
                  <p>123</p>
                </Panel>
              </Collapse>
            </Panel>
            <Panel title={'title2'}>
              <p>123</p>
            </Panel>
            <Panel title={'title3'}>
              <p>123</p>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    ),
    isActive: false
  },
  { tabName: 'TransferPart',
    content: (
      <Row justify={'flex-start'} align={'flex-start'}>
        <Col span={36}><TransferPart {...transferOptions} /></Col>
      </Row>
    ),
    isActive: false
  }, { tabName: 'Switch',
    content: (
      <Row justify={'flex-start'} align={'flex-start'}>
        <Col span={3}>
          <Switch />
        </Col>
        <Col span={3}>
          <Switch checkedText={0} unCheckText={1} checked />
        </Col>
        <Col span={3}>
          <Switch checkedText={'-'} unCheckText={'o'} onchange={switchChange} />
        </Col>
        <Col span={3}>
          <Switch checkedText={0} unCheckText={1} bgColor={'#4BD963'} checked />
        </Col>
        <Col span={3}>
          <Switch checkedText={0} unCheckText={1} bgColor={'#FF6157'} checked />
        </Col>
        <Col span={3}>
          <Switch checkedText={0} unCheckText={1} bgColor={'#FFD479'} checked />
        </Col>
      </Row>
    ),
    isActive: true
  }
];

        return (
        <Row justify={'flex-start'} align={'flex-start'}>
          <Col span={24} style={styles.title}>Boss组件集合</Col>
          <Col span={24}><Tab options={componentsOption} modal={'MENULEFT'} /></Col>
        </Row>
        )
    }
}
export default Sample;

