var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Service Schema
 */


var ServiceSchema = new Schema({
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

var PromotionSchema = new Schema({
	name: {
		'type': String,
		'trim': true,
		'required': 'Service name cannot be blank'
	},
	service: {
		'type': Schema.ObjectId,
		'ref': 'ServiceSchema'
	}
});

var SubscriptionSchema;

var Service = mongoose.model('Service', ServiceSchema, 'Service');
// more models definitions

module.exports = {
	Service: Service
};
