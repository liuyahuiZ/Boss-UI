import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'boss-react-ui';
import styles from '../common/style';
import icons from '../common/icon';
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
class GridDoc extends Component {
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
                <h2>栅格化布局</h2>
            </Col>
            <Col span={24}>
                <h3>flex模式</h3>
                <div>栅格化布局</div>
            </Col>
            <Col span={24} style={styles.codeBox}>
                <Row justify={'center'} align={'center'} style={styles.heights}>
                    <Col flex={1} style={styles.textCenter}>
                        <div style={styles.items}>flex-1</div>
                    </Col>
                    <Col flex={2} style={styles.textCenter}><div style={styles.items1}>flex-2</div></Col>
                    <Col flex={1} style={styles.textCenter}><div style={styles.items}>flex-1</div></Col>
                </Row>
            </Col>
            <Col span={24} >
            <Collapse >
                <Panel title={'查看代码'}>
                <Row>
                    <Col span={14}>
                        <Highlight >
                        {`<Row justify={'center'} align={'center'} style={styles.heights}>
    <Col flex={1} style={styles.textCenter}>
    <div style={styles.items}>flex-1</div>
    </Col>
    <Col flex={2} style={styles.textCenter}><div style={styles.items1}>flex-2</div></Col>
    <Col flex={1} style={styles.textCenter}><div style={styles.items}>flex-1</div></Col>
</Row>`}
                        </Highlight>
                    </Col>
                    <Col span={10}>
                    </Col>
                </Row>
              </Panel>
              </Collapse >
            </Col>
            <Col span={24}>
                <h3>常用模式</h3>
                <div>栅格化布局</div>
            </Col>
            <Col span={24} style={styles.codeBox}>
            <Row justify={'flex-start'} align={'center'} style={styles.heights}>
                <Col span={1} style={styles.textCenter}><div style={styles.items}>col-1</div></Col>
                <Col span={2} style={styles.textCenter}><div style={styles.items1}>col-2</div></Col>
                <Col span={2} style={styles.textCenter}><div style={styles.items}>col-2</div></Col>
                <Col span={4} style={styles.textCenter}><div style={styles.items1}>col-4</div></Col>
            </Row>
            <Row justify={'flex-start'} align={'center'} gutter={16} style={styles.heights}>
                <Col span={4} style={styles.textCenter}><div style={styles.items}>col-4</div></Col>
                <Col span={4} style={styles.textCenter}><div style={styles.items1}>col-4</div></Col>
                <Col span={8} style={styles.textCenter}><div style={styles.items}>col-8</div></Col>
                <Col span={8} style={styles.textCenter}><div style={styles.items1}>col-8</div></Col>
                <Col span={8} style={styles.textCenter}><div style={styles.items}>col-8</div></Col>
            </Row>
            <Row justify={'flex-start'} align={'center'} style={styles.heights}>
                <Col span={6} style={styles.textCenter}><div style={styles.items}>col-6</div></Col>
                <Col span={6} style={styles.textCenter}><div style={styles.items1}>col-6</div></Col>
                <Col span={6} style={styles.textCenter}><div style={styles.items}>col-6</div></Col>
                <Col span={6} style={styles.textCenter}><div style={styles.items1}>col-6</div></Col>
            </Row>
            </Col>
            <Col span={24} >
            <Collapse >
                <Panel title={'查看代码'}>
                <Row>
                    <Col span={14}>
                        <Highlight >
                        {`<Row justify={'flex-start'} align={'center'} style={styles.heights}>
    <Col span={1} style={styles.textCenter}><div style={styles.items}>col-1</div></Col>
    <Col span={2} style={styles.textCenter}><div style={styles.items1}>col-2</div></Col>
    <Col span={2} style={styles.textCenter}><div style={styles.items}>col-2</div></Col>
    <Col span={4} style={styles.textCenter}><div style={styles.items1}>col-4</div></Col>
</Row>
<Row justify={'flex-start'} align={'center'} gutter={16} style={styles.heights}>
    <Col span={4} style={styles.textCenter}><div style={styles.items}>col-4</div></Col>
    <Col span={4} style={styles.textCenter}><div style={styles.items1}>col-4</div></Col>
    <Col span={8} style={styles.textCenter}><div style={styles.items}>col-8</div></Col>
    <Col span={8} style={styles.textCenter}><div style={styles.items1}>col-8</div></Col>
    <Col span={8} style={styles.textCenter}><div style={styles.items}>col-8</div></Col>
</Row>
<Row justify={'flex-start'} align={'center'} style={styles.heights}>
    <Col span={6} style={styles.textCenter}><div style={styles.items}>col-6</div></Col>
    <Col span={6} style={styles.textCenter}><div style={styles.items1}>col-6</div></Col>
    <Col span={6} style={styles.textCenter}><div style={styles.items}>col-6</div></Col>
    <Col span={6} style={styles.textCenter}><div style={styles.items1}>col-6</div></Col>
</Row>`}
                        </Highlight>
                    </Col>
                    <Col span={10}>
                    </Col>
                </Row>
              </Panel>
              </Collapse >
            </Col>
            <Col span={24}>
                <h3>内嵌模式</h3>
                <div>栅格化布局</div>
            </Col>
            <Col span={24} style={styles.codeBox}>
                <Row justify={'flex-start'} align={'center'} style={styles.heights}>
                <Col span={6} style={styles.textCenter}>
                    <Row justify={'flex-start'} align={'center'} style={styles.heights}>
                    <Col span={6} style={styles.textCenter}><div style={styles.items1}>内嵌col-6</div></Col>
                    <Col span={6} style={styles.textCenter}><div style={styles.items}>内嵌col-6</div></Col>
                    <Col span={6} style={styles.textCenter}><div style={styles.items1}>内嵌col-6</div></Col>
                    </Row>
                </Col>
                <Col span={6} style={styles.textCenter}><div style={styles.items1}>col-6</div></Col>
                <Col span={6} style={styles.textCenter}><div style={styles.items}>col-6</div></Col>
                <Col span={6} style={styles.textCenter}><div style={styles.items1}>col-6</div></Col>
                </Row>
            </Col>
            <Col span={24} >
            <Collapse >
                <Panel title={'查看代码'}>
                <Row>
                    <Col span={14}>
                        <Highlight >
                        {`<Row justify={'flex-start'} align={'center'} style={styles.heights}>
<Col span={6} style={styles.textCenter}>
    <Row justify={'flex-start'} align={'center'} style={styles.heights}>
    <Col span={6} style={styles.textCenter}><div style={styles.items1}>内嵌col-6</div></Col>
    <Col span={6} style={styles.textCenter}><div style={styles.items}>内嵌col-6</div></Col>
    <Col span={6} style={styles.textCenter}><div style={styles.items1}>内嵌col-6</div></Col>
    </Row>
</Col>
<Col span={6} style={styles.textCenter}><div style={styles.items1}>col-6</div></Col>
<Col span={6} style={styles.textCenter}><div style={styles.items}>col-6</div></Col>
<Col span={6} style={styles.textCenter}><div style={styles.items1}>col-6</div></Col>
</Row>`}
                        </Highlight>
                    </Col>
                    <Col span={10}>
                    </Col>
                </Row>
              </Panel>
              </Collapse >
              </Col>

        </Row>
        </section>
        );
    }
}
export default GridDoc;