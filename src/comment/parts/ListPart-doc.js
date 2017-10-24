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
  
const { SearchPart, TablePart, DrawPart, EditPart, TransferPart, ListPart } = Parts;
class ListPartDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
          newlistOperation:[],
          newlistData: []
      };
    }
    componentWillMount() {
      this.initData();
    }
    initData() {
      const listOperations = {
        listFormat: [{
          key: 'area',
          title: '总评分',
          titleStyle: { width: '200px', maxWidth: '200px' },
          items: [{
            key: 'small',
            type: 'Input',
            info: '左侧下限',
            titleStyle: { width: '100px', maxWidth: '100px' },
            style: { width: '80px' },
            maxLengthShow: false,
            change: (item, val, rowIdx) => {
              // console.log(item, val, rowIdx);
              this.$$newListPart.changeArr(rowIdx, item.key, val, item.parentKey);
            },
          }, {
            key: 'large',
            type: 'Input',
            info: '右侧下限',
            titleStyle: { width: '100px', maxWidth: '100px' },
            style: { width: '80px' },
            maxLengthShow: false,
            change: (item, val, rowIdx) => {
              // console.log(item, val, rowIdx);
              this.$$newListPart.changeArr(rowIdx, item.key, val, item.parentKey);
            },
          }]
        }, {
          key: 'processName',
          title: '额度',
          info: '(maQuota)',
          titleStyle: { width: '100px', maxWidth: '100px' },
          type: 'Input',
          style: { width: '100px', maxWidth: '100px' },
          maxLengthShow: false,
          change: (item, val, rowIdx) => {
            // console.log(item, val, rowIdx);
            this.$$newListPart.changeArr(rowIdx, item.key, val, item.parentKey);
          },
        }],
        operations: [{
          text: '删除',
          func: (idx, item, surchFun) => {
            console.log(idx, item, 'commit', surchFun);
            this.$$newListPart.rmMsg(item.id);
          },
          action: 'delete',
        }],
      };
      this.setState({
        newlistOperation: listOperations
      });
    }
    addListData() {
      const newOperation = this.state.newlistOperation;
      const keys = `${newOperation.listFormat.length}-op`;
      const name = `总额-${newOperation.listFormat.length}`;
      const items = {
        key: keys,
        title: name,
        canDelete: true,
        titleStyle: { width: '200px', maxWidth: '200px' },
        items: [{
          key: `${newOperation.listFormat.length}-small`,
          type: 'Input',
          info: '左侧下限',
          titleStyle: { width: '100px', maxWidth: '100px' },
          style: { width: '80px' },
          maxLengthShow: false,
          change: (item, val, rowIdx) => {
            // console.log(item, val, rowIdx);
            this.$$newListPart.changeArr(rowIdx, item.key, val, item.parentKey);
          },
        }, {
          key: `${newOperation.listFormat.length}-large`,
          type: 'Input',
          info: '右侧下限',
          titleStyle: { width: '100px', maxWidth: '100px' },
          style: { width: '80px' },
          maxLengthShow: false,
          change: (item, val, rowIdx) => {
            // console.log(item, val, rowIdx);
            this.$$newListPart.changeArr(rowIdx, item.key, val, item.parentKey);
          },
        }]
      };
      newOperation.listFormat.push(items);
      this.setState({
        newlistOperation: newOperation
      });
    }
    render() {
      const listOperation = {
        listFormat: [{
          key: 'requestId',
          title: '人工审核单号',
          info: '审核单号',
          titleStyle: { width: '100px', maxWidth: '100px' },
          type: 'Text',
          style: { width: '100px', maxWidth: '100px' },
        }, {
          key: 'userName',
          canDelete: true,
          title: '姓名',
          info: '用户名称',
          titleStyle: { width: '120px', maxWidth: '120px' },
          type: 'Input',
          style: { width: '105px' },
          maxLengthShow: false,
          change: (item, val, rowIdx) => {
            // console.log(item, val, rowIdx);
            this.$$ListPart.changeArr(rowIdx, item.key, val);
          },
        }, {
          key: 'checked',
          title: '是否开启',
          info: '是否开启',
          canDelete: true,
          titleStyle: { width: '120px', maxWidth: '120px' },
          type: 'Switch',
          style: { width: '120px' },
          change: (item, val, rowIdx) => {
            // console.log(item, val, rowIdx);
            this.$$ListPart.changeArr(rowIdx, item.key, val);
          },
        }, {
          key: 'area',
          title: '区间',
          canDelete: true,
          titleStyle: { width: '200px', maxWidth: '200px' },
          items: [{
            key: 'small',
            type: 'Input',
            info: '左侧下限',
            titleStyle: { width: '100px', maxWidth: '100px' },
            style: { width: '80px' },
            maxLengthShow: false,
            change: (item, val, rowIdx) => {
              // console.log(item, val, rowIdx);
              this.$$ListPart.changeArr(rowIdx, item.key, val, item.parentKey);
            },
          }, {
            key: 'large',
            type: 'Input',
            info: '右侧下限',
            titleStyle: { width: '100px', maxWidth: '100px' },
            style: { width: '80px' },
            maxLengthShow: false,
            change: (item, val, rowIdx) => {
              // console.log(item, val, rowIdx);
              this.$$ListPart.changeArr(rowIdx, item.key, val, item.parentKey);
            },
          }]
        }, {
          key: 'weights',
          title: '权重',
          info: 'maq',
          type: 'selects',
          titleStyle: { width: '120px', maxWidth: '120px' },
          style: { width: '105px' },
          options: [{
            value: '', text: '全部'
          }, {
            value: '1', text: '1'
          }, {
            value: '2', text: '2'
          }],
          format: {
            '': '全部',
            1: '1',
            2: '2'
          },
          change: (item, val, rowIdx) => {
            // console.log(item, val, rowIdx);
            this.$$ListPart.changeArr(rowIdx, item.key, val.value);
          }
        }],
        operations: [{
          text: '删除',
          func: (idx, item, surchFun) => {
            console.log(idx, item, 'commit', surchFun);
            this.$$ListPart.rmMsg(item.id);
          },
          action: 'delete',
        }],
        sortOperations: [{
          action: 'up',
          func: (idx) => {
            // console.log(idx, item, 'commit', surchFun);
            this.$$ListPart.sortArr(idx, 'up');
          }
        }, {
          action: 'down',
          func: (idx) => {
            // console.log(idx, item, 'commit', surchFun);
            this.$$ListPart.sortArr(idx, 'down');
          }
        }]
      };
      const listDatas = [{ id: 1, requestId: 'tex1', userName: 'text1', checked: true, weights: 1, area: { small: 1, large: 2000 } }];
      
        return(
          <section className="doc">
            <Row>
            <Col span={24}>
              <h2>List 列表操作</h2>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
            <Buttons
              text="添加"
              type={'primary'}
              onClick={() => { this.$$ListPart.add(); }}
            />
            <ListPart
              listOperation={listOperation}
              listData={listDatas}
              ref={(r) => { this.$$ListPart = r; }}
            />
            <Buttons
              text="获取"
              type={'primary'}
              onClick={() => { const value = this.$$ListPart.getValue(); console.log(value); }}
            />
            </Col>
            <Code codes={`import { Parts } from 'boss-react-ui';
const { ListPart } = Parts;
const listOperation = {
listFormat: [{
  key: 'requestId',
  title: '人工审核单号',
  info: '审核单号',
  titleStyle: { width: '100px', maxWidth: '100px' },
  type: 'Text',
  style: { width: '100px', maxWidth: '100px' },
}, {
  key: 'userName',
  canDelete: true,
  title: '姓名',
  info: '用户名称',
  titleStyle: { width: '120px', maxWidth: '120px' },
  type: 'Input',
  style: { width: '105px' },
  maxLengthShow: false,
  change: (item, val, rowIdx) => {
    // console.log(item, val, rowIdx);
    this.$$ListPart.changeArr(rowIdx, item.key, val);
  },
}, {
  key: 'checked',
  title: '是否开启',
  info: '是否开启',
  canDelete: true,
  titleStyle: { width: '120px', maxWidth: '120px' },
  type: 'Switch',
  style: { width: '120px' },
  change: (item, val, rowIdx) => {
    // console.log(item, val, rowIdx);
    this.$$ListPart.changeArr(rowIdx, item.key, val);
  },
}, {
  key: 'area',
  title: '区间',
  canDelete: true,
  titleStyle: { width: '200px', maxWidth: '200px' },
  items: [{
    key: 'small',
    type: 'Input',
    info: '左侧下限',
    titleStyle: { width: '100px', maxWidth: '100px' },
    style: { width: '80px' },
    maxLengthShow: false,
    change: (item, val, rowIdx) => {
      // console.log(item, val, rowIdx);
      this.$$ListPart.changeArr(rowIdx, item.key, val, item.parentKey);
    },
  }, {
    key: 'large',
    type: 'Input',
    info: '右侧下限',
    titleStyle: { width: '100px', maxWidth: '100px' },
    style: { width: '80px' },
    maxLengthShow: false,
    change: (item, val, rowIdx) => {
      // console.log(item, val, rowIdx);
      this.$$ListPart.changeArr(rowIdx, item.key, val, item.parentKey);
    },
  }]
}, {
  key: 'weights',
  title: '权重',
  info: 'maq',
  type: 'selects',
  titleStyle: { width: '120px', maxWidth: '120px' },
  style: { width: '105px' },
  options: [{
    value: '', text: '全部'
  }, {
    value: '1', text: '1'
  }, {
    value: '2', text: '2'
  }],
  format: {
    '': '全部',
    1: '1',
    2: '2'
  },
  change: (item, val, rowIdx) => {
    // console.log(item, val, rowIdx);
    this.$$ListPart.changeArr(rowIdx, item.key, val.value);
  }
}],
operations: [{
  text: '删除',
  func: (idx, item, surchFun) => {
    console.log(idx, item, 'commit', surchFun);
    this.$$ListPart.rmMsg(item.id);
  },
  action: 'delete',
}],
sortOperations: [{
  action: 'up',
  func: (idx) => {
    // console.log(idx, item, 'commit', surchFun);
    this.$$ListPart.sortArr(idx, 'up');
  }
}, {
  action: 'down',
  func: (idx) => {
    // console.log(idx, item, 'commit', surchFun);
    this.$$ListPart.sortArr(idx, 'down');
  }
}]
};
const listDatas = [{ id: 1, requestId: 'tex1', userName: 'text1', checked: true, weights: 1, area: { small: 1, large: 2000 } }];
<Buttons
  text="添加"
  type={'primary'}
  onClick={() => { this.$$ListPart.add(); }}
/>
<ListPart
  listOperation={listOperation}
  listData={listDatas}
  ref={(r) => { this.$$ListPart = r; }}
/>
<Buttons
  text="获取"
  type={'primary'}
  onClick={() => { const value = this.$$ListPart.getValue(); console.log(value); }}
/>`} />
          <Col span={24}>
            <div>可增加列</div>
          </Col>
          <Col style={styles.codeBox}>
            <Row>
            <Col span={24} >
            <Buttons
              text="新增行"
              type={'primary'}
              size={'small'}
              style={{ position: 'relative', top: '10px', marginLeft: '10px' }}
              onClick={() => { this.$$newListPart.add(); }}
            />
            <Buttons
              text="+新增交叉变量"
              type={'primary'}
              style={{ position: 'relative', top: '10px', marginLeft: '10px' }}
              onClick={() => { this.addListData(); }}
            />
          </Col>
          <Col span={24} style={{marginTop: '20px'}}>
            <ListPart
                  listOperation={this.state.newlistOperation}
                  listData={this.state.newlistData}
                  ref={(r) => { this.$$newListPart = r; }}
                  showInfo
                />
          </Col>
            </Row>
          </Col>
            
          </Row>
        </section>
        );
    }
}
export default ListPartDoc;
