// Include React
var React = require("react");

// Here we include all of the sub-components
var Search = require("./children/search");
var Results = require("./children/results");
var Saved = require("./children/saved");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({});

// Export the component back for use in other files
module.exports = Main;