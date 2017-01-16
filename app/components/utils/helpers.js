// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');
var Key = require("../../../key.js");


// Helper Functions (in this case the only one is runQuery)
var helpers = {

	runQuery: function(searchTerm,startDate,endDate){

		console.log(searchTerm);
		console.log(startDate);
		console.log(endDate);

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + Key.NYT_API + "&q=" + searchTerm + "&begin_date=" + startDate + "&end_date=" + endDate;

		return axios.get(queryURL)
			.then(function(response){

				console.log(response);
				//parse through response object, add to object
				var sendThisData =[];
				for(var i=0;i<response.data.response.docs.length;i++){
					//sendThisData+= [response.data.response.docs[i].headline.main + response.data.response.docs[i].web_url];
					var buildMeAnObject = {
						title:response.data.response.docs[i].headline.main,
						url:response.data.response.docs[i].web_url
					};
					//var stringifyObject = JSON.stringify(buildMeAnObject);
					//sendThisData.push(stringifyObject);
					
					sendThisData.push(buildMeAnObject);
				}
				//return JSON.stringify(response);
				console.log(sendThisData.length);
				return sendThisData;
		})

	}

}


// We export the helpers function 
module.exports = helpers;