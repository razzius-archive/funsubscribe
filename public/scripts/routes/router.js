define([
	"jquery",
	"underscore",
	"backbone",
	"events",
	"../views/headerView",

	], function (	$, _, Backbone, vent,
					HeaderView
				) { 
		var Router = Backbone.Router.extend({
			routes: { 
			},

			initialize: function () { 
				this.HeaderView = new HeaderView();
				$("#header-holder").html( this.HeaderView.render.el );
				console.log($("#header-holder"));
			},
			
		});

		return Router;
	}
);
