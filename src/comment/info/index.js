import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'boss-react-ui';
import styles from '../common/style';
import icons from '../common/icon';
import '../../Style/comment.css';
import Highlight from 'react-highlight';

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
class Info extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
        return(
          <section className="doc">
            <Row>
            <Col span={24}>
                <h2>开发指南</h2>
            </Col>
            <Col span={24}>
                <h3>开发模式</h3>
                <div>低阶组件 ：Components 部分，属于最底层的组件，跟业务毫无关联，只实现最基础应有的功能，比如Button, input, select等。将其封装暴露出该有的方法和属性，供更高阶的组件调用。</div>
                <div>中阶组件 ：Parts 部分，属于交互层的组合组件，实现一些特定业务需求的组件，比如TablePart，EditPart，SearchPart等。将其封装暴露出该有的方法和属性，供更高阶的组件调用。</div>
                <div>高阶组件 ：Templates 部分，属于最上层的组件，页面级的应用，通常是将中阶组件和低阶组件组合使用，来实现某些业务场景的交互和页面。</div>
            </Col>
            <Col span={24}>
                <h3>安装</h3>
                <div>推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</div>
            </Col>
            <Col span={24} style={styles.codeBox}>
            <div>npm install boss-react-ui -s</div>
            </Col>
            <Col span={24}>
                <h3>快速上手</h3>
                <div></div>
            </Col>
            <Col>
                <Highlight >
                    {`import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'boss-react-ui';
const { Buttons, Input, Modal } = Components;
class Info extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
    render(){
        return (<Buttons
                text="confirm"
                type={'primary'}
                style={{'marginTop':'20px'}}
                onClick={() => { Modal.confirm({ title: 'warning', content: 'this is a warning', type: 'small' }, 
() => { alert('this is sure callback'); }, () => { alert('this is cancle callback'); }); }}
              />)
    }

}`}
                </Highlight>
            </Col>
            <Col span={24}>
                <h3>目录结构</h3>
                <div></div>
            </Col>
            <Col>
                <Highlight >
            {`.
├── Components
│   ├── Button
│   ├── Carousel
│   ├── Checkbox
│   ├── Collapse
│   ├── CommonCheckbox
│   ├── Container
│   ├── DatePicker
│   ├── Dynamic
│   ├── FileUp
│   ├── Grid
│   ├── Icon
│   ├── Input
│   ├── Label
│   ├── Loader
│   ├── Loading
│   ├── Modal
│   ├── Pagination
│   ├── Progress
│   ├── Radio
│   ├── RichEditor
│   ├── Select
│   ├── Style
│   ├── Switch
│   ├── Tab
│   ├── Table
│   ├── Textarea
│   ├── Toaster
│   ├── Transition.js
│   ├── Tree
│   ├── fonts
│   └── index.js
├── Parts
│   ├── DetailPart
│   ├── DrawPart
│   ├── EditPart
│   ├── LabelPart
│   ├── MixPart
│   ├── SearchPart
│   ├── TablePart
│   ├── TitlePart
│   ├── TransferPart
│   ├── factory.js
│   └── index.js
├── Templates
│   ├── DetailTemplate
│   ├── EditTemplate
│   ├── ListTemplate
│   ├── RichDetailTemplate
│   ├── index.js
│   └── init
├── index.js
└── utils
    ├── array.js
    ├── auth.js
    ├── base.js
    ├── date.js
    ├── dom.js
    ├── fetch.js
    ├── filter.js
    ├── index.js
    ├── string.js
    ├── url.js
    └── validFuncs.js`}
    </Highlight>
    </Col>
          </Row>
        </section>
        );
    }
}
export default Info;