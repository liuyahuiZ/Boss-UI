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
class DrawPartDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
      const drawOptions = {
        question: ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'],
        answer: ['', 'a1', 'a2', 'a3', 'a4', 'a5'],
        defaultPointArr: [{ X: 0, Y: 1 }, { X: 1, Y: 2 }, { X: 2, Y: 2 }, { X: 3, Y: 3 },
          { X: 4, Y: 3 }, { X: 5, Y: 4 }, { X: 6, Y: 2 }],
        otherPointArr: [],
        colorGroup: {
          LineColor: 'rgba(255,99,71,0.9)',
          bgActiveColor: 'rgba(255,240,245,0.7)',
          bgDefaultColor: 'rgba(255,240,245,0)',
          centerActiveColor: 'rgba(0,191,255,0.6)',
          centerDefaultColor: 'rgba(245,245,245,1)',
        },
        canEdit: true
      };
      const drawOptions1 = {
        question: ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'],
        answer: ['', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6'],
        defaultPointArr: [{ X: 0, Y: 1 }, { X: 1, Y: 2 }, { X: 2, Y: 2 }, { X: 3, Y: 3 },
          { X: 4, Y: 3 }, { X: 5, Y: 5 }, { X: 6, Y: 2 }],
        typeFormat: {
          approve: '5,167,98',
          doubt: '243,215,153',
          reject: '255,97,87',
        },
        otherPointArr: [{ X: 1, Y: 1, type: 'approve' }, { X: 1, Y: 3, type: 'doubt' }, { X: 2, Y: 4, type: 'reject' }, { X: 3, Y: 4, type: 'reject' },
            { X: 4, Y: 4, type: 'doubt' }, { X: 5, Y: 4, type: 'doubt' }, { X: 6, Y: 3, type: 'approve' }],
        colorGroup: {
          LineColor: 'rgba(166,99,71,0.9)',
          bgActiveColor: 'rgba(127,255,170,0.6)',
          bgDefaultColor: 'rgba(255,240,245,0)',
          centerActiveColor: 'rgba(0,191,255,0.6)',
          centerDefaultColor: 'rgba(245,245,245,1)',
        },
        canEdit: false
      };
      const drawOptions2 = {
        question: ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'],
        answer: ['', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6'],
        defaultPointArr: [],
        typeFormat: {
          approve: '5,167,98',
          doubt: '243,215,153',
          reject: '255,97,87',
        },
        otherPointArr: [{ X: 1, Y: 1, type: 'approve', opacity: 0.6 }, { X: 1, Y: 2, type: 'approve', opacity: 0.5 }, { X: 1, Y: 3, type: 'doubt' }, { X: 2, Y: 4, type: 'reject' }, { X: 3, Y: 4, type: 'reject' },
            { X: 4, Y: 4, type: 'doubt' }, { X: 5, Y: 4, type: 'doubt' }, { X: 6, Y: 3, type: 'approve' }],
        colorGroup: {
          LineColor: 'rgba(166,99,71,0.9)',
          bgActiveColor: 'rgba(127,255,170,0.6)',
          bgDefaultColor: 'rgba(255,240,245,0)',
          centerActiveColor: 'rgba(0,191,255,0.6)',
          centerDefaultColor: 'rgba(245,245,245,1)',
        },
        canEdit: false
      };
        return(
          <Row justify={'flex-start'} align={'flex-start'}>
          <Col span={12}><DrawPart options={drawOptions} /></Col>
          <Col span={12}><DrawPart options={drawOptions1} /></Col>
          <Col span={12}><DrawPart options={drawOptions2} /></Col>
        </Row>
        );
    }
}
export default DrawPartDoc;