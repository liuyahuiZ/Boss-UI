import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import PropTypes from 'prop-types';
import {Components, Parts, utils} from 'boss-react-ui';
import styles from '../common/style';
import '../../Style/comment.css';
import Highlight from 'react-highlight';

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

  class Code extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
        const {children, codes, description} = this.props;
        return(<Col span={24} style={styles.showCode}>
            <Collapse >
              <Panel title={'查看代码'}>
              <Row>
                <Col span={14}>
                    <Highlight >
                    {codes}
                    </Highlight>
                </Col>
                <Col span={10} style={{paddingLeft: '2%'}}>
                    {description}
                </Col>
              </Row>
              </Panel>
              </Collapse >
            </Col>);
    }
}

Code.propTypes = {
    children: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
    style: PropTypes.shape({}),
    codes: PropTypes.string,
    description: PropTypes.string,
  };
  
Code.defaultProps = {
    children: {},
    style: {},
    codes: '',
    description: '',
};
  
export default Code;