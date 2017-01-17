// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');
var Key = require("../../../key.js");


var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(location) {
    var article  = "cats";
    var startYear = "19500101";
    var endYear = "20170101";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + article +"&begin_date="+ startYear +"&end_date="+endYear+ "&api-key=" + Key.NYT_API;
    
    return axios.get(queryURL).then(function(response) {
      console.log(response.data.response.docs);
    });
  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory: function(location) {
    return axios.post("/api", { location: location });
  }
};

// We export the API helper
module.exports = helper;