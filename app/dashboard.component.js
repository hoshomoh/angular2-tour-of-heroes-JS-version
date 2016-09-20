"use strict";

(function (app) {
    app.DashboardComponent = ng.core.Component({
        selector: 'my-dashboard',
		providers: [app.HeroService],
        templateUrl: 'app/dashboard.component.html',
		styleUrls: ['app/dashboard.component.css']
    })
    .Class({
        constructor: [app.HeroService, ng.router.Router, function(service, router) {
			this.heroService = service;
			this.router = router;
			this.heroes = [];
        }],

		ngOnInit: function() {
            this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        },

        gotoDetail: function(hero) {
  			this.router.navigate(['/detail', hero.id]);
        }
    });

})(window.app || (window.app = {}));
