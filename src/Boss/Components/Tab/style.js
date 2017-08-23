export default {
  container: {
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    overflow: 'hidden'
  },
  containerHead: {
    display: 'inline-block',
    width: '100%',
    borderBottom: '1px solid #999',
    boxSizing: 'border-box',
    overflow: 'hidden'
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
  tabActive: {
    borderBottom: '2px solid rgb(65, 150, 252)',
    color: 'rgb(65, 150, 252)'
  },
  leftTabActive: {
    borderLeft: '2px solid rgb(65, 150, 252)',
    color: 'rgb(65, 150, 252)',
    backgroundColor: '#f5f5f5'
  },
  tabContent: {
    display: 'inline-block',
    width: '100%',
    minHeight: '300px',
    boxSizing: 'border-box',
    padding: '10px'
  }
};
