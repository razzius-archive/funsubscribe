
define([
	"jquery",
	"underscore",
	"backbone",
	"events",
	"text!../../templates/subscription-block-template.html",

	], function (	$, _, Backbone, vent,
					subscriptionBlockTemplate
				) {

		var SubscriptionBlockView = Backbone.View.extend({
			template: _.template( subscriptionBlockTemplate ),

			className: "subscription-block",

			events: {
			},

			initialize: function () {
			},

			render: function () {
				$(this.el).html( this.template( this.model.toJSON() ) );

				return this;
			}
		});

		return SubscriptionBlockView;
	}
);



