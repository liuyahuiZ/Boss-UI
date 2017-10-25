import React, {Component} from 'react'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AllComponent from './AllComponent'
// import Bottons from './components/Buttons'
import GridDoc from './components/Grid-doc'
// import InputDoc from './components/Input-doc'
// import DatepickerDoc from './components/Datepicker-doc'
import RadioDoc from './components/Radio-doc'
import SelectDoc from './components/Select-doc'
import ToatserDoc from './components/Toatser-doc'
import ConfirmDoc from './components/Confirm-doc'
// import IconsDoc from './components/Icons-doc'
import ProgressDoc from './components/Progress-doc'
import TabDoc from './components/Tab-doc'
import CollapseDoc from './components/Collapse-doc'
import LabelDoc from './components/Label-doc'
// import TreeDoc from './components/Tree-doc'
import CarouselDoc from './components/Carousel-doc'
import FileUpDoc from './components/FileUp-doc'
import SwitchDoc from './components/Switch-doc'
import MenuDoc from './components/Menu-doc'
import PopOverDoc from './components/PopOver-doc'
import VerifyCodeDoc from './components/VerifyCode-doc'
// import SearchPartDoc from './parts/SearchPart-doc'
import TablePartDoc from './parts/TablePart-doc'
import LablePartDoc from './parts/LablePart-doc'
import DrawPartDoc from './parts/DrawPart-doc'
import TransferPartDoc from './parts/TransferPart-doc'
import EditPartDoc from './parts/EditPart-doc'
import DetailPartDoc from './parts/DetailPart-doc'
import ListPartDoc from './parts/ListPart-doc'
import Info from './info'
import Logs from './logs'

const Bottons = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./components/Buttons').default)
  },'Bottons')
};

const InputDoc = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./components/Input-doc').default)
  },'InputDoc')
};

const DatepickerDoc = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./components/Datepicker-doc').default)
  },'DatepickerDoc')
};

const IconsDoc = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./components/Icons-doc').default)
  },'IconsDoc')
};

const TreeDoc = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./components/Tree-doc').default)
  },'TreeDoc')
};

const SearchPartDoc = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./parts/SearchPart-doc').default)
  },'SearchPartDoc')
};

class MyRouter extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <Router history={hashHistory}>
      <Route path={'/'} component={AllComponent} >
        <IndexRedirect to="/info" />
      </Route>
      <Route path={'info'} component={AllComponent} >
        <IndexRedirect to="/info/index" />
        <Route path={'index'} component={Info} />
      </Route>
      <Route path={'logs'} component={AllComponent} >
        <Route path={'index'} component={Logs} />
      </Route>
      <Route path={'component'} component={AllComponent} >
        <Route path={'Button'} getComponent={Bottons} />
        <Route path={'Grid'} component={GridDoc} />
        <Route path={'Input'} getComponent={InputDoc} />
        <Route path={'Datepicker'} getComponent={DatepickerDoc} />
        <Route path={'Button'} component={Bottons} />
        <Route path={'Radio&Checkbox'} component={RadioDoc} />
        <Route path={'Select'} component={SelectDoc} />
        <Route path={'Switch'} component={SwitchDoc} />
        <Route path={'Toaser'} component={ToatserDoc} />
        <Route path={'Confirm'} component={ConfirmDoc} />
        <Route path={'Icons'} getComponent={IconsDoc} />
        <Route path={'Progress'} component={ProgressDoc} />
        <Route path={'Tab'} component={TabDoc} />
        <Route path={'Collapse'} component={CollapseDoc} />
        <Route path={'Label'} component={LabelDoc} />
        <Route path={'Tree'} getComponent={TreeDoc} />
        <Route path={'Carousel'} component={CarouselDoc} />
        <Route path={'FileUp'} component={FileUpDoc} />
        <Route path={'Menu'} component={MenuDoc} />
        <Route path={'PopOver'} component={PopOverDoc} />
        <Route path={'VerifyCode'} component={VerifyCodeDoc} />
      </Route>
      <Route path={'Parts'} component={AllComponent} >
        <Route path={'SearchPart'} getComponent={SearchPartDoc} />
        <Route path={'TablePart'} component={TablePartDoc} />
        <Route path={'LablePart'} component={LablePartDoc} />
        <Route path={'DrawPart'} component={DrawPartDoc} />
        <Route path={'TransferPart'} component={TransferPartDoc} />
        <Route path={'EditPart'} component={EditPartDoc} />
        <Route path={'DetailPart'} component={DetailPartDoc} />
	      <Route path={'ListPart'} component={ListPartDoc} />
     </Route>
    </Router>
    )
  }
}
export default MyRouter
