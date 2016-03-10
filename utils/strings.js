// String utilities
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const slugify = (s) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
const truncate = (s, n) => (s.length > n ? s.slice(0, n - 1) + "…" : s);
module.exports = { capitalize, slugify, truncate };
