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
          <Row justiy={'flex-start'} align={'flex-start'}>
          <Col span={24}>
            <LabelGroup options={labelMap} />
          </Col>
        </Row>
        );
    }
}
export default LabelDoc;