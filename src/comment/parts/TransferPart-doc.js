import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'boss-react-ui';
import styles from '../common/style';
import icons from '../common/icon';
import '../../Style/comment.css';
import Code from '../common/Code';

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
  
const { SearchPart, TablePart, DrawPart, EditPart, TransferPart } = Parts;
class TransferPartDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
      const transferOptions = {
        list: [{
          param: 'aa',
          name: '参树1',
          desc: '说明1',
          status: '未使用',
        }, {
          param: 'bb',
          name: '参树2',
          desc: '说明2',
          status: '已使用',
        }, {
          param: 'cc',
          name: '参树3',
          desc: '说明3',
          status: '未使用',
        }, {
          param: 'dd',
          name: '参树4',
          desc: '说明4',
          status: '已使用',
        }],
        leftKeys: [{
          name: '参数',
          key: 'param',
        }, {
          name: '参数名称',
          key: 'name',
        }, {
          name: '参数名称',
          key: 'desc',
        }],
        rightKeys: [{
          name: '参数',
          key: 'param',
        }, {
          name: '参数名称',
          key: 'name',
        }, {
          name: '参数名称',
          key: 'desc',
        }, {
          name: '状态',
          key: 'status',
        }],
        uniqKey: 'param',
        searchKeys: ['param', 'name'],
        rightSearchKeys: ['status'],
      };
        return(
          <section className="doc">
          <Row>
            <Col span={24}>
              <h2>TransferPart 穿梭器</h2>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
            <TransferPart {...transferOptions} />
            </Col>
            <Code codes={`import { Parts } from 'boss-react-ui';
const { TransferPart } = Parts;
const transferOptions = {
  list: [{
    param: 'aa',
    name: '参树1',
    desc: '说明1',
    status: '未使用',
  }, {
    param: 'bb',
    name: '参树2',
    desc: '说明2',
    status: '已使用',
  }, {
    param: 'cc',
    name: '参树3',
    desc: '说明3',
    status: '未使用',
  }, {
    param: 'dd',
    name: '参树4',
    desc: '说明4',
    status: '已使用',
  }],
  leftKeys: [{
    name: '参数',
    key: 'param',
  }, {
    name: '参数名称',
    key: 'name',
  }, {
    name: '参数名称',
    key: 'desc',
  }],
  rightKeys: [{
    name: '参数',
    key: 'param',
  }, {
    name: '参数名称',
    key: 'name',
  }, {
    name: '参数名称',
    key: 'desc',
  }, {
    name: '状态',
    key: 'status',
  }],
  uniqKey: 'param',
  searchKeys: ['param', 'name'],
  rightSearchKeys: ['status'],
};
<TransferPart {...transferOptions} />`} />
          </Row>
          </section>
        );
    }
}
export default TransferPartDoc;