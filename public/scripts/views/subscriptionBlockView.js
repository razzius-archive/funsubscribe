
define([
	"jquery",
	"underscore",
	"backbone",
	"events",
	"views/singleSubscriptionView",
	"text!../../templates/subscription-block-template.html",
	"bootstrap"

	], function (	$, _, Backbone, vent,
					SingleSubscriptionView,
					subscriptionBlockTemplate, ui
				) {

		var SubscriptionBlockView = Backbone.View.extend({
			template: _.template( subscriptionBlockTemplate ),

			className: "subscription-block",

			events: {
				"click .row": "showDialog"
			},

			initialize: function () {
			},

			render: function () {
				$(this.el).html( this.template( this.model.toJSON() ) );

				var view = this;
				return this;
			},

			showDialog: function () { 
				this.dialogView = new SingleSubscriptionView({ model: this.model });
				$(".dialog-holder").html( this.dialogView.render().el );
				console.log(this.dialogView.render().el);

				console.log("hellooo");
				$("#single-subscription-dialog").modal("show");		// TODO
			}
		});

		return SubscriptionBlockView;
	}
);



