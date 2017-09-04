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
  
const { SearchPart, TablePart, DrawPart, EditPart, TransferPart, DetailPart, TitlePart, RichDetailPart } = Parts;
class DetailPartDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
      const item = {
        key: 'baseInfo',
        titlePart: {
          title: '基础信息',
          note: ''
        }
      }
      const mergedDetailList = [{"text":"银行渠道","key":"channelBankId","format":{"jingu":"金谷农商行"},"value":"jingu"},{"text":"订单时间","key":"createTime","format":["date","yyyy-MM-dd hh:mm:ss"],"value":1493568000000},{"text":"借贷产品名称","key":"loanProductName","value":"123"},{"text":"贷款产品编号","key":"loanProductId","value":"123"},{"text":"姓名","key":"userName","value":"123"},{"text":"性别","key":"userSex"},{"text":"年龄","key":"userAge","value":"123"},{"text":"身份证号","key":"identNo","value":"123"},{"text":"手机号","key":"mobile","value":"123"},{"text":"商户名称","key":"merchantName","value":"123"},{"text":"商户地址","key":"merchantAddress","value":"123"},{"text":"居住地址","key":"detailAddress","value":"123"},{"text":"居住状况","key":"liveType","format":{"0":"其他","1":"租房，在同一房屋2年以下","2":"租房，在同一房屋2年及以上","3":"与父母同住","4":"自有住房，有贷款","5":"自有住房，无贷款"},"value":"1"},{"text":"婚姻状况","key":"marriageStatus","format":{"1":"未婚","2":"已婚无子女","3":"已婚有子女","4":"离异","5":"其他"},"value":"2"},{"text":"联系人姓名","key":"contacts","value":"123"},{"text":"联系人关系","key":"contactsRelation","value":"123"},{"text":"联系人电话","key":"contactsPhone","value":"123"},{"text":"联系人地址","key":"contactsAddress","value":"123"}]
        return(
          <section className="doc">
          <Row>
          <Col span={24}>
            <h2>详情展示 编辑框组合</h2>
          </Col>
          <Col span={24}>
            <h3>基础用法</h3>
          </Col>
          <Col span={24} style={styles.codeBox}>
            <TitlePart titlepart={item.titlePart} />
            <DetailPart
              detailList={mergedDetailList}
              data={[]}
              display={'half'}
              style={item.style}
            />
          </Col>
          <Code codes={`import { Parts } from 'boss-react-ui';
const { SearchPart, TablePart, TitlePart, DetailPart, EditPart } = Parts;
const mergedDetailList = [{"text":"银行渠道","key":"channelBankId","format":{"jingu":"金谷农商行"},"value":"jingu"},
{"text":"订单时间","key":"createTime","format":["date","yyyy-MM-dd hh:mm:ss"],"value":1493568000000},
{"text":"借贷产品名称","key":"loanProductName","value":"123"},
{"text":"贷款产品编号","key":"loanProductId","value":"123"},
{"text":"姓名","key":"userName","value":"123"},
{"text":"性别","key":"userSex"},{"text":"年龄","key":"userAge","value":"123"},
{"text":"身份证号","key":"identNo","value":"123"},{"text":"手机号","key":"mobile","value":"123"},{"text":"商户名称","key":"merchantName","value":"123"},
{"text":"商户地址","key":"merchantAddress","value":"123"},{"text":"居住地址","key":"detailAddress","value":"123"},
{"text":"居住状况","key":"liveType","format":{"0":"其他","1":"租房，在同一房屋2年以下","2":"租房，在同一房屋2年及以上","3":"与父母同住","4":"自有住房，有贷款","5":"自有住房，无贷款"},"value":"1"},
{"text":"婚姻状况","key":"marriageStatus","format":{"1":"未婚","2":"已婚无子女","3":"已婚有子女","4":"离异","5":"其他"},"value":"2"},
{"text":"联系人姓名","key":"contacts","value":"123"},
{"text":"联系人关系","key":"contactsRelation","value":"123"},
{"text":"联系人电话","key":"contactsPhone","value":"123"},
{"text":"联系人地址","key":"contactsAddress","value":"123"}]
<TitlePart titlepart={item.titlePart} />
<DetailPart
  detailList={mergedDetailList}
  data={[]}
  display={'half'}
  style={item.style}
/>`} />
        </Row>
        </section>
        );
    }
}
export default DetailPartDoc;