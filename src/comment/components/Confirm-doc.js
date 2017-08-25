import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'boss-react-ui';
import styles from '../common/style';
import icons from '../common/icon';
import '../../Style/comment.css'

const dom = {};
const marginStyle = {
  margin: '10px'
};
const click = function (event) {
  console.log('onclick');
  console.log(event);
  console.log(dom);
  // marginStyle.margin = '40px';
};
const {
    Button,
    Buttons,
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
    MyTree,
    Tree,
    Carousel,
    Collapse,
    Panel,
    Switch
  } = Components;
  
const { SearchPart, TablePart, DrawPart, EditPart, TransferPart } = Parts;
class ConfirmDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
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
        return(
          <section className="doc">
          <Row>
            <Col span={24}>
              <h2>Confirm 消息对话框</h2>
              <div>悬浮出现在页面上方，显示全局的通知提醒消息。</div>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Buttons
                text="confirm"
                type={'primary'}
                style={marginStyle}
                onClick={() => { Modal.confirm({ title: 'warning', content: 'this is a warning', type: 'small' }, () => { alert('this is sure callback'); }, () => { alert('this is cancle callback'); }); }}
              />
              <Buttons
                text="alert"
                type={'primary'}
                style={marginStyle}
                onClick={() => { Modal.alert({ title: 'warning', content: 'this is a warning', type: 'middle' }, () => { console.log('alert'); }); }}
              />
            </Col>
            <Col span={24}>
              <h3>多层弹出</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Buttons
                text="mult open"
                type={'primary'}
                style={marginStyle}
                plain
                onClick={() => {
                  Modal.alert({ title: 'warning',
                    content: (<div> others
                      <Buttons
                        text="click to do a new Alert "
                        type={'link'}
                        style={marginStyle} onClick={() => { Modal.confirm({ title: 'warning', content: 'this is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warning' }, () => { console.log('this is callback'); }, () => { console.log('this is cancle callback'); }); }}
                      />
                    </div>),
                    type: 'large',
                    style: 'primary',
                  },
                    () => { console.log('nult callback'); });
                }}
              />
            </Col>
            <Col span={24}>
              <h3>自定义内容</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Buttons
                text="form open"
                type={'primary'}
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
              <h3>不同大小</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Buttons
                text="small"
                type={'primary'}
                style={marginStyle}
                onClick={() => { Modal.confirm({ title: 'warning', content: 'this is a warning', type: 'small', style: 'primary' }, () => { alert('this is sure callback'); }, () => { alert('this is cancle callback'); }); }}
              />
              <Buttons
                text="middle"
                type={'primary'}
                style={marginStyle}
                onClick={() => { Modal.alert({ title: 'warning', content: 'this is a warning', type: 'middle', style: 'primary' }, () => { console.log('alert'); }); }}
              />
              <Buttons
                text="large"
                type={'primary'}
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
            <Col span={24}>
              <h3>Loading</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Buttons
                text="Loader show"
                type={'primary'}
                style={marginStyle}
                onClick={() => {
                  Loader.show();
                }}
              />
              <Buttons
                text="Loader Hide"
                type={'primary'}
                style={marginStyle}
                onClick={() => {
                  Loader.hide();
                }}
              />
            </Col>
          </Row>
        </section>
        );
    }
}
export default ConfirmDoc;