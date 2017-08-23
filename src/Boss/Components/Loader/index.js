import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './loader';

let status = '';
const div = document.createElement('div');
document.body.appendChild(div);


function calls() {
  this.show(status);
}
function create(tstatus) {
  return () => {
    console.log(tstatus);
    status = tstatus;
    ReactDOM.render(<Loader />, div, calls);
  };
}

export default {
  show: create(),
  hide: create('hide')
};
