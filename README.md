## boss-react-ui

一款基于react的UI框架，采用组件分级化思想，将组件分为低阶级组件，中阶组件，高阶组件。

详细组件使用方法： http://www.wetalks.cn/boss-ui-doc/index.html#/info/index

## 开发模式

低阶组件 ：**Components** 部分，属于最底层的组件，跟业务毫无关联，只实现最基础应有的功能，比如Button, input, select等。将其封装暴露出该有的方法和属性，供更高阶的组件调用。

中阶组件 ：**Parts** 部分，属于交互层的组合组件，实现一些特定业务需求的组件，比如TablePart，EditPart，SearchPart等。将其封装暴露出该有的方法和属性，供更高阶的组件调用。

高阶组件 ：**Templates** 部分，属于最上层的组件，页面级的应用，通常是将中阶组件和低阶组件组合使用，来实现某些业务场景的交互和页面。

## 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```
npm install boss-react-ui -s
```

## 快速上手

```javascript
import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'boss-react-ui';
const { Buttons, Input, Modal } = Components;
class Info extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
    render(){
        return (<Buttons
                text="confirm"
                type={'primary'}
                style={{'marginTop':'20px'}}
                onClick={() => { Modal.confirm({ title: 'warning', content: 'this is a warning', type: 'small' }, () => { alert('this is sure callback'); }, () => { alert('this is cancle callback'); }); }}
              />)
    }

```
