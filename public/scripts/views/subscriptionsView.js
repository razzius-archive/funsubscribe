define([
	"jquery",
	"underscore",
	"backbone",
	"events",
	"views/subscriptionBlockView",
	"views/singleSuggestionView",
	"models/subscription",
	"models/service",
	"text!../../templates/subscription-list-template.html",
    "bootstrap"

	], function (	$, _, Backbone, vent,
					SubscriptionBlockView, SingleSuggestionView, Subscription, Service,
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
                var subList = [];

                subList.push( new Subscription({
					name: "Pandora One",
                    description: "A kind of radio – stations that play only music you like.",
					url: "http://www.pandora.com",
					imageUrl: '/assets/images/pandora_logo.png',
					cost: 3.99,
					lastUsed: "6 days ago",
					startDate: "May 11, 2013",
					daysLeft: "23",
					type: "music",
					active: 1,
					status: 'Active'
				}));

                subList.push( new Subscription({
					name: "PennCycle Basic",
                    description: "The University of Pennsylvania's one and only bike share.",
					url: "http://www.penncycle.org",
					imageUrl: '/assets/images/penncycle_logo.png',     // TODO 
					cost: 20.00,
					lastUsed: "2 days ago",
					startDate: "August 29, 2014",
					daysLeft: "23",
					type: "Utility",
					active: 0,
					status: 'Active'
				}));


                subList.push( new Subscription({
					name: "Netflix",
                    description: "Watch TV shows & movies anytime, anywhere.",
					url: "http://www.netflix.com",
					imageUrl: '/assets/images/netflix_logo.png',
					cost: 7.99,
					lastUsed: "Yesterday",
					startDate: "January 29, 2013",
					daysLeft: "18",
					type: "TV/Movies",
					active: 1,
					status: 'Active'
				}));

                subList.push( new Subscription({
					name: "SoundCloud Pro",
                    description: "Hear the world's sounds. Count plays, likes, comments, and downloads.",
					url: "http://www.soundcloud.com",
					imageUrl: '/assets/images/soundcloud_logo.png',     // TODO
					cost: 6.00,
					lastUsed: "2 months go",
					startDate: "May 9, 2012",
					daysLeft: "-",
					type: "Music",
					active: 1,
					status: 'FUNSUBSCRIBED'
				}));

                subList.push( new Subscription({
					name: "Lynda Premium",
                    description: "What do you want to learn today?",
					url: "http://www.lynda.com",
					imageUrl: '/assets/images/lynda_logo.png',     // TODO 
					cost: 25.00,
					lastUsed: "9 months ago",
					startDate: "August 1, 2013",
					daysLeft: "-",
					type: "Education",
					active: 0,
					status: 'Inactive'
				}));


                var totalFee = 0;
				for (var i in subList) {
                    var sub = subList[i]
					var testingBlock = new SubscriptionBlockView({ model: sub });
					$(".list-content", this.el).append( testingBlock.render().el );
                    if (sub.get("status") == "Active") { 
                        totalFee += sub.get("cost");
                    }
				}
                $("#monthly-cost", this.el).text(totalFee.toFixed(2));
				/*				   */

                var sugList = [];
                sugList.push( new Service({ 
                    name: "Hulu Plus",
                    description: "Watch TV and movies via Xbox, PS3, Wii and more.",
                    url: "http://www.hulu.com/plus",
                    cost: 7.99,
					imageUrl: '/assets/images/hulu_logo.png',     // TODO 
                    type: "TV/Movies",
                }));
                sugList.push( new Service({ 
                    name: "Spotify Premium",
                    description: "Music for everyone.",
                    url: "http://www.spotify.com/us",
                    cost: 9.99,
					imageUrl: '/assets/images/spotify_logo.png',     // TODO 
                    type: "Music",
                }));
                sugList.push( new Service({ 
                    name: "Google Play Music",
                    description: "Google Play Music makes it easy to listen to the music you love on Android, iOS, and the web.",
                    url: "http://www.play.google.com/music",
                    cost: 9.99,
					imageUrl: '/assets/images/play_logo.png',     // TODO 
                    type: "Music",
                }));

                for (i in sugList) { 
                    var sug = sugList[i];
                    var template = _.template( 
                        "<div class='suggestion suggestion" + i + "' data-toggle='tooltip' data-placement='left' title='<%= description %>'><img src='<%= imageUrl %>'></div>" 
                    );
                    $(".suggestions-holder", this.el).append( template( sug.toJSON() ) );
                }
                $(".suggestions-holder > .suggestion", this.el).on( "click", function () { 
                    var i = $(this).attr("class").replace("suggestion suggestion", "");
                    var dialogView = new SingleSuggestionView({ model: sugList[i] });
                    $(".dialog-holder").html( dialogView.render().el );
                    $("#single-subscription-dialog").modal("show");		// TODO
                });
				return this;
			},

		});

		return SubscriptionsView;
	}
);

