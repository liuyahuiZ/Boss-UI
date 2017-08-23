import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal';

let cmsg = {};
const div = document.createElement('div');
document.body.appendChild(div);

function calls() {
  this.toaster(cmsg);
}

function open(msg) {
  cmsg = msg;
  cmsg.title = msg && msg.title ? msg.title : 'normal';
  cmsg.content = msg && msg.content ? msg.content : '';
  cmsg.time = msg && msg.time ? msg.time : 5000;
  ReactDOM.render(<Modal />, div, calls);
}

function mAlert(msg, callback) {
  const buttons = [];
  buttons[0] = {
    title: '确定',
    type: ['primary', 'small'],
    model: 'sure'
  };
  if (typeof callback === 'function') {
    buttons[0].callbk = function (id, callbk) { callback(id, callbk); callbk(id); return true; };
  } else {
    buttons[0].callbk = function () { return true; };
  }
  msg.buttons = buttons;
  open(msg, callback);
}

function mConfim(msg, callback, canselCallback) {
  const buttons = [];
  buttons[0] = {
    title: '确定',
    type: ['primary', 'small'],
    model: 'sure'
  };
  buttons[1] = {
    title: '取消',
    type: ['small'],
    model: 'cancle'
  };
  if (typeof callback === 'function') {
    buttons[0].callbk = function (id, callbk) { callback(id, callbk); callbk(id); return true; };
    buttons[1].callbk = function (id, callbk) {
      canselCallback(id, callbk);
      callbk(id); return true;
    };
  } else {
    buttons[0].callbk = function () { return true; };
    buttons[1].callbk = function () { return true; };
  }
  msg.buttons = buttons;
  open(msg, callback);
}

function mformConfirm(msg, callback, canselCallback) {
  const buttons = [];
  buttons[0] = {
    title: msg.btnSure && msg.btnSure.text ? msg.btnSure.text : '确定',
    type: msg.btnSure && msg.btnSure.type ? msg.btnSure.type : ['primary'],
    model: 'sure'
  };
  buttons[1] = {
    title: msg.btnCancle && msg.btnCancle.text ? msg.btnCancle.text : '取消',
    type: msg.btnCancle && msg.btnCancle.type ? msg.btnCancle.type : [],
    model: 'cancle'
  };
  if (typeof callback === 'function') {
    buttons[0].callbk = function (id, callbk) { callback(id, callbk); return true; };
    buttons[1].callbk = function (id, callbk) { canselCallback(id, callbk); return true; };
  } else {
    buttons[0].callbk = function () { return true; };
    buttons[1].callbk = function () { return true; };
  }
  msg.buttons = buttons;
  open(msg, callback);
}
export default {
  confirm: mConfim,
  formConfirm: mformConfirm,
  alert: mAlert
};
