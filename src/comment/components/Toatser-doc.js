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
class ToasterDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
        return(
            <Row style={{minHeight: '500px'}}>
            <Col span={24}>Toaster</Col>
            <Col span={24}>
              <Button
                text="success"
                type={['primary']}
                style={marginStyle}
                onClick={() => { Toaster.toaster({ type: 'success', content: 'this is a success', time: 2000 }); }}
              />
              <Button
                text="error"
                type={['primary']}
                style={marginStyle}
                onClick={() => { Toaster.toaster({ type: 'error', content: 'this is a error' }); }}
              />
              <Button
                text="normal"
                type={['primary']}
                style={marginStyle}
                onClick={() => { Toaster.toaster({ type: 'normal', content: 'this is a normal' }); }}
              />
              <Button
                text="warning"
                type={['primary']}
                style={marginStyle}
                onClick={() => { Toaster.toaster({ type: 'warning', content: 'this is a warning' }); }}
              />
            </Col>
          </Row>
        );
    }
}
export default ToasterDoc;