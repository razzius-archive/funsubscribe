define([
	"jquery",
	"underscore",
	"backbone",
	"events",
	"text!../../templates/splash-template.html",

	], function (	$, _, Backbone, vent,
					splashTemplate
				) {

		var SplashView = Backbone.View.extend({
			template: _.template( splashTemplate ),

			className: "splash-body",

			events: {
				"click .login": "submitLogin",
			},

			initialize: function () {
			},

			render: function () {
				$(this.el).html( this.template() );
				var self = this;
				$(".modal-content input", this.el).keypress(function(e) {
					if (e.which === 13) {
						self.submitLogin();
					}
				});
				return this;
			},

			submitLogin: function () {
				$(".login-email").val() || $(".login-password").val() ? vent.trigger( "loginSubmit" ) : alert("Please enter your email and password") ;		// Make this alert sexier
			}

		});

		return SplashView;
	}
);

