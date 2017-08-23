const MAX_ARRAY_LENGTH = (2 << 22) - 1;

export function getType(item) {
  const fulltype = Object.prototype.toString.call(item);

  return fulltype.substring(8, fulltype.indexOf(']')).toLowerCase();
}

export function isArray(item) {
  return getType(item) === 'array';
}

export function isString(item) {
  return getType(item) === 'string';
}

export function isNumber(item) {
  return getType(item) === 'number';
}

export function isLikeNumber(item) {
  return isString(item) && item !== '' && isNumber(+item);
}

export function isFunction(item) {
  return getType(item) === 'function';
}

export function isObject(item) {
  return Object.prototype.toString.call(item).toLowerCase().indexOf('object') > -1;
}

export function isLikeArray(obj) {
  const len = obj.length;
  return isNumber(len) && len >= 0 && len <= MAX_ARRAY_LENGTH;
}

export function noop() {}

export function genRandomId() {
  return `${+new Date()}${(Math.random() * 1000000).toFixed(0)}`;
}
