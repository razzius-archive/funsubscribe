/*global require*/
'use strict';

require.config({
    urlArgs: "bust=" + (new Date()).getTime(),  // TODO DEVELOPMENT ONLY, prevents caching

    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },

		jqueryui: { 
			exports: "$",
			deps: "jquery"
		}
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
		text: '../bower_components/requirejs-text/text',
		jqueryui: '../bower_components/jquery-ui/jquery-ui',
    }
});

require([
    'app'
], function (app) {
	app.start();
});
