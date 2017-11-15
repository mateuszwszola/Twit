const https = require('https');

function printError(error) {
  console.error(error.message);
}

function printTweet(tweet) {
  // print the latest user tweet
}

function get(username) {
  // Connect to the API URL (https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=1)
  const request = https.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2`, response => {
    console.log(response);
  });
}

module.exports.get = get;
