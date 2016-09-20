"use strict";

(function (app) {
    app.HeroesComponent = ng.core.Component({
        selector: 'my-heroes',
        providers: [app.HeroService],
        templateUrl: 'app/heroes.component.html',
        styleUrls:  ['app/heroes.component.css']
    })
    .Class({
        constructor: [app.HeroService, ng.router.Router, function(service, router) {
            this.heroService = service;
            this.router = router;
            this.heroes = [];
        }],

        getHeroes: function() {
            this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
        },

        ngOnInit: function() {
              this.getHeroes();
        },

        onSelect: function(hero) {
            this.selectedHero = hero;
        },

         gotoDetail: function(hero) {
            this.router.navigate(['/detail', this.selectedHero.id]);
        }
    });

})(window.app || (window.app = {}));
