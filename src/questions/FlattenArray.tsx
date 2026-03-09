type ArrayValue = unknown | Array<ArrayValue>;

export default function flatten(value: Array<ArrayValue>): Array<unknown> {
  const res = [];
  // const res = value.flat(Infinity)
  for (const i of value) {
    if (Array.isArray(i)) {
      res.push(...flatten(i));
    } else {
      res.push(i);
    }
  }
  return res;
}
