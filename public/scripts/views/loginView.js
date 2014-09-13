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
			},

			initialize: function () {
			},

			render: function () { 
				$(this.el).html( this.template() );

				return this;
			},
		});

		return LoginDialogView;
	}
);

