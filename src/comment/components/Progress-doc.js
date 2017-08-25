import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'boss';
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
class ProgressDoc extends Component {
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
              <h2>Progress 进度条</h2>
              <div>用于展示操作进度，告知用户当前状态和预期</div>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Progress percent={30} barColor={'#F96C43'} radius={10} />
              <Progress percent={57} barColor={'#76BFDC'} radius={10} />
              <Progress percent={99} barColor={'#FF6157'} radius={10} />
            </Col>
            <Col span={24}>
              <h3>长度根据外层容器长度变化</h3>
            </Col>
            <Col span={12} style={styles.codeBox}>
              <Progress percent={40} barColor={'#79D46D'} radius={10} />
              <Progress percent={80} />
            </Col>
          </Row>
          </section>
        );
    }
}
export default ProgressDoc;