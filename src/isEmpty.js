// @flow

function isEmpty<T>(arg: T): boolean {
  if (typeof arg === 'string' || Array.isArray(arg)) {
    return arg.length === 0;
  } else if (typeof arg === 'object' && arg != null) {
    const keys = Object.keys(arg);
    return keys.length === 0;
  }
  return false;
}

export default isEmpty;
