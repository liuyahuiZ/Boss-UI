import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'boss';
import styles from '../common/style';
import icons from '../common/icon';
import '../../Style/comment.css'

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
class Bottons extends Component {
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
              <Button
                text="确定"
                type={['primary']}
                style={marginStyle}
              />
              <Button
                text="确定"
                onClick={click}
                style={marginStyle}
              />
              <Button
                text="确定"
                style={marginStyle}
                disabled
              />
              <Button
                text="确定"
                style={marginStyle}
                type={['primary', 'small']}
                disabled
              />
              <Button
                text="确定"
                style={marginStyle}
                type={['primary', 'large']}
              />
              <Button
                text="确定"
                style={marginStyle}
                type={['primary', 'small']}
              />
            </Col>
            <Col span={24}>
              <Button
                text="确定"
                style={marginStyle}
                type={['link', 'large']}
              />
              <Button
                text="确定"
                style={marginStyle}
                type={['link', 'small']}
              />
              <Button
                text="确定"
                style={marginStyle}
                type={['link', 'small']}
                disabled
              />
            </Col>
          </Row>
        );
    }
}
export default Bottons;