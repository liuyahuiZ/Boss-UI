export default {
  container: {
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    overflow: 'hidden'
  },
  containerHead: {
    display: 'flex',
    boxSizing: 'border-box',
    overflow: 'hidden',
    position: 'absolute',
    bottom: '10px',
    justifyContent: 'center',
    left: '0px'
  },
  floatLeft: {
    float: 'left',
    top: '0px'
  },
  leftHeadWidth: {
    width: '15%',
    borderRight: '1px solid #ddd',
    borderBottom: '0',
    fontSize: '14px',
    maxHeight: '80vh',
    overflow: 'scroll',
  },
  leftContentWidth: {
    width: '85%',
    maxHeight: '80vh',
    overflow: 'scroll',
    padding: '0 1.5rem'
  },
  show: {
    display: 'inline-block',
    width: '100%',
  },
  hide: {
    display: 'none',
  },
  tabItem: {
    display: 'inline-block',
    padding: '10px 20px',
    marginRight: '2px',
    boxSizing: 'border-box',
    cursor: 'pointer'
  },
  dot: {
    display: 'inline-block',
    width: '20px',
    height: '5px',
    backgroundColor: 'rgba(65, 150, 252, 0.6)',
    marginRight: '5px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    borderRadius: '5px'
  },
  dotActive: {
    width: '25px',
    backgroundColor: 'rgba(65, 150, 252, 1)',
  },
  tabActive: {
    color: 'rgb(65, 150, 252)'
  },
  tabContent: {
    overflow: 'hidden',
    boxSizing: 'border-box',
    backgroundColor: '#364d79',
  },
  tabContentItem: {
  }
};
