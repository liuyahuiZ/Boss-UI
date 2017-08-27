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
              <h2>Label 标签</h2>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <LabelGroup options={labelMap} />
            </Col>
            <Code codes={`import { Components } from 'boss-react-ui';
const { LabelGroup } = Components;
const labelMap = [{ text: '123', icon: 'android-happy', type: 'gray' },
  { text: '123', icon: 'android-happy', type: 'primary' },
  { text: '123', icon: 'ios-checkmark', type: 'success' },
  { text: '123', icon: 'ios-information', type: 'warning' },
  { text: '123', icon: 'ios-alarm-outline', type: 'normal' },
  { text: '123', icon: 'android-settings', type: 'error' }];
<LabelGroup options={labelMap} />
/>`} />
          </Row>
          </section>
        );
    }
}
export default LabelDoc;