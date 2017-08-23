import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {Link} from 'react-router'
class App extends Component {

  constructor(props) {
    super(props)
  }

  /**
   * diapatch environment
   */
  componentDidMount() {
    const { dispatch } = this.props
  }

  /**
   * App render
   * includes[children|Scroll2Top]
   */
  render() {
    const style= {
      height: '100%'
    }
    return (
      <div className="box">
     	  <div className="item_1"></div>
        <div className="foot fixed left-0 bottom-0">
          <div className="item text-align-center line-height-40"><Link to={`/index`}>Node</Link></div>
          <div className="item text-align-center line-height-40"><Link to={`/about`}>Abouts</Link></div>
          <div className="item text-align-center line-height-40"><Link to={`/page`}>Pages</Link></div>
        </div>
      </div>
    )
  }

}

// App.propTypes = {
//   children: PropTypes.node,
//   dispatch: PropTypes.func.isRequired
// }

function mapStateToProps(state) {
  const {environment} = state
  return {
    height: environment.height,
    width: environment.width,
    isMobile: environment.isMobile
  }
}

export default App
