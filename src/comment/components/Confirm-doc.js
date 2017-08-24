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
class ConfirmDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
        return(
            <Row style={{minHeight: '500px'}}>
            <Col span={24}>Confirm</Col>
            <Col span={24}>
              <Button
                text="confirm"
                type={['primary']}
                style={marginStyle}
                onClick={() => { Modal.confirm({ title: 'warning', content: 'this is a warning', type: 'small' }, () => { alert('this is sure callback'); }, () => { alert('this is cancle callback'); }); }}
              />
              <Button
                text="alert"
                type={['primary']}
                style={marginStyle}
                onClick={() => { Modal.alert({ title: 'warning', content: 'this is a warning', type: 'middle' }, () => { console.log('alert'); }); }}
              />
              <Button
                text="mult open"
                type={['primary']}
                style={marginStyle}
                onClick={() => {
                  Modal.alert({ title: 'warning',
                    content: (<div><a onClick={() => { Modal.confirm({ title: 'warning', content: 'this is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warning' }, () => { console.log('this is callback'); }, () => { console.log('this is cancle callback'); }); }} >click to do a new Alert</a></div>),
                    type: 'large',
                    style: 'primary',
                  },
                    () => { console.log('nult callback'); });
                }}
              />
              <Button
                text="form open"
                type={['primary']}
                style={marginStyle}
                onClick={() => {
                  Modal.formConfirm({ title: 'Form Open',
                    content: (
                      <EditPart
                        editItemList={editItemList}
                        ref={(ref) => {
                          self.editPart = ref;
                        }}
                      />
                    ),
                    style: 'primary',
                    btnConStyle: 'center',
                    btnSure: {
                      text: '复审通过',
                      type: ['primary']
                    },
                    btnCancle: {
                      text: '复审不通过',
                    }
                  },
                  (id, callback) => { save(id, callback); },
                  (id, callback) => { callback(id); console.log('this is cancle callback'); });
                }}
              />
            </Col>
            <Col span={24}>
              <Button
                text="small"
                type={['primary']}
                style={marginStyle}
                onClick={() => { Modal.confirm({ title: 'warning', content: 'this is a warning', type: 'small', style: 'primary' }, () => { alert('this is sure callback'); }, () => { alert('this is cancle callback'); }); }}
              />
              <Button
                text="middle"
                type={['primary']}
                style={marginStyle}
                onClick={() => { Modal.alert({ title: 'warning', content: 'this is a warning', type: 'middle', style: 'primary' }, () => { console.log('alert'); }); }}
              />
              <Button
                text="large"
                type={['primary']}
                style={marginStyle}
                onClick={() => {
                  Modal.alert({ title: 'warning',
                    content: (<div><a onClick={() => { Modal.confirm({ title: 'warning', content: 'this is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warningthis is a warning' }, () => { console.log('this is callback'); }, () => { console.log('this is cancle callback'); }); }} >click to do a new Alert</a></div>),
                    type: 'large',
                    style: 'primary'
                  },
                    () => { console.log('nult callback'); });
                }}
              />
            </Col>
            <Col span={24}>Loading</Col>
            <Col span={24}>
              <Button
                text="Loader show"
                type={['primary']}
                style={marginStyle}
                onClick={() => {
                  Loader.show();
                }}
              />
              <Button
                text="Loader Hide"
                type={['primary']}
                style={marginStyle}
                onClick={() => {
                  Loader.hide();
                }}
              />
            </Col>
          </Row>
        );
    }
}
export default ConfirmDoc;