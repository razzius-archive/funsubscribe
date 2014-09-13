define([
	"jquery",
	"underscore",
	"backbone",
	"events",
	"models/user",

	], function ( $, _, Backbone, vent, User ) { 
		var UserList = Backbone.Collection.extend({ 
			model: User,

			//idAttribute: "", 

			initialize: function () { 
			},

			url: function () { 
			},
			
		});

		return UserList;
	}
);
