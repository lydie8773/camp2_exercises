const request = require("request");
const OAuth = require("oauth");

const oauth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET,
  "1.0A", null, "HMAC-SHA1"
);

const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";

oauth.get(
  url + "shiphub",
  process.env.TWITTER_ACCESS_TOKEN,
  process.env.TWITTER_ACCESS_SECRET,
  function (error, data){
    console.log(data);
    const tweets = JSON.parse(data);

    const texts = tweets.map(function(tweet){
      return tweet.text;
    }).join("\n\n");
    console.log(texts);

    const watson_useranme = process.env.WATSON_USERNAME;
    const watson_password = process.env.WATSON_KEY;
    const url = process.env.WATSON_URL;
    const auth = "Basic " + new Buffer(watson_useranme + ":" + watson_password).toString("base64");

    const uri = encodeURI(url + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + texts);

    request(
      {
        url: uri,
        headers: { "Authorization": auth },
        method: "GET"
      },
      function (error, response, labelbody) {
        const label = JSON.parse(body).sentiment.document.label;
        console.log(label);
      }
    );
  }
);
