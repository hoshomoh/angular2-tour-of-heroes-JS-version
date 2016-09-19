"use strict";

(function(app) {
	var RouterModule = ng.router.RouterModule;
	var appRoutes = [
		// This is an hack to solve the ```cannot match any route error for '/'```. 
		{ path: '', component: app.HomeComponent },  
        { path: 'heroes', component: app.HeroesComponent }
    ];

	app.routing = RouterModule.forRoot(appRoutes, { useHash: true });

})(window.app || (window.app = {}));
