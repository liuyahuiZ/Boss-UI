export default {
  box: {
    width: '100%',
    height: '100%',
  },
  loadContainer: {
    display: 'block',
    boxSizing: 'border-box',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '9999',
  },
  boxbg: {
    display: 'block',
    boxSizing: 'border-box',
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: '999',
    top: '0',
    left: '0',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  rightX: {
    position: 'absolute',
    right: '10px',
    top: '5px',
    cursor: 'pointer'
  },
  container: {
    // display: 'inline-block',
    // padding: '10px',
    // margin: '10px 10px'
  }
};
