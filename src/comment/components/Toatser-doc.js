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
  
const { SearchPart, TablePart, DrawPart, EditPart, TransferPart } = Parts;
class ToasterDoc extends Component {
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
              <h2>Toaster 消息提示框</h2>
              <div>悬浮出现在页面上方，显示全局的通知提醒消息。</div>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Buttons
                text="success"
                type={"success"}
                style={marginStyle}
                onClick={() => { Toaster.toaster({ type: 'success', content: 'this is a success', time: 2000 }); }}
              />
              <Buttons
                text="error"
                type={"error"}
                style={marginStyle}
                onClick={() => { Toaster.toaster({ type: 'error', content: 'this is a error' }); }}
              />
              <Buttons
                text="normal"
                type={"normal"}
                style={marginStyle}
                onClick={() => { Toaster.toaster({ type: 'normal', content: 'this is a normal' }); }}
              />
              <Buttons
                text="warning"
                type={"warning"}
                style={marginStyle}
                onClick={() => { Toaster.toaster({ type: 'warning', content: 'this is a warning' }); }}
              />
            </Col>
            <Code codes={`import { Components } from 'boss-react-ui';
const { Buttons, Toaster } = Components;
<Buttons
  text="success"
  type={"success"}
  style={marginStyle}
  onClick={() => { Toaster.toaster({ type: 'success', content: 'this is a success', time: 2000 }); }}
/>
<Buttons
  text="error"
  type={"error"}
  style={marginStyle}
  onClick={() => { Toaster.toaster({ type: 'error', content: 'this is a error' }); }}
/>
<Buttons
  text="normal"
  type={"normal"}
  style={marginStyle}
  onClick={() => { Toaster.toaster({ type: 'normal', content: 'this is a normal' }); }}
/>
<Buttons
  text="warning"
  type={"warning"}
  style={marginStyle}
  onClick={() => { Toaster.toaster({ type: 'warning', content: 'this is a warning' }); }}
/>`} />
          </Row>
          </section>
        );
    }
}
export default ToasterDoc;