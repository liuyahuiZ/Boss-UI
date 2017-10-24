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
  
const { SearchPart, SearchConditionPart, TablePart } = Parts;
class SearchPartDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
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
        return(
          <section className="doc">
          <Row>
          <Col span={24}>
            <h2>TablePart 列表组合</h2>
          </Col>
          <Col span={24}>
            <h3>基础用法</h3>
          </Col>
          <Col span={24} style={styles.codeBox}>
            <TablePart
              title="查询结果"
              items={listData}
              minWidth={1200}
              itemFormat={listFormat}
              operations={operations}
            />
          </Col>
          <Code codes={`import { Parts } from 'boss-react-ui';
const { TablePart, EditPart } = Parts;
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
<TablePart
  title="查询结果"
  items={listData}
  minWidth={1200}
  itemFormat={listFormat}
  operations={operations}
/>
</Col>`} />
          <Col span={24}>
            <div>操作按钮固定在右侧</div>
          </Col>
          <Col style={styles.codeBox}>
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
          <Code codes={`<TablePart
              title="查询结果"
              items={listData}
              minWidth={1200}
              itemFormat={listFormat}
              operations={operations}
              operationsFix
              showIndex
            />`} />
        </Row>
        </section>
        );
    }
}
export default SearchPartDoc;