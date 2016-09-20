"use strict";

(function(app) {
	var RouterModule = ng.router.RouterModule;
	var appRoutes = [
		{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },  
        { path: 'heroes', component: app.HeroesComponent },
		{ path: 'dashboard', component: app.DashboardComponent},
		{ path: 'detail/:id', component: app.HeroDetailComponent },
    ];

	app.routing = RouterModule.forRoot(appRoutes, { useHash: true });

})(window.app || (window.app = {}));
