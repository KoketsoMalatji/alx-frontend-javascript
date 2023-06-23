export default function createInt8TypedArray(length, position, val) {
  const lenArray = length - 1;
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);

  if (position > lenArray) {
    throw Error('Position outside range');
  }
  view[position] = val;
  const dataView = new DataView(buffer);
  return dataView;
}
