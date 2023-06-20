export default function appendToEachArrayValue(array, appendString) {
  let res = [];
  for (let val of array) {
    res.push(appendString + val);
  }

  return res;
}
