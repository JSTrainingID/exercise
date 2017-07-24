// @flow
function add(x?: number, y?: number): number {
  return x + y || 0;
}

export default add;
