import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'boss-react-ui';
import styles from './common/style';
import icons from './common/icon';
import '../Style/comment.css'
import menu from '../Config/Menu'
import '../Style/highlight.css'
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
class AllCompenent extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
          
      };
    }
    checkSystem(style) {
        if(/macintosh|mac os x/i.test(navigator.userAgent)){
            style = utils.array.merge([style, styles.overflow])
        } else if (/windows|win32|win64/i.test(navigator.userAgent)) {

        } else if(/linux/i.test(navigator.userAgent)) {

        }
        return style;
    }
    render() {
        console.log(this.props.location.pathname);
        const pathName = this.props.location.pathname
        const activeNo = pathName.split('/').pop()
        const leftMenuStyle = this.checkSystem(styles.leftMenu)
        const contonerStyle = this.checkSystem(styles.contoner)
        return(
            <Row >
                <Col span={24} style={styles.title}>
                    <div style={styles.logo}>Boss-UI</div>
                </Col>
                <Col span={24}>
                    <Row >
                        <Col span={5} style={leftMenuStyle}>
                        <Tree
                            Date={menu}
                            display={'show'}
                            activeNode={activeNo}
                        />
                        </Col>
                        <Col span={19} style={contonerStyle}>{this.props.children}</Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}
export default AllCompenent;