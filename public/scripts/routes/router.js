define([
	"jquery",
	"underscore",
	"backbone",
	"events",
	"views/splashView",
	"views/loginView",

	], function (	$, _, Backbone, vent,
					SplashView, LoginView
				) { 
		var Router = Backbone.Router.extend({
			routes: { 
				"": "loadIndex",
				"login": "loadLoginDialog",
			},

			initialize: function () { 
				// get cookie to check if user session is set
			},

			loadIndex: function () { 
				this.clearBigView();
				this.bigView = new SplashView();

				this.renderBigView();
			},

			loadLoginDialog: function () { 
				this.dialog = new LoginView();
				this.renderDialogView();
			},

			clearBigView: function () { 
				this.bigView ? this.bigView.remove() : null;
			},
			
			renderBigView: function () { 
				$("#view-holder").html( this.bigView.render().el );
			},

			renderDialogView: function () { 
			},

			renderDialogView: function () { 

			}

		});

		return Router;
	}
);
