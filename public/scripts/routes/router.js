define([
	"jquery",
	"underscore",
	"backbone",
	"events",
	"views/splashView",

	], function (	$, _, Backbone, vent,
					SplashView
				) { 
		var Router = Backbone.Router.extend({
			routes: { 
				"": "loadIndex",
			},

			initialize: function () { 
				// get cookie to check if user session is set
			},

			loadIndex: function () { 
				this.clearBigView();
				this.bigView = new SplashView();

				this.renderBigView();
			},

			clearBigView: function () { 
				this.bigView ? this.bigView.remove() : null;
			},
			
			renderBigView: function () { 
				$("#view-holder").html( this.bigView.render().el );
			}
		});

		return Router;
	}
);
