var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Service Schema
 */
var ServiceSchema = new Schema({
	created: {
		'type': Date,
		default: Date.now
	},
	name: {
		'type': String,
		'trim': true,
		'required': 'Service name cannot be blank'
	},
	url: {
		'type': String,
		'trim': true,
		'required': 'Service URL cannot be blank'
	},
});

var Service = mongoose.model('Service', ServiceSchema, 'Service');

module.exports = {
	Service: Service
}
