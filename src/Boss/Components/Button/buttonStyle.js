export default {
  button: {
    boxSizing: 'border-box',
    display: 'inline-block',

    textDecoration: 'none',
    margin: 0,
    padding: '0 3px',
    outline: 'none',
    position: 'relative',
    zIndex: 1,
    cursor: 'pointer',
    fontSize: '16px',
    height: '32px',
    minWidth: '140px',
    borderRadius: '3px',
    backgroundColor: '#fff',
    color: '#333',
    border: '1px solid #aaa',
  },
  buttonHover: {
    opacity: '0.9'
  },
  link: {
    fontSize: '16px',
    border: 'none',
    background: 'none',
    color: '#4196fd',
    minWidth: 0,
    lineHeight: 1,
    height: '16px',
    margin: '0'
  },

  linkHover: {
    opacity: '0.8', textDecoration: 'underline'
  },
  small: {
    fontSize: '14px',
    height: '32px',
    minWidth: '60px',
    borderRadius: '4px'
  },
  large: {
    height: '46px',
    minWidth: '140px',
    borderRadius: '4px'
  },
  alldisabled: {
    cursor: 'not-allowed'
  }
};
