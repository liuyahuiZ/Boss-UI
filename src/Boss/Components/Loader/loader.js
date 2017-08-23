import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './style';
import '../Style/loader.css';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      status: 'hide',
    };
    this.hide = this.hide.bind(this);
  }
  show(status) {
    if (status && status !== '') {
      this.setState({ status: 'hide' });
    } else {
      this.setState({ status: 'show' });
    }
  }
  hide() {
    this.setState({ status: 'hide' });
  }
  render() {
    let contbg = '';
    let cell = '';
    if (this.state.status === 'show') {
      contbg = (<div style={styles.boxbg} onClick={() => { this.hide(); }}>1</div>);
      cell = (
        <div style={styles.loadContainer}>
          <div className="loader">Loading...</div>
        </div>
      );
    }

    return (
      <div style={styles.container} >
        <ReactCSSTransitionGroup
          transitionName="carousel"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {cell}
          {contbg}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

Loader.propTypes = {
  // style: PropTypes.shape({})
};

Loader.defaultProps = {
};

export default Loader;
