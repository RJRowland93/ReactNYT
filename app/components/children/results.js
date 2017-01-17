// Include React
var React = require("react");

// Creating the Results component
class Results extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div class="panel panel-default">
			  <div class="panel-heading">
			    <h3 class="panel-title">Search Results</h3>
			  </div>
			  <div class="panel-body">
			    Panel content
			  </div>
			</div>
		);
	}
}

module.exports = Results;