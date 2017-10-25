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
    Switch,
    VerifyCode
  } = Components;
  
const { SearchPart, TablePart, DrawPart, EditPart, TransferPart } = Parts;
class LabelDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
      const labelMap = [{ text: '123', icon: 'android-happy', type: 'gray' },
      { text: '123', icon: 'android-happy', type: 'primary' },
      { text: '123', icon: 'ios-checkmark', type: 'success' },
      { text: '123', icon: 'ios-information', type: 'warning' },
      { text: '123', icon: 'ios-alarm-outline', type: 'normal' },
      { text: '123', icon: 'android-settings', type: 'error' }];
        return(
          <section className="doc">
          <Row>
            <Col span={24}>
              <h2>VerifyCode 图形验证码</h2>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
              <div>点击切换</div>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Row>
                <Col>
                    <VerifyCode />
                </Col>
                <Col>
                    <VerifyCode style={{width: '180px', height: '90px'}} />
                </Col>
              </Row>
            </Col>
            <Code codes={`import { Components } from 'boss-react-ui';
const { VerifyCode } = Components;
  <VerifyCode />
  <VerifyCode style={{width: '180px', height: '90px'}} />
/>`} />
            <Col span={24} style={styles.codeBox}>
              <Row>
                <Col>
                    <VerifyCode style={{width: '100px', height: '60px'}} ref={(r) => {
                    this.$$VerifyCode = r;
                  }}/>
                </Col>
                <Col>
                <Buttons
                    text="获取值"
                    type={'primary'}
                    size={'small'}
                    onClick={() => { console.log(this.$$VerifyCode.getCode()); }}
                  />
                </Col>
              </Row>
            </Col>
            <Code codes={`import { Components } from 'boss-react-ui';
const { VerifyCode } = Components;
<VerifyCode style={{width: '100px', height: '60px'}} ref={(r) => {
  this.$$VerifyCode = r;
<Buttons
  text="获取值"
  type={'primary'}
  size={'small'}
  onClick={() => { console.log(this.$$VerifyCode.getCode()); }}
/>
}}/>
/>`} />
          </Row>
          </section>
        );
    }
}
export default LabelDoc;