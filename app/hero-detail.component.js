"use strict";

(function(app) {

    app.HeroDetailComponent = ng.core.Component({
        selector: 'my-hero-detail',
		providers: [app.HeroService],
		inputs: [
			'hero'
		],
        templateUrl: 'app/hero-detail.component.html',
		styleUrls: ['app/hero-detail.component.css']
    })
    .Class({
        constructor: [app.HeroService, ng.router.ActivatedRoute, function(service, route) {
			this.heroService = service;
			this.route = route;
        }],

		ngOnInit: function() {
			this.route.params.forEach((params) => {
				let id = +params['id'];
				this.heroService.getHero(id).then(hero => this.hero = hero);
			});
        },

		goBack: function() {
			window.history.back();
        },
    });
})(window.app || (window.app = {}));
