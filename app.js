const search = require('./search');

const users = process.argv.slice(2);
users.forEach(user => {
  search.get(user);
});
