/**
 * Created by oshomo.oforomeh on 16/09/2016.
 */
(function(app) {
    app.AppModule =
        ng.core.NgModule({
            imports: [
                ng.platformBrowser.BrowserModule,
                ng.forms.FormsModule
            ],
            declarations: [ app.AppComponent ],
            bootstrap: [ app.AppComponent ]
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));
