define([
	"jquery",
	"underscore",
	"backbone",
	"events",
	"models/subscription",

	], function ( $, _, Backbone, vent, Subscription ) { 
		var SubscriptionList = Backbone.Collection.extend({ 
			model: Subscription,

			//idAttribute: "", 

			initialize: function () { 
			},

			url: function () { 
			},
			
		});

		return SubscriptionList;
	}
);
