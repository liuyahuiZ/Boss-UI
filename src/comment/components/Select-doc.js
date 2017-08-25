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
class SelectDoc extends Component {
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
              <h2>Select 选择器</h2>
              <div>当选项过多时，使用下拉菜单展示并选择内容</div>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
            <Row>
              <Col span={12}>
                <Select
                  style={marginStyle}
                  options={[{ value: 1, text: 'haha' }, { value: 2, text: 'haha2' }]}
                />
              </Col>
              <Col span={12}>
                <Selects
                  style={marginStyle}
                  options={[{ value: 1, text: 'haha' }, { value: 2, text: 'haha2123123123123123123123123123123' },
                  { value: 3, text: 'haha' }, { value: 4, text: 'haha2' },
                  { value: 6, text: 'haha' }, { value: 5, text: 'haha2' },
                  { value: 7, text: 'haha' }, { value: 8, text: 'haha2' },
                  { value: 9, text: 'haha' }, { value: 10, text: 'haha2' }]}
                />
              </Col>
              <Col span={12}>
                <Selects
                  style={{ width: '200px', margin: '10px' }}
                  options={[{ value: 1, text: 'haha' }, { value: 2, text: 'haha2' },
                  { value: 3, text: 'haha3' }, { value: 4, text: 'haha4' }]}
                />
              </Col>
            </Row>
            </Col>
            <Col span={24}>
              <h3>带有过滤功能的搜索框</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Selects
                style={marginStyle}
                options={[{ value: 1, text: 'haha' }, { value: 2, text: 'haha2123123123123123123123123123123' },
                { value: 3, text: 'haha' }, { value: 4, text: 'haha2' },
                { value: 6, text: 'haha' }, { value: 5, text: 'haha2' },
                { value: 7, text: 'haha' }, { value: 8, text: 'haha2' },
                { value: 9, text: 'haha' }, { value: 10, text: 'haha2' }]}
                filter
              />
            </Col>
            <Col span={24}>
              <h3>禁用状态</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
            <Row>
              <Col span={12}>
              <Select
                style={marginStyle}
                options={[{ value: 1, text: 'haha' }, { value: 2, text: 'haha2' }]}
                disabled
              />
              </Col>
              <Col span={12}>
              <Selects
                style={{ width: '300px', margin: '10px' }}
                options={[{ value: 1, text: 'haha' }, { value: 2, text: 'haha2' },
                { value: 3, text: 'haha3' }, { value: 4, text: 'haha4' }]}
                disabled
              />
              </Col>
            </Row>
            </Col>
          </Row>
          </section>
        );
    }
}
export default SelectDoc;