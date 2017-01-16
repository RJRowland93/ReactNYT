// Include React
var React = require("react");

// Creating the Results component
export default class Saved extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div class="panel panel-default">
			  <div class="panel-heading">
			    <h3 class="panel-title">Saved Articles</h3>
			  </div>
			  <div class="panel-body">
			    Panel content
			  </div>
			</div>
		);
	}
}

module.exports = Saved;