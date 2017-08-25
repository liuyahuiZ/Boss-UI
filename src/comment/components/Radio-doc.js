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
class RadioDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
        const checkboxOptions = [{ value: 1, text: 'haha', checked: true }, { value: 2, text: 'haha2' }, { value: 3, text: 'haha3', disabled: true }];
        return(
            <section className="doc">
            <Row>
            <Col span={24}>
              <h2>Radio 单选框</h2>
              <div>在一组备选项中进行单选</div>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
            <Radio
                options={[{ value: 1, text: 'haha' }, { value: 2, text: 'haha2', checked: true }]}
                onChange={click}
            />
            </Col>
            <Col span={24}>
              <h2>Checkbox 多选框</h2>
              <div>一组备选项中进行多选</div>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Checkbox
                ref={(checkbox) => { dom.checkbox = checkbox; }}
                options={checkboxOptions}
                onChange={click}
              />
            </Col>
          </Row>
          </section>
        );
    }
}
export default RadioDoc;