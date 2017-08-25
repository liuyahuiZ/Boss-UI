import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'boss';
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
                onClick={() => { Modal.confirm({ title: 'warning', content: 'this is a warning', type: 'small' }, () => { alert('this is sure callback'); }, () => { alert('this is cancle callback'); }); }}
              />)
    }

}`}
                </Highlight>
            </Col>
          </Row>
        </section>
        );
    }
}
export default Info;