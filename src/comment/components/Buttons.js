import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'boss-react-ui';
import styles from '../common/style';
import Code from '../common/Code';
import '../../Style/comment.css';
import Highlight from 'react-highlight';

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
    Buttons,
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
      const icon = (<Icon iconName={'person'} iconColor={'color'} size={'120%'}/>);
        return(
          <section className="doc">
            <Row>
            <Col span={24}>
                <h2>Button 按钮</h2>
            </Col>
            <Col span={24}>
                <h3>基础用法</h3>
                <div>基础的按钮用法</div>
            </Col>
            <Col span={24} style={styles.codeBox}>
            <Buttons
              text="主要按钮"
              style={marginStyle}
              type={'primary'}
              size={'large'}
            />
            <Buttons
              text="默认按钮"
              style={marginStyle}
              type={'primary'}
              size={'large'}
              plain
            />
            <Buttons
              text="文字按钮"
              style={marginStyle}
              type={'link'}
            />
            </Col>
            <Code codes={`import { Components } from 'boss-react-ui';
const { Buttons } = Components;
const marginStyle = {
  margin: '10px'
};
<Buttons
  text="主要按钮"
  style={marginStyle}
  type={'primary'}
  size={'large'}
/>
<Buttons
  text="默认按钮"
  style={marginStyle}
  type={'primary'}
  size={'large'}
  plain
/>
<Buttons
  text="文字按钮"
  style={marginStyle}
  type={'link'}
/>`} description={`type是控制按钮的主题样式，
size是按钮的大小，plain是按钮背景色为空`} />
            <Col span={24} >
                <h3>禁用状态</h3>
                <div>按钮不可用状态</div>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Buttons
                text="主要按钮"
                style={marginStyle}
                type={'primary'}
                size={'large'}
                disabled
              />
              <Buttons
                text="默认按钮"
                style={marginStyle}
                type={'primary'}
                size={'large'}
                plain
                disabled
              />
              <Buttons
                text="文字按钮"
                style={marginStyle}
                type={'link'}
                disabled
              />
            </Col>
            <Code codes={`<Buttons
  text="主要按钮"
  style={marginStyle}
  type={'primary'}
  size={'large'}
  disabled
/>
<Buttons
  text="默认按钮"
  style={marginStyle}
  type={'primary'}
  size={'large'}
  plain
  disabled
/>
<Buttons
  text="文字按钮"
  style={marginStyle}
  type={'link'}
  disabled
/>`} />
            <Col span={24}>
                <h3>不同大小</h3>
                <div>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸</div>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Buttons
                text="大型按钮"
                style={marginStyle}
                type={'primary'}
                size={'large'}
              />
              <Buttons
                text="正常按钮"
                style={marginStyle}
                type={'primary'}
              />
              <Buttons
                text="小型按钮"
                style={marginStyle}
                type={'primary'}
                size={'small'}
              />
            </Col>
            <Code codes={`<Buttons
  text="大型按钮"
  style={marginStyle}
  type={'primary'}
  size={'large'}
/>
<Buttons
  text="正常按钮"
  style={marginStyle}
  type={'primary'}
/>
<Buttons
  text="小型按钮"
  style={marginStyle}
  type={'primary'}
  size={'small'}
/>`} />         
            <Col span={24}>
                <h3>幽灵按钮</h3>
            </Col>    
            <Col span={24} style={styles.codeBox}>
              <Buttons
                text="大型按钮"
                style={marginStyle}
                type={'primary'}
                size={'large'}
                plain
              />
              <Buttons
                text="正常按钮"
                style={marginStyle}
                type={'primary'}
                plain
              />
              <Buttons
                text="小型按钮"
                style={marginStyle}
                type={'link'}
                size={'small'}
                plain
              />
            </Col>
            <Code codes={`<Buttons
  text="大型按钮"
  style={marginStyle}
  type={'primary'}
  size={'large'}
  plain
/>
<Buttons
  text="正常按钮"
  style={marginStyle}
  type={'primary'}
  plain
/>
<Buttons
  text="小型按钮"
  style={marginStyle}
  type={'link'}
  size={'small'}
  plain
/>`} />
            <Col span={24}>
                <h3>文字按钮</h3>
            </Col> 
            <Col span={24} style={styles.codeBox}>
              <Buttons
                text="大型按钮"
                style={marginStyle}
                type={'link'}
                size={'large'}
              />
              <Buttons
                text="正常按钮"
                style={marginStyle}
                type={'link'}
              />
              <Buttons
                text="小型按钮"
                style={marginStyle}
                type={'link'}
                size={'small'}
              />
            </Col>
            <Code codes={`<Buttons
  text="大型按钮"
  style={marginStyle}
  type={'link'}
  size={'large'}
/>
<Buttons
  text="正常按钮"
  style={marginStyle}
  type={'link'}
/>
<Buttons
  text="小型按钮"
  style={marginStyle}
  type={'link'}
  size={'small'}
/>`} />
            <Col span={24}>
                <h3>Icon按钮</h3>
            </Col> 
            <Col span={24} style={styles.codeBox}>
              <Buttons
                text={(<span>{icon}123</span>)}
                style={marginStyle}
                type={'primary'}
                size={'large'}
              />
              <Buttons
                text={(<span>{icon}456</span>)}
                style={marginStyle}
                type={'primary'}
                plain
              />
              <Buttons
              text={(<span>{icon}789</span>)}
                style={marginStyle}
                type={'link'}
                size={'small'}
              />
            </Col>
            <Col span={24}>
                <h3>不同颜色</h3>
                <div>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸</div>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Buttons
                text="成功"
                style={marginStyle}
                type={'success'}
              />
              <Buttons
                text="警告"
                style={marginStyle}
                type={'warning'}
              />
              <Buttons
                text="错误"
                style={marginStyle}
                type={'error'}
              />
              <Buttons
                text="正常"
                style={marginStyle}
                type={'info'}
              />
            </Col>
            <Code codes={`<Buttons
  text="成功"
  style={marginStyle}
  type={'success'}
/>
<Buttons
  text="警告"
  style={marginStyle}
  type={'warning'}
/>
<Buttons
  text="错误"
  style={marginStyle}
  type={'error'}
/>
<Buttons
  text="正常"
  style={marginStyle}
  type={'info'}
/>`} />
          </Row>
        </section>
        );
    }
}
export default Bottons;