export default {
  container: {
    display: 'block',
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  panel: {
    float: 'left',
    display: 'block',
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #d9d9d9',
  },
  panelHeader: {
    float: 'left',
    position: 'relative',
    padding: '5px',
    cursor: 'pointer',
    width: '100%',
    zIndex: '10',
    backgroundColor: '#f5f5f5',
  },
  show: {
    width: '100%',
    display: 'inline-block',
    maxHeight: '50px'
  },
  hide: {
    maxHeight: '0px'
  },
  panelContent: {
    float: 'left',
    position: 'relative',
    padding: '5px',
    width: '100%',
    zIndex: '8'
  },
  icon: {
    display: 'inline-block',
    width: '25px',
    height: '25px',
    textAlign: 'center',
    lineHeight: '25px',
    padding: '0'
  }
};
