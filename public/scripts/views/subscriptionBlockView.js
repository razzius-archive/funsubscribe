
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
				$(this.el).html( this.template(

				) );

				return this;
			}
		});

		return SubscriptionBlockView;
	}
);



