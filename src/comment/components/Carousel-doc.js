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
class CarouselDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
      const carouselMap = [{ tabName: 'first', content: (<div>23123</div>), isActive: true },
      { tabName: 'second', content: (<div>123</div>), isActive: false },
      { tabName: 'thired', content: (<img alt="text" src="http://47.88.2.72:2016/getphotoPal/2017-3-28/14906636798813.jpg" />), isActive: false }];     
        return(
          <Row gutter={16}>
            <Col span={24} >
              <Carousel options={carouselMap} showDotsText={false} dragAble />
            </Col>
            <Col span={24}>
              <Carousel options={carouselMap} showDotsText autoPlay />
            </Col>
          </Row>
        );
    }
}
export default CarouselDoc;