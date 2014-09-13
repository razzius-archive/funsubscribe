define([
	"jquery",
	"underscore",
	"backbone",
	"events",

	], function (	$, _, Backbone, vent,
					HeaderView
				) { 
		var Router = Backbone.Router.extend({
			routes: { 
			},

			initialize: function () { 
				$("body").append("<strong>Hi</strong>");
			},
			
		});

		return Router;
	}
);
