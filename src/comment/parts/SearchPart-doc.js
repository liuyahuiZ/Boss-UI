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
      const buttons = [{
        text: '查询',
        func: 'search',
        type: 'primary',
        size: 'small',
        errorMsg: '您没有权限操作该功能'
      }, {
        type: 'primary',
        plain: true,
        size: 'small',
        text: '新增手动查询',
        func(searchData) {
          console.log(searchData);
        },
        errorMsg: '您没有权限操作该功能',
      }];
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
        return(
          <section className="doc">
          <Row>
          <Col span={24}>
            <h2>SearchPart 搜索框列表组合</h2>
          </Col>
          <Col span={24}>
            <h3>基础用法</h3>
          </Col>
          <Col span={24} style={styles.codeBox}>
            <SearchConditionPart
              title="查询列表"
              url="http://www.baidu.com/"
              conditions={searches}
              buttons={buttons}
              buttonsContainerStyle={{ width: '100%' }}
            />
          </Col>
          <Code codes={`import { Parts } from 'boss-react-ui';
const { SearchPart, TablePart, EditPart } = Parts;
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
<SearchConditionPart
title="查询列表"
url="http://www.baidu.com/"
conditions={searches}
buttons={buttons}
buttonsContainerStyle={{ width: '100%' }}
/>
</Col>`} />
        <Col span={24}>
          <h3>旧版用法</h3>
        </Col>
        <Col span={24} style={styles.codeBox}>
        <SearchPart
              title="查询列表"
              url="http://www.baidu.com/"
              conditions={searches}
            />
        </Col>
        <Code codes={`import { Parts } from 'boss-react-ui';
const { SearchPart, TablePart, EditPart } = Parts;
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
<SearchPart
  title="查询列表"
  url="http://www.baidu.com/"
  conditions={searches}
/>
</Col>`} />
        </Row>
        </section>
        );
    }
}
export default SearchPartDoc;