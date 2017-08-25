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
            <section className="doc">
            <Row>
            <Col span={24}>
              <h2>DatePicker 日期选择器</h2>
            </Col>
            <Col span={24}>
              <h3>用于选择或输入日期</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
                <Row gutter={16}>
                    <Col span={12}>
                        <DatePicker
                            onChange={onchange}
                            format="YYYY-MM-DD"
                            placeholder="请选择日期"
                        />
                    </Col>
                    <Col span={12}>
                    <DatePicker
                        onChange={onchange}
                        format="HH:mm:ss"
                        viewMode="time"
                        placeholder="请选择时间"
                    />
                    </Col>
                    <Col span={12}>
                    <DatePicker onChange={onchange} format="YYYY" viewMode="years" placeholder="请选择年份" />
                    </Col>
                    <Col span={12}>
                    <DatePicker onChange={onchange} format="MM" viewMode="months" placeholder="请选择月份" />
                    </Col>
                </Row>
            </Col>
          </Row>
          </section>
        );
    }
}
export default DatepickerDoc;