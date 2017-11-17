const search = require('./search');

const users = process.argv.slice(2);
if (users.length) {
  users.forEach(user => {
    search.get(user);
  });
} else {
  console.error('You need enter a username, if you want to get info about Twitter user.');
}
