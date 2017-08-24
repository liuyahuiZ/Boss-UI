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
class InputDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
        return(
            <Row>
            <Col span={24}>
            <Input
            placeholder="我是placeholder"
            style={marginStyle}
            maxLength={10}
            maxLengthShow={false}
            disabled
            />
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
            <br />
            <Textarea
            value="我是文本"
            style={marginStyle}
            maxLengthShow={false}
            disabled
            />
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
            <RichEditor />
            <Dynamic
            WrappedComponent={Button}
            text="提交"
            />
            </Col>
          </Row>
        );
    }
}
export default InputDoc;