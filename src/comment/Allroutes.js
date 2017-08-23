import React, {Component} from 'react'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import App  from './app'
import Index  from './index'

class MyRouter extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <Router history={hashHistory}>
      <Route path={'/'} component={App} />
      <Route path={'/index'} component={Index} />
    </Router>
    )
  }
}
export default MyRouter
