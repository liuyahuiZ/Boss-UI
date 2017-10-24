import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'boss-react-ui';
import styles from '../common/style';
import Code from '../common/Code';
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
  
const { SearchPart, TablePart, DrawPart, EditPart, EditConditionPart } = Parts;
class EditPartDoc extends Component {
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
        style: { width: '200px' }
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
        style: { width: '200px' }
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
            <h2>EditPart 编辑框组合</h2>
          </Col>
          <Col span={24}>
            <h3>基本用法</h3>
            <div>组件每一行的有内部元素撑起</div>
          </Col>
          <Col span={24} style={styles.codeBox}>
          <EditConditionPart
            editItemList={editItemList}
            ref={(ref) => {
              self.editPart = ref;
            }}
          />
          </Col>
          <Code codes={`import { Parts } from 'boss-react-ui';
const { SearchPart, TablePart, EditPart } = Parts;
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
      <EditConditionPart
      editItemList={editItemList}
      ref={(ref) => {
        self.editPart = ref;
      }}
    />`} />
          <Col span={24}>
            <h3>旧版用法</h3>
            <div>组件中每个内部元素占用一行</div>
          </Col>
          <Col span={24} style={styles.codeBox}>
          <EditPart
            editItemList={editItemList}
            ref={(ref) => {
              self.editPart = ref;
            }}
          />
          </Col>
          <Code codes={`
<EditPart
  editItemList={editItemList}
  ref={(ref) => {
    self.editPart = ref;
  }}
/>`} />
        </Row>
        </section>
        );
    }
}
export default EditPartDoc;