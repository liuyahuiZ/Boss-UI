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
          <section className="doc">
          <Row>
            <Col span={24}>
              <h2>Collapse 折叠面板</h2>
              <div>可同时展开多个面板，面板之间不影响</div>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={24} style={styles.codeBox}>
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
            <Code codes={`import { Components } from 'boss-react-ui';
const { Collapse, Panel } = Components;
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
</Collapse>`} />
        </Row>
        </section>
        );
    }
}
export default CollapseDoc;