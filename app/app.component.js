"use strict";

(function (app) {
    app.AppComponent = ng.core.Component({
        selector: 'my-app',
        template:
            '<h1>{{title}}</h1>' +
			'<a routerLink="/heroes">Heroes</a>' +
   			'<router-outlet></router-outlet>'
    })
    .Class({
        constructor: [function() {
             this.title = 'Tour of Heroes';
        }]
    });

})(window.app || (window.app = {}));
