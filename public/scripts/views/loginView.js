define([
	"jquery",
	"underscore",
	"backbone",
	"events",
	//"text!../../templates/login-dialog-template.html",

	], function (	$, _, Backbone, vent
				) { 

		var LoginDialogView = Backbone.View.extend({ 
			//template: _.template( loginTemplate ),

			className: "dialog",

			events: { 
				"click .login": "loadSubscriptions",
			},

			initialize: function () {
			},

			render: function () { 
				$(this.el).html( this.template() );

				return this;
			},

			loadSubscriptions: function () { 
				console.log("clicked");
				$(".login-email").length() == 0 || $(".login-email").length() == 0 ? vent.trigger( "loginSubmit" ) : alert("Please enter your email and password") ;
				console.log($(".login-email").length());
			}
		});

		return LoginDialogView;
	}
);

