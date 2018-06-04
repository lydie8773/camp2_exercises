const fetch = require("node-fetch");
const OAuth = require("oauth");

const oauth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET,
  "1.0A", null, "HMAC-SHA1"
);

const twitter_path = "https://api.twitter.com/1.1/statuses/user_timeline.json?count=10&screen_name=";


function twitson_oauth(profile){
  return new Promise(function(resolve, reject){
    oauth.get(
      twitter_path + `${profile}`,

      process.env.TWITTER_ACCESS_TOKEN,
      process.env.TWITTER_ACCESS_SECRET,
      function(error, data){
        const tweets = JSON.parse(data);

        const texts = tweets.map(function(tweet){
          return tweet.text;
        }).join("\n\n");

        const watson_useranme = process.env.WATSON_USERNAME;
        const watson_password = process.env.WATSON_KEY;
        const watson_url = process.env.WATSON_URL;
        const auth = "Basic " + new Buffer(watson_useranme + ":" + watson_password).toString("base64");

        const watson_path = encodeURI(watson_url + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + texts);

        return fetch(
          watson_path,
          {
            headers: { "Authorization": auth },
            method: "GET"
          }
        )
        .catch((error) => {
          reject(error);
        })
        .then((response) => {
          resolve(response.json());
        });
      }
    )
  })
};


twitson_oauth("neiltyson")
  .then((result) => {
    console.log("sentiments", result.sentiment);
    console.log("emotions", result.emotion);
  });
