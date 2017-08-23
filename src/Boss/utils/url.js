export default function getUrlParam(url = window.location.href) {
  const paramString = url.substr(url.indexOf('?') + 1);
  return paramString.split('&').reduce((map, param) => {
    map[param.split('=')[0]] = param.split('=')[1];
    return map;
  }, {});
}
