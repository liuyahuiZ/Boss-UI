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
class CollapseDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
        return(
          <Row gutter={16}>
          <Col span={24} >
            <Collapse >
              <Panel title={'title1'}>
                <Collapse >
                  <Panel title={'title1'}>
                    <p>123</p>
                  </Panel>
                </Collapse>
              </Panel>
              <Panel title={'title2'}>
                <p>123</p>
              </Panel>
              <Panel title={'title3'}>
                <p>123</p>
              </Panel>
            </Collapse>
          </Col>
        </Row>
        );
    }
}
export default CollapseDoc;