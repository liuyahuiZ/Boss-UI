import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'boss-react-ui';
import styles from '../common/style';
import Code from '../common/Code';
import '../../Style/comment.css';

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
const gData = [
  { title: '开发指南', key: '0-0', preKey: '0', iconName: 'cube' },
  { title: '基础组件',
    key: '0-1',
    preKey: '0',
    iconName: 'android-send',
    children: [
      { title: 'Components',
        key: '0-1-0',
        preKey: '0-1',
        iconName: 'cube',
        children: [
          { title: 'Grid', key: '0-1-0-15', preKey: '0-1-0', otherName: 'Grid' },
          { title: 'Button', key: '0-1-0-0', preKey: '0-1-0', otherName: 'Button' },
          { title: 'Input', key: '0-1-0-1', preKey: '0-1-0' },
          { title: 'DatePicker', key: '0-1-0-2', preKey: '0-1-0' },
          { title: 'Select', key: '0-1-0-4', preKey: '0-1-0' },
          { title: 'Radio&Checkbox', key: '0-1-0-3', preKey: '0-1-0' },
          { title: 'Switch', key: '0-1-0-5', preKey: '0-1-0' },
          { title: 'Label', key: '0-1-0-11', preKey: '0-1-0' },
          { title: 'Icons', key: '0-1-0-7', preKey: '0-1-0' },
          { title: 'Progress', key: '0-1-0-8', preKey: '0-1-0' },
          { title: 'Toaser', key: '0-1-0-6', preKey: '0-1-0' },
          { title: 'Confirm', key: '0-1-0-16', preKey: '0-1-0' },
          { title: 'Tab', key: '0-1-0-9', preKey: '0-1-0' },
          { title: 'Collapse', key: '0-1-0-10', preKey: '0-1-0' },
          { title: 'Tree', key: '0-1-0-12', preKey: '0-1-0' },
          { title: 'Carousel', key: '0-1-0-13', preKey: '0-1-0' },
          { title: 'FileUp', key: '0-1-0-14', preKey: '0-1-0' },
        ] },
      { title: 'Parts',
        key: '0-1-1',
        preKey: '0-1',
        children: [
          { title: 'SearchPart', key: '0-1-1-0', preKey: '0-1-1' },
          { title: 'EditPart', key: '0-1-1-3', preKey: '0-1-1' },
          { title: 'DetailPart', key: '0-1-1-4', preKey: '0-1-1' },
          { title: 'DrawPart', key: '0-1-1-1', preKey: '0-1-1' },
          { title: 'TransferPart', key: '0-1-1-2', preKey: '0-1-1' },
          { title: 'ListPart', key: '0-1-1-5', preKey: '0-1-1' },
        ] }
    ] },
    { title: '更新日志', key: '0-2', preKey: '0', iconName: 'android-send' },

]
;
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
    Switch,
    Menu
  } = Components;
  
const { SearchPart, TablePart, DrawPart, EditPart, TransferPart } = Parts;
class LabelDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        theme: 'dark'
      };
    }
    Toogle() {
      const modal = this.state.modal;
      if (modal) {
        this.setState({
          modal: false
        });
      } else {
        this.setState({
          modal: true
        });
      }
    }
    ToogleTheme(){
      const theme = this.state.theme;
      if (theme==='dark') {
        this.setState({
          theme: 'default'
        });
      } else {
        this.setState({
          theme: 'dark'
        });
      }
    }
    render() {
      
        return(
          <section className="doc">
          <Row>
            <Col span={24}>
              <h2>Menu 菜单</h2>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Row>
                <Col span={8}>
                  <Menu
                    Date={gData}
                    activeNode={'Button'}
                    theme={'default'}
                  />
                </Col>
              </Row>
            </Col>
            <Code codes={`import { Components } from 'boss-react-ui';
const { Menu } = Components;
<Menu
  Date={gData}
  activeNode={'Button'}
  theme={'default'}
/>
/>`} />  
            <Col span={24}>
              <h3>黑色主题</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Row>
                <Col span={8}>
                  <Menu
                    Date={gData}
                    activeNode={'Button'}
                    theme={'dark'}
                  />
                </Col>
              </Row>
            </Col>
            <Code codes={`import { Components } from 'boss-react-ui';
const { Menu } = Components;
<Menu
  Date={gData}
  activeNode={'Button'}
  theme={'dark'}
/>
/>`} />   
            <Col span={24}>
              <h3>缩放内嵌菜单</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Row>
                <Col span={24} style={{marginBottom: '10px'}}>
                  <Buttons
                    text={'Toggle'}
                    type={'primary'}
                    size={'small'}
                    onClick={() => {
                      this.Toogle();
                    }}
                  />
                </Col>
                <Col span={8}>
                  <Menu
                    Date={gData}
                    activeNode={'Button'}
                    theme={'dark'}
                    collapsed={this.state.modal}
                  />
                </Col>
              </Row>
              
            </Col>
            <Code codes={`import { Components } from 'boss-react-ui';
const { Menu } = Components;
<Menu
  Date={gData}
  activeNode={'Button'}
  theme={'dark'}
/>
/>`} />
            <Col span={24}>
              <h3>切换菜单的主题</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Row>
                <Col span={24} style={{marginBottom: '10px'}}>
                  <Buttons
                    text={'Toggle Theme'}
                    type={'primary'}
                    size={'small'}
                    onClick={() => {
                      this.ToogleTheme();
                    }}
                  />
                  <Buttons
                    text={'Toggle'}
                    type={'primary'}
                    style={{marginLeft: '10px'}}
                    size={'small'}
                    onClick={() => {
                      this.Toogle();
                    }}
                  />
                </Col>
                <Col span={8}>
                  <Menu
                    Date={gData}
                    activeNode={'Button'}
                    theme={this.state.theme}
                    collapsed={this.state.modal}
                  />
                </Col>
              </Row>
              
            </Col>
            <Code codes={`import { Components } from 'boss-react-ui';
const { Menu } = Components;
<Menu
  Date={gData}
  activeNode={'Button'}
  theme={'dark'}
/>
/>`} />
          </Row>
          </section>
        );
    }
}
export default LabelDoc;