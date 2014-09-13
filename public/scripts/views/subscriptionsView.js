define([
	"jquery",
	"underscore",
	"backbone",
	"events",
	"views/subscriptionBlockView",
	"text!../../templates/subscription-list-template.html",

	], function (	$, _, Backbone, vent,
					SubscriptionBlockView,
					subscriptionListTemplate
				) { 

		var SubscriptionsView = Backbone.View.extend({ 
			template: _.template( subscriptionListTemplate ),

			// className:

			events: { 
			},

			initialize: function () {
			},

			render: function () { 
				$(this.el).html( this.template() );
				/* Testing for now */

				var testingBlock = new SubscriptionBlockView();
				var testingBlock2 = new SubscriptionBlockView();
				var testingBlock3 = new SubscriptionBlockView();

				$(".list-content", this.el).append( testingBlock.render().el );
				$(".list-content", this.el).append( testingBlock2.render().el );
				$(".list-content", this.el).append( testingBlock3.render().el );
				/*				   */

				return this;
			},

		});

		return SubscriptionsView;
	}
);



