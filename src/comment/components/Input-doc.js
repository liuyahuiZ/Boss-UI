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
  
const { SearchPart, TablePart, DrawPart, EditPart, TransferPart } = Parts;
class InputDoc extends Component {
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
              <h2>Input 输入框</h2>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Input
              ref={(input) => { dom.input = input; }}
              placeholder="我是placeholder"
              style={marginStyle}
              maxLength={10}
              />
              <Input
              value="我是value"
              style={marginStyle}
              maxLength={100}
              />
              <Input
              placeholder="请输入"
              style={marginStyle}
              typeStyle="half"
              maxLength={100}
              />
            </Col>
            <Code codes={`import { Components } from 'boss-react-ui';
const { Input } = Components;
<Input
ref={(input) => { dom.input = input; }}
placeholder="我是placeholder"
style={marginStyle}
maxLength={10}
/>
<Input
  value="我是value"
  style={marginStyle}
  maxLength={100}
/>
<Input
  placeholder="请输入"
  style={marginStyle}
  typeStyle="half"
  maxLength={100}
/>`} />
            <Col span={24}>
              <h3>带有Icon的Input</h3>
            </Col>
            <Col style={styles.codeBox}>
              <Input
              placeholder="我是placeholder"
              style={marginStyle}
              maxLength={10}
              maxLengthShow={false}
              icon={{
                  iconName: 'person',
                  color: '#000',
                  size: '100%'
                }}
              />
              <Input
                placeholder="请输入密码"
                maxLength={100}
                maxLengthShow={false}
                style={marginStyle}
                type={'password'}
                icon={{
                  iconName: 'android-lock',
                  color: '#000',
                  size: '100%'
                }}
              />
            </Col>
            <Code codes={`<Input
  placeholder="我是placeholder"
  style={marginStyle}
  maxLength={10}
  maxLengthShow={false}
  icon={{
      iconName: 'person',
      color: '#000',
      size: '100%'
    }}
/>
<Input
  placeholder="请输入密码"
  maxLength={100}
  maxLengthShow={false}
  style={marginStyle}
  type={'password'}
  icon={{
    iconName: 'android-lock',
    color: '#000',
    size: '100%'
  }}
/>`} />
            <Col span={24}>
              <h3>禁用状态</h3>
            </Col>
            <Col style={styles.codeBox}>
              <Input
              placeholder="我是placeholder"
              style={marginStyle}
              maxLength={10}
              maxLengthShow={false}
              disabled
              />
            </Col>
            <Code codes={`<Input
  placeholder="我是placeholder"
  style={marginStyle}
  maxLength={10}
  maxLengthShow={false}
  disabled
/>`} />
            <Col span={24}>
              <h2>Textarea 文本框</h2>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col style={styles.codeBox}>
              <Textarea
              placeholder="我是placeholder"
              style={marginStyle}
              />
              <Textarea
              value="我是value"
              style={marginStyle}
              maxLength={100}
              />
              <Textarea
              value="我是value"
              style={marginStyle}
              maxLength={100}
              typeStyle="half"
              />
            </Col>
            <Code codes={`import { Components } from 'boss-react-ui';
const { Textarea } = Components;
<Textarea
  placeholder="我是placeholder"
  style={marginStyle}
/>
<Textarea
  value="我是value"
  style={marginStyle}
  maxLength={100}
/>
<Textarea
  value="我是value"
  style={marginStyle}
  maxLength={100}
  typeStyle="half"
/>`} />
            <Col span={24}>
              <h3>禁用状态</h3>
            </Col>
            <Col style={styles.codeBox}>
              <Textarea
              value="我是文本"
              style={marginStyle}
              maxLengthShow={false}
              disabled
              />
            </Col>
            <Code codes={`<Textarea
  value="我是文本"
  style={marginStyle}
  maxLengthShow={false}
  disabled
/>`} />
            <Col span={24}>
              <h3>富文本框</h3>
            </Col>
            <Col style={styles.codeBox}>
              <RichEditor />
            </Col>
            <Code codes={`<RichEditor />`} />
          </Row>
        </section>
        );
    }
}
export default InputDoc;