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
			},

			initialize: function () {
			},

			render: function () { 
				$(this.el).html( this.template() );

				return this;
			},
		});

		return SplashView;
	}
);

