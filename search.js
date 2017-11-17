const Twit = require('twit');
const api = require('./api.json');
const http = require('http');

const T = new Twit({
  consumer_key: api.consumer_key,
  consumer_secret: api.consumer_secret,
  access_token: api.access_token,
  access_token_secret: api.access_token_secret
})

function printError(error) {
  console.log(error.message);
}

function printMessage(username, tweet) {
  const tweetText = tweet[0].text;
  const tweetCreatedAt = tweet[0].created_at;
  const message = `The latest ${username} tweet is ${tweetText}, and was created at ${tweetCreatedAt}.`;
  console.log(message);
}

function get(username) {
  T.get('statuses/user_timeline', { screen_name: username, count: 1 },  function (err, data, response) {
    if (response.statusCode === 200) {
      printMessage(username, data);
    } else {
      const message = `There was an error getting the tweet for ${username} (${http.STATUS_CODES[response.statusCode]})`;
      const statusCodeError = new Error(message);
      printError(statusCodeError);
    }
  })
}

module.exports.get = get;
