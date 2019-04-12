// Async patterns: callbacks, promises, async/await
const delay = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchUser(id) {
  await delay(100);
  return { id, name: "User " + id };
}

(async () => {
  const users = await Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)]);
  users.forEach((u) => console.log(u.name));
})();
