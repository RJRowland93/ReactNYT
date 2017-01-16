// Include React
var React = require("react");

// Creating the Results component
export default class Search extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<form>
				  <div className="form-group">
				    <label for="formGroupExampleInput">Example label</label>
				    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
				  </div>
				  <div className="form-group">
				    <label for="formGroupExampleInput2">Another label</label>
				    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
				  </div>
				  <button className="btn btn-primary" type="submit">
	                Submit
	              </button>
				</form>
			</div>
		);
	}
}

module.exports = Search;