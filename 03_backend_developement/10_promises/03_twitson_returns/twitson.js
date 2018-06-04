const fetch = require("node-fetch");
const OAuth = require("oauth");

const oauth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET,
  "1.0A", null, "HMAC-SHA1"
);

const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?count=10&screen_name=";

function getTwitter(twitterProfile){
  oauth.get(
    url + `${twitterProfile}`,
    process.env.TWITTER_ACCESS_TOKEN,
    process.env.TWITTER_ACCESS_SECRET,
    function (error, data){
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
      console.log(uri);

      return fetch(
        uri,
        {
          headers: { "Authorization": auth },
          method: "GET"
        }
      )
      .then((response) => response.json());
      // .catch((error) => {
      //   console.warn(error);
      // })
      // .then((result) => {
      //   console.log("sentiments", result.sentiment);
      //   return result.sentiment;
      // })
      // .then((result) => {
      //   console.log("emotions", result.emotions);
      //   return result.emotions;
      // })
    }
  );
}

getTwitter("neiltyson")
  .then(watsonResult => {
    console.log("sentiments", watsonResult.sentiment);
    console.log("emotions", watsonResult.emotion);
  });
