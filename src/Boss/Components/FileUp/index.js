import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './style';

class FileUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultSrc: this.props.defaultSrc
    };
    this.change = this.change.bind(this);
    this.EditImg = this.EditImg.bind(this);
  }
  change() {
    const file = this.$$file.files[0];
    const self = this;
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = function (event) {
        self.setState({ defaultSrc: event.target.result });
      };
      const type = file.type.split('/');
      if (file.size < 200000) {
        self.updateFile(file, type[1]);
      } else {
        self.compress(self.$$img, 65, type[1]).then((result) => {
          const newfile = self.convertBase64UrlToBlob(result.src);
          self.updateFile(newfile, type[1]);
        });
      }
    }
  }
  updateFile(file, type) {
    console.log(this);
    console.log(file, type);
  }
  // 转file
  convertBase64UrlToBlob(urlData) {
    console.log(this);
    const bytes = window.atob(urlData.split(',')[1]);        // 去掉url的头，并转换为byte
    // 处理异常,将ascii码小于0的转换为大于0
    const ab = new ArrayBuffer(bytes.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg' });
  }
  // 压缩 图片
  compress(sourceImgObj, quality, outputFormat) {
    console.log(this);
    return new Promise((resolve) => {
      let mimeType = 'image/jpeg';
      if (typeof outputFormat !== 'undefined' && outputFormat === 'png') {
        mimeType = 'image/png';
      }

      const cvs = document.createElement('canvas');
      const drawidth = sourceImgObj.naturalWidth;
      const draheight = sourceImgObj.naturalHeight;
      const scale = drawidth / draheight;
      if (drawidth > draheight) {
        cvs.width = 900;
        cvs.height = parseInt(cvs.width / scale, 10);
      } else {
        cvs.height = 900;
        cvs.width = parseInt(cvs.height * scale, 10);
      }
      const ctx = cvs.getContext('2d').drawImage(sourceImgObj, 0, 0, drawidth, draheight, 0, 0, cvs.width, cvs.height);
      const newImageData = ctx.toDataURL(mimeType, quality / 100);
      const resultImageObj = new Image();
      resultImageObj.src = newImageData;
      resolve(resultImageObj);
    });
  }
  // 点击头像修改
  EditImg() {
    this.$$file.click();
  }
  render() {
    const { defaultSrc } = this.state;
    return (
      <div>
        <img style={styles.img} src={defaultSrc} onClick={this.EditImg} ref={(r) => { this.$$img = r; }} alt="点击选择图片" />
        <div style={styles.addFile} onClick={this.EditImg}>+</div>
        <input style={styles.hideenInput} type="file" accept="image/*" onChange={this.change} ref={(r) => { this.$$file = r; }} />
      </div>
    );
  }
}
FileUp.propTypes = {
  defaultSrc: PropTypes.string,
};

FileUp.defaultProps = {
  defaultSrc: ''
};

export default FileUp;
