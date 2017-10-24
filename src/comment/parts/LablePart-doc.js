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
  
const { SearchPart, SearchConditionPart, LabelPart } = Parts;
class LabelPartDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
      const editItemList = [{
        key: 'dtreeNo',
        text: '决策树编号',
      }, {
        key: 'dtreeName',
        text: '决策树名称',
      }, {
        key: 'channelBankId',
        text: '银行渠道',
      }, {
        key: 'loanProductId',
        text: '产品名称',
      }, {
        key: 'dtreeStatus',
        text: '决策树状态',
      }, {
        key: 'remark',
        text: '备注',
      }];
      const detailData ={
        "dtreeNo":"Tree9109",
        "dtreeName":"决策树1",
        "channelBankId":"jingu",
        "loanProductId":"CP-19827189",
        "dtreeStatus":"1",
        "remark":"400",
      }
        return(
          <section className="doc">
          <Row>
          <Col span={24}>
            <h2>LabelPart 标注组合</h2>
          </Col>
          <Col span={24}>
            <h3>基础用法</h3>
          </Col>
          <Col span={24} style={styles.codeBox}>
            <LabelPart
              detailList={editItemList}
              data={detailData}
              itemStyle={{ containerStyle: { width: '50%', border: '0' } }}
            />
          </Col>
          <Code codes={`import { Parts } from 'boss-react-ui';
const { SearchPart, TablePart, LabelPart } = Parts;
<LabelPart
detailList={editItemList}
data={detailData}
itemStyle={{ containerStyle: { width: '50%', border: '0' } }}
/>`} />
          <Col span={24} style={styles.codeBox}>
            <LabelPart
              detailList={editItemList}
              data={detailData}
              itemStyle={{
    titleStyle: { minWidth: '180px' },
    textStyle: {},
    containerStyle: {
      width: '50%',
      border: '0',
      float: 'left',
      margin: '0',
      background: 'linear-gradient(90deg, rgb(203, 203, 203) 180px, rgb(255, 255, 255) 180px)' }
  }}
              modal
            />
          </Col>
          <Code codes={`import { Parts } from 'boss-react-ui';
const { SearchPart, TablePart, LabelPart } = Parts;
<LabelPart
detailList={editItemList}
data={detailData}
itemStyle={{
titleStyle: { minWidth: '180px' },
textStyle: {},
containerStyle: {
width: '50%',
border: '0',
float: 'left',
margin: '0',
background: 'linear-gradient(90deg, rgb(203, 203, 203) 180px, rgb(255, 255, 255) 180px)' }
}}
modal
/>`} />
        </Row>
        </section>
        );
    }
}
export default LabelPartDoc;