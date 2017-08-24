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
class DatepickerDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
        return(
            <Row style={{minHeight: '500px'}}>
            <Col span={24}>
            <DatePicker
                onChange={onchange}
                format="YYYY-MM-DD"
                placeholder="请选择日期"
            />
            <DatePicker
                onChange={onchange}
                format="HH:mm:ss"
                viewMode="time"
                placeholder="请选择时间"
            />
            <DatePicker onChange={onchange} format="YYYY" viewMode="years" placeholder="请选择年份" />
            <DatePicker onChange={onchange} format="MM" viewMode="months" placeholder="请选择月份" />
            </Col>
          </Row>
        );
    }
}
export default DatepickerDoc;