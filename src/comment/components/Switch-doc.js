import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'boss-react-ui';
import styles from '../common/style';
import icons from '../common/icon';
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
class SwitchDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
        const switchChange = (date) => {
          console.log(date);
        };
        return(
          <section className="doc">
              <Row>
              <Col span={24}>
                <h2>Switch 开关</h2>
                <div>表示两种相互对立的状态间的切换，多用于触发「开/关」</div>
              </Col>
              <Col span={24}>
                <h3>基础用法</h3>
              </Col>
              <Col span={24} style={styles.codeBox}>
                <Row>
                <Col span={3}>
                  <Switch />
                </Col>
                <Col span={3}>
                  <Switch checkedText={0} unCheckText={1} checked />
                </Col>
                <Col span={3}>
                  <Switch checkedText={'-'} unCheckText={'o'} onchange={switchChange} />
                </Col>
                <Col span={3}>
                  <Switch checkedText={0} unCheckText={1} bgColor={'#4BD963'} checked />
                </Col>
                <Col span={3}>
                  <Switch checkedText={0} unCheckText={1} bgColor={'#FF6157'} checked />
                </Col>
                <Col span={3}>
                  <Switch checkedText={0} unCheckText={1} bgColor={'#FFD479'} checked />
                </Col>
                </Row>
              </Col>
          </Row>
        </section>
        );
    }
}
export default SwitchDoc;