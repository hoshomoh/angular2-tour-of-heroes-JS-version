"use strict";

(function(app) {
    app.AppModule =
        ng.core.NgModule({
            imports: [
                ng.platformBrowser.BrowserModule,
                ng.forms.FormsModule,
                app.routing
            ],
            declarations: [
                app.AppComponent,
                app.DashboardComponent,
                app.HeroesComponent,
                app.HeroDetailComponent
            ],
            bootstrap: [ app.AppComponent ]
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));
