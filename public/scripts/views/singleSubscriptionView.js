define([
	"jquery",
	"underscore",
	"backbone",
	"events",
	"text!../../templates/single-subscription-view.html",

	], function (	$, _, Backbone, vent,
					singleSubscriptionTemplate
				) {

		var SingleSubscriptionView = Backbone.View.extend({
			template: _.template( singleSubscriptionTemplate ),

			events: {
			},

			initialize: function () {
			},

			render: function () {
				$(this.el).html( this.template( this.model.toJSON() ) );
				return this;
			}
		});

		return SingleSubscriptionView;
	}
);



