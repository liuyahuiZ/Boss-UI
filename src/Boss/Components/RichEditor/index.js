import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Loading from '../Loading';

class RichEditor extends Component {
  static genStyle(tags = []) {
    const res = {};
    const styles = [
      'color', 'font-size', 'font-family', 'position', 'display', 'font-weight', 'cursor',
      'letter-spacing', 'line-height', 'vertical-align', 'text-align',
      'width', 'height',
      'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom',
      'margin', 'margin-top', 'margin-left', 'margin-right', 'margin-bottom',
      'border', 'border-top', 'border-left', 'border-right', 'border-bottom', 'border-collapse', 'border-color', 'border-collapse',
      'background', 'background-color', 'word-break',
      'list-style-type'
    ];
    for (let i = 0; i < tags.length; i++) {
      res[tags[i]] = styles;
    }

    return res;
  }
  static genAttr(tags = []) {
    const res = {};
    const attrs = [
      'src', 'alt', 'width', 'height', 'title', 'color',
      'class', 'align', 'valign', 'size', 'bgColor', 'cols',
      'rows', 'colspan', 'rowspan', 'align', 'size', 'cellpadding',
      'cellspacing', 'border', 'nowrap'
    ];
    for (let i = 0; i < tags.length; i++) {
      res[tags[i]] = attrs;
    }

    return res;
  }
  constructor(props) {
    super(props);

    this.state = {
      isFull: false,
      isLoading: true,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.htmlTags = [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'b',
      'strong', 'i', 'em', 'ul', 'ol', 'li', 'font',
      'br', 'p', 'sub', 'sup', 'del', 'hr',
      'table', 'th', 'tr', 'thead', 'tbody', 'td', 'colgroup', 'col',
      'div', 'pre', 'dl', 'dt', 'dd', 'a', 'span', 'code', 'blockquote',
      'header', 'footer', 'nav', 'aside', 'section', 'figure', 'time', 'cite',
    ];
  }
  componentDidMount() {
    const { editorOnload } = this.props;
    require.ensure([], (require) => {
      window.jquery = require('jquery/dist/jquery');
      this.Simditor = require('simditor');
      this.style = require('../Style/simditor.css');

      this.setState({
        isLoading: false
      });

      this.initEditor();

      // 确保已经载入
      setTimeout(() => {
        editorOnload();
      });
    });
  }
  componentWillUnmount() {
    this.editor.destroy();
  }
  getContent() {
    return this.editor.getValue();
  }
  setContent(v) {
    this.editor.setValue(v);
  }
  initEditor() {
    const textbox = this.textarea;

    this.editor = new this.Simditor({
      textarea: window.jquery(textbox),
      upload: false,
      toolbarFloat: false,
      toolbar: [
        'title',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'fontScale',
        'color',
        'ol',
        'ul',
        'blockquote',
        // 'code',
        'table',
        // 'link',
        'hr',
        'indent',
        'outdent',
        'alignment'
      ],
      allowedTags: this.htmlTags,
      allowedAttributes: RichEditor.genAttr(this.htmlTags),
      allowedStyles: RichEditor.genStyle(this.htmlTags)
    });
    this.editor.on('valuechanged', () => {
      this.props.change(this.getContent());
    });
  }
  showModal() {
    this.setState({
      isFull: true
    });
    document.body.style.overflow = 'hidden';

    // 编辑器全屏
    window.jquery('.simditor').addClass('full');
  }
  hideModal() {
    this.setState({
      isFull: false
    });
    document.body.style.overflow = 'auto';

    window.jquery('.simditor').removeClass('full');
  }
  render() {
    const { isFull, isLoading } = this.state;

    if (isLoading) {
      return (
        <Loading />
      );
    }
    return (
      <div>
        <div
          onClick={this.hideModal}
          className={isFull ? 'full editor-modal' : 'editor-modal'}
        />
        <textarea
          ref={(item) => {
            this.textarea = item;
          }}
        />
      </div>
    );
  }
}

RichEditor.propTypes = {
  change: PropTypes.func,
  editorOnload: PropTypes.func,
};

RichEditor.defaultProps = {
  change: () => {},
  editorOnload: () => {}
};

export default RichEditor;
