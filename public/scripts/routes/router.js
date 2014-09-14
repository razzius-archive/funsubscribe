define([
	"jquery",
	"underscore",
	"backbone",
	"events",
	"views/splashView",
	"views/subscriptionsView",

	], function (	$, _, Backbone, vent,
					SplashView, SubscriptionsView
				) {
		var Router = Backbone.Router.extend({
			routes: {
				"": "loadIndex",
				// "login": "loadLoginDialog",
				"subscriptions": "loadSubscriptions"
			},

			initialize: function () {
				// get cookie to check if user session is set
				var router = this;
				this.listenTo( vent, "loginSubmit", function () {
					router.navigate( "subscriptions", { trigger: true } );
					$("#register-modal").modal("hide");
					$("#login-modal").modal("hide");
					$(".modal-backdrop").remove();
				});
			},

			loadIndex: function () {
				this.clearBigView();
				this.bigView = new SplashView();

				this.renderBigView();
				$('#mail').animate({opacity:1}, 2000);
			},

			loadSubscriptions: function () {
				this.clearBigView();
				this.bigView = new SubscriptionsView();

				this.renderBigView();
			},

			clearBigView: function () {
				this.bigView ? this.bigView.remove() : null;
			},

			renderBigView: function () {
				$("#view-holder").html( this.bigView.render().el );
			},

			renderDialogView: function () {		// not necessary because of bootstrap
			}

		});

		return Router;
	}
);
