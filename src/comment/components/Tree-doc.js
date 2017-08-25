import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'boss-react-ui';
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
const x = 3;
const y = 2;
const z = 2; // 层级
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key, preKey });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
  return tns;
};
generateData(z);
class TreeDoc extends Component {
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
                <h2>Tree 树形控件</h2>
                <div>用清晰的层级结构展示信息，可展开或折叠。</div>
              </Col>
              <Col span={24}>
                <h3>基础用法</h3>
              </Col>
              <Col span={24} style={styles.codeBox}>   
                <Tree
                    Date={gData}
                />
              </Col>
              <Col span={24}>
                <h3>带有选择框的树</h3>
              </Col>
              <Col span={24} style={styles.codeBox}>
                <Tree
                    Date={gData}
                    display={'show'}
                    checkable
                />
              </Col>
            </Row>
            </section>
        );
    }
}
export default TreeDoc;