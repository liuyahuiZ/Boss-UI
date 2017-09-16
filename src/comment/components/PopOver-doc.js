import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'boss-react-ui';
import styles from '../common/style';
import Code from '../common/Code';
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
    PopOver
  } = Components;
  
const { SearchPart, TablePart, DrawPart, EditPart, TransferPart } = Parts;
class LabelDoc extends Component {
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
              <h2>PopOVer 标签</h2>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
              <Row>
                <Col span={24} style={{ padding: '20px' }} />
                <Col span={12}>
                  <PopOver
                    popContent={(<Switch checkedText={0} unCheckText={1} bgColor={'#FF6157'} checked />)}
                    placement={'top'} selfkey={'1'}
                  >
                    <Buttons
                      text="top"
                      type={'primary'}
                    />
                  </PopOver>
                </Col>
                <Col span={12}>
                  <PopOver
                    popContent={'1231312312312312312'}
                    placement={'left'} selfkey={'2'}
                  >
                    <Buttons
                      text="left"
                      type={'primary'}
                    />
                  </PopOver>
                </Col>
                <Col span={24} style={{ padding: '30px' }} />
                <Col span={12}>
                  <PopOver
                    popContent={'1231312312312312312'}
                    placement={'right'} selfkey={'3'}
                  >
                    <Buttons
                      text="right"
                      type={'primary'}
                    />
                  </PopOver>
                </Col>
                <Col span={12}>
                  <PopOver
                    popContent={'1231312312312312312'}
                    placement={'bottom'} selfkey={'4'}
                  >
                    <Buttons
                      text="bottom"
                      type={'primary'}
                    />
                  </PopOver>
                </Col>
                <Col span={24} style={{ padding: '20px' }} />
              </Row>
            </Col>
            <Code codes={`import { Components } from 'boss-react-ui';
const { PopOver, Buttons } = Components;
<PopOver
popContent={(<Switch checkedText={0} unCheckText={1} bgColor={'#FF6157'} checked />)}
placement={'top'} selfkey={'1'}
>
<Buttons
  text="top"
  type={'primary'}
/>
</PopOver>
/>`} />
          </Row>
          </section>
        );
    }
}
export default LabelDoc;