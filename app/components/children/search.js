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
					<div className="row">

						<div className="form-group">
					      <label for="formGroupExampleInput">Example label</label>
					      <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
					    </div>

					    <div class="form-group">
						  <label for="startYear">Start Year (Optional):</label>
						  <input type="text" class="form-control" id="startYear" />
						</div>

						<div class="form-group">
						  <label for="endYear">End Year (Optional):</label>
					      <input type="text" class="form-control" id="endYear" />
						</div>

						<button className="btn btn-primary center" type="submit">
		                Submit
		                </button>

				    </div>				
				</form>
			</div>
		);
	}
}

module.exports = Search;