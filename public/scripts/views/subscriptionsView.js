define([
	"jquery",
	"underscore",
	"backbone",
	"events",
	"views/subscriptionBlockView",
	"models/subscription",
	"text!../../templates/subscription-list-template.html",

	], function (	$, _, Backbone, vent,
					SubscriptionBlockView, Subscription,
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
				var subscription1 = new Subscription({ 
					name: "Pandora",
					url: "http://www.pandora.com",
					imageUrl: 'http://www.sec.gov/Archives/edgar/data/1230276/000119312511032963/g119636g94a15.jpg',
					cost: "$3.99",
					lastUsed: "6 days ago",
					startDate: "May 11, 2013"
				});

				for (var i = 0; i < 4; i++) { 
					var testingBlock = new SubscriptionBlockView({ model: subscription1 });
					$(".list-content", this.el).append( testingBlock.render().el );
				}
				/*				   */

				return this;
			},

		});

		return SubscriptionsView;
	}
);



