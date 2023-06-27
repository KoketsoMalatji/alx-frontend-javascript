export default function cleanSet(set, startString) {
  let obj = '';
  if (!startString || !startString.length) return obj;
  for (const el of set) { if (el && el.startsWith(startString)) obj += `${el.slice(startString.length)}-`; }
  return obj.slice(0, obj.length - 1);
}
