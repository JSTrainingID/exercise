// @flow

function sum(...numbers?: Array<number>): number {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result || 0;
}

export default sum;
