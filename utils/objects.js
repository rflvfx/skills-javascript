// Object utilities
const deepClone = (obj) => structuredClone(obj);
const pick = (obj, keys) =>
  Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));
const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
module.exports = { deepClone, pick, omit };
