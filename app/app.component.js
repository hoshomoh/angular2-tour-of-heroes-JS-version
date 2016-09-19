"use strict";

(function (app) {
    app.AppComponent = ng.core.Component({
        selector: 'my-app',
        template:
            '<h1>{{title}}</h1>' +
    		'<my-heroes></my-heroes>'
    })
    .Class({
        constructor: [function() {
            
        }]
    });

})(window.app || (window.app = {}));
