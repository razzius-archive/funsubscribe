define([
	"jquery",
	"underscore",
	"backbone",
	"events",
	"models/service",

	], function ( $, _, Backbone, vent, Service ) { 
		var ServiceList = Backbone.Collection.extend({ 
			model: Service,

			//idAttribute: "", 

			initialize: function () { 
			},

			url: function () { 
			},
			
		});

		return ServiceList;
	}
);
