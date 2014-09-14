define([
	"jquery",
	"underscore",
	"backbone",
	"events",
	"text!../../templates/single-suggestion-template.html",

	], function (	$, _, Backbone, vent,
					singleSuggestionTemplate
				) {

		var SingleSuggestionView = Backbone.View.extend({
			template: _.template( singleSuggestionTemplate ),

			events: {
			},

			initialize: function () {
			},

			render: function () {
				$(this.el).html( this.template( this.model.toJSON() ) );
                console.log("jiaosjdf");
				return this;
			}
		});

		return SingleSuggestionView;
	}
);



