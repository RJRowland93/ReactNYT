// Include React
var React = require("react");

// Here we include all of the sub-components
var Search = require("./children/search");
var Results = require("./children/results");
var Saved = require("./children/saved");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
export default class Main extends React.Component {
	constructor() {
		super();
	}
	  // Here we render the function
	  render() {
	  	return (
	  		<div className="container">
		        <div className="row">
		          <div className="jumbotron">
		            <h2 className="text-center"></h2>
		            <p className="text-center">
		              <em></em>
		            </p>
		          </div>
		        </div>

		       	<div className="row">
		       		<Search />
		       	</div>

		       	<div className="row">
		       		<Results />
		       	</div>

		       	<div className="row">
		       		<Saved />
		       	</div>	

		      </div>
	  		);
	  	}
	}

module.exports = Main;
 