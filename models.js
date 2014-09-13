var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var UserSchema = new Schema({
	firstName: { 
		"type": String,
		"trim": true,
		"required": "First name cannot be blank",
	},
	lastName: { 
		"type": String,
		"trim": true,
		"required": "Last name cannot be blank",
	},
});

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
	cost: { 
		'type': Number,
		'get': getPrice,
		'set': setPrice,
	},
	interval: { 
		"type": String, 	// monthly, bi-monthly, etc.
		"trim": true,
	}
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
	description: { 
		'type': String
		'trim': true,
	}
});

var SubscriptionSchema = new Schema({ 
	user: { 
		'type': Schema.ObjectId,
		'ref': 'UserSchema',
	},
	service: { 
		'type': Schema.ObjectId,
		'ref': "ServiceSchema"
	},
	dateStarted: { 
		"type": Date,
		"default": Date.now,
	}
});

var User = mongoose.model('User', UserSchema, 'User');
var Service = mongoose.model('Service', ServiceSchema, 'Service');
var Subscription = mongoose.model('Subscription', SubscriptionSchema, 'Subscription');
var Promotion = mongoose.model('Promotion', PromotionSchema, 'Promotion');
// more models definitions


/*
 * Misc. Functions
*/
function getPrice(num){
    return (num/100).toFixed(2);
}

function setPrice(num){
    return num*100;
}

module.exports = {
	User: User
	Service: Service
	Subscription: Subscription
	Promotion: Promotion
};
